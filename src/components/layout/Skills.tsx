import { languages, libs, tools } from "@/data/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="space-y-12">
        <h2
          className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
          id="skills-heading"
        >
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            02.
          </span>{" "}
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          <SkillGroup title="Languages" skills={languages} />
          <SkillGroup title="Libraries & Frameworks" skills={libs} />
          <SkillGroup title="Tools & Platforms" skills={tools} />
        </div>
      </div>
    </div>
  );
}

