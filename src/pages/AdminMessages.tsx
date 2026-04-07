import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, RefreshCw, Loader2, Trash2, CheckCircle, Circle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) navigate("/admin", { replace: true });
  };

  const fetchMessages = async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setMessages(data as ContactMessage[]);
    setLoading(false);
    setRefreshing(false);
  };

  const toggleRead = async (msg: ContactMessage) => {
    const newRead = !msg.is_read;
    setMessages((prev) => prev.map((m) => m.id === msg.id ? { ...m, is_read: newRead } : m));
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: newRead } as any)
      .eq("id", msg.id);
    if (error) {
      setMessages((prev) => prev.map((m) => m.id === msg.id ? { ...m, is_read: !newRead } : m));
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message permanently?")) return;
    const prev = messages;
    setMessages((m) => m.filter((msg) => msg.id !== id));
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      setMessages(prev);
      toast({ title: "Error", description: "Failed to delete", variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: "Message removed" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin", { replace: true });
  };

  useEffect(() => {
    checkAuth();
    fetchMessages();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") navigate("/admin", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const unreadCount = messages.filter((m) => !m.is_read).length;

  return (
    <>
      <SEOHead title="Admin — Messages" description="View contact form submissions" />
      <div className="min-h-screen bg-background">
        <header className="bg-card border-b border-border px-4 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-accent" />
              <h1 className="font-heading text-lg text-foreground">Contact Messages</h1>
              <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                {messages.length}
              </span>
              {unreadCount > 0 && (
                <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => fetchMessages(true)}
                disabled={refreshing}
                className="p-2 text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-muted"
              >
                <RefreshCw size={16} className={refreshing ? "animate-spin" : ""} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition px-3 py-1.5 rounded-lg hover:bg-muted"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 size={24} className="animate-spin text-muted-foreground" />
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground text-sm">
              No messages yet. They'll appear here when someone submits the contact form.
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`bg-card border rounded-xl p-5 transition ${
                    msg.is_read ? "border-border opacity-70" : "border-accent/30 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleRead(msg)}
                        className="mt-0.5 text-accent hover:opacity-70 transition"
                        title={msg.is_read ? "Mark as unread" : "Mark as read"}
                      >
                        {msg.is_read ? <CheckCircle size={18} /> : <Circle size={18} />}
                      </button>
                      <div>
                        <h3 className="font-heading text-foreground text-sm">{msg.name}</h3>
                        <a href={`mailto:${msg.email}`} className="text-accent text-xs hover:underline">{msg.email}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-xs">{formatDate(msg.created_at)}</span>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition rounded-lg hover:bg-destructive/10"
                        title="Delete message"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="pl-9">
                    <p className="text-foreground text-sm font-medium mb-1">{msg.subject}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default AdminMessages;
