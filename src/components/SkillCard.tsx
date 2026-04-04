interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_hsl(37_46%_61%/0.12)] group">
    <h3 className="text-gold uppercase text-xs tracking-widest font-semibold mb-5">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-gold/10 text-foreground border border-gold/20 group-hover:bg-gold/15 transition-all duration-200 hover:scale-105 hover:shadow-sm cursor-default">
          {s}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
