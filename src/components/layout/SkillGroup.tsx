import SkillBox from "../reusable/SkillBox";

export default function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section
      aria-labelledby={title}
      className="mb-12 w-full"
    >
      <div className="bg-gray-500/20 p-6 px-4 sm:p-8 rounded-xl shadow-lg">
        <h3
          id={title}
          className="text-xl sm:text-2xl font-semibold mb-6 text-blue-400 text-center"
        >
          {title}
        </h3>

        <ul
          className="flex flex-wrap items-center justify-center gap-2"
          role="list"
        >
          {skills.map((skill, idx) => (
            <SkillBox skill={skill} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
}
