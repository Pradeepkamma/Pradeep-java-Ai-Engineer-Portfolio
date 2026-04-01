interface CertCardProps {
  title: string;
  issuer: string;
  status: "completed" | "in-progress";
}

const CertCard = ({ title, issuer, status }: CertCardProps) => (
  <div className="bg-card rounded-lg p-6 border-t-[3px] border-t-gold relative shadow-sm border border-border">
    <span
      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
        status === "completed"
          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
          : "bg-gold/15 text-gold"
      }`}
    >
      {status === "completed" ? "✓ Completed" : "⟳ In Progress"}
    </span>
    <h3 className="font-heading text-foreground text-lg mb-1">{title}</h3>
    <p className="text-muted-foreground text-sm">{issuer}</p>
  </div>
);

export default CertCard;
