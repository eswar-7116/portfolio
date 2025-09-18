import React from "react";

type SkillBoxProps = { skill: Skill } & React.HTMLAttributes<HTMLDivElement>;

export default function SkillBox({ skill, ...props }: SkillBoxProps) {
  return (
    <div {...props} className="size-26 bg-gray-700/50 rounded-xl p-2 gap-1 flex flex-col justify-center items-center transition will-change-transform hover:scale-105">
      <img src={skill.iconURL} alt={skill.title} className="size-10" />
      {skill.title}
    </div>
  );
}
