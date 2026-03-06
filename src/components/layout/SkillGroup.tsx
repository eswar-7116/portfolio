import SkillBox from "../reusable/SkillBox";

export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-mono text-foreground/40 uppercase tracking-widest font-bold">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2" role="list">
        {skills.map((skill, idx) => (
          <SkillBox skill={skill} key={idx} />
        ))}
      </ul>
    </div>
  );
}
