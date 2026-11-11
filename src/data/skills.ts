// Pinned so icons don't change (or break) without a deploy and cache well.
const DEVICON_VERSION = "2.18.0";

const getIconURL = (iconName: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@${DEVICON_VERSION}/icons/${iconName}/${iconName}-original.svg`;

// These logos are (near-)black or very dark and disappear on the dark theme.
const ICON_CLASS_OVERRIDES: Record<string, string> = {
  github: "invert",
  express: "invert",
  flask: "invert",
  socketio: "invert",
  nextjs: "invert",
  mysql: "brightness-[2.2]",
};

const formatIconName = (title: string) =>
  title.replace(/\s|\./g, "").toLowerCase();

const createSkills = (titles: (string | [string, string])[]): Skill[] =>
  titles.map((entry) => {
    if (typeof entry === "string") {
      const iconName = formatIconName(entry);
      return {
        title: entry,
        iconURL: getIconURL(iconName),
        iconClassName: ICON_CLASS_OVERRIDES[iconName],
      };
    } else {
      const [title, iconName] = entry;
      return {
        title,
        iconURL: getIconURL(iconName),
        iconClassName: ICON_CLASS_OVERRIDES[iconName],
      };
    }
  });

export const languages: Skill[] = createSkills([
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "C",
  "Go",
  "Kotlin",
]);

export const libs: Skill[] = createSkills([
  "React",
  "Next.js",
  "Tailwind CSS",
  "Zustand",
  "Bootstrap",
  "Node.js",
  "Express",
  "Socket.io",
  "Flask",
  "FastAPI",
  "Jetpack Compose",
  ["Spring Boot", "spring"],
]);

export const tools: Skill[] = createSkills([
  "Firebase",
  "Supabase",
  "Oracle",
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "NPM",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "SQLite",
]);
