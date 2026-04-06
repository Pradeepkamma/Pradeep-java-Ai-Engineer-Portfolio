import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, RefreshCw, Loader2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();

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
    if (!error && data) setMessages(data);
    setLoading(false);
    setRefreshing(false);
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

  return (
    <>
      <SEOHead title="Admin — Messages" description="View contact form submissions" />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border px-4 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-accent" />
              <h1 className="font-heading text-lg text-foreground">Contact Messages</h1>
              <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                {messages.length}
              </span>
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

        {/* Content */}
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
                <div key={msg.id} className="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-foreground text-sm">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-accent text-xs hover:underline">{msg.email}</a>
                    </div>
                    <span className="text-muted-foreground text-xs">{formatDate(msg.created_at)}</span>
                  </div>
                  <p className="text-foreground text-sm font-medium mb-1">{msg.subject}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{msg.message}</p>
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
