import { languages, libs, tools } from "@/data/skills";
import SkillGroup from "./SkillGroup";
import NetworkNodes from "@/components/models/NetworkNodes";

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

        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                <div className="space-y-12">
                    <SkillGroup title="Languages" skills={languages} />
                    <SkillGroup title="Tools & Platforms" skills={tools} />
                </div>
                <div>
                     <SkillGroup title="Libraries & Frameworks" skills={libs} />
                </div>
            </div>

            <aside className="w-full lg:w-80 hidden min-[850px]:flex items-center justify-center">
                <div className="w-full aspect-square relative group">
                    <NetworkNodes />
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors"></div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}

