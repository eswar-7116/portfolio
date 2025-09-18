const getIconURL = (iconName: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`;

const formatIconName = (title: string) =>
  title.replace(/\s|\./g, "").toLowerCase();

const createSkills = (titles: (string | [string, string])[]): Skill[] =>
  titles.map((entry) => {
    if (typeof entry === "string") {
      return {
        title: entry,
        iconURL: getIconURL(formatIconName(entry)),
      };
    } else {
      const [title, iconName] = entry;
      return {
        title,
        iconURL: getIconURL(iconName),
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
