interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white/5 rounded-lg p-6 border border-transparent hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_hsl(37_40%_60%/0.15)]">
    <h3 className="text-gold uppercase text-xs tracking-widest font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-gold/15 text-white">
          {s}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
