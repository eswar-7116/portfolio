import Image from "next/image";
import React from "react";

type SkillBoxProps = { skill: Skill } & React.LiHTMLAttributes<HTMLLIElement>;

export default function SkillBox({ skill, ...props }: SkillBoxProps) {
  return (
    <li
      {...props}
      className="flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 group bg-foreground/[0.03] border-foreground/10 text-foreground/60 hover:border-accent/30 hover:text-foreground"
    >
      <div className="size-6 rounded-md bg-white/10 flex items-center justify-center p-1 group-hover:bg-white/20 transition-colors">
        <Image
          src={skill.iconURL}
          alt=""
          height={16}
          width={16}
          className="size-4 opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <span className="text-sm font-mono">{skill.title}</span>
    </li>
  );
}
