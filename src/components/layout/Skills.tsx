import { languages, libs, tools } from "@/data/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-15 py-10 px-4 sm:px-10 rounded-xl text-center text-white"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-3xl sm:text-4xl font-bold mb-5 text-blue-500"
      >
        Skills
      </h2>
      <div className="max-w-5xl mx-auto">
        <SkillGroup title="Languages" skills={languages} />
        <SkillGroup title="Libraries & Frameworks" skills={libs} />
        <SkillGroup title="Tools & Platforms" skills={tools} />
      </div>
    </section>
  );
}
