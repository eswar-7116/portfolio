export default function printEasterEgg(ACCENT: string, ACCENT_MUTED: string) {
  const eswarAscii = `
███████╗███████╗██╗    ██╗ █████╗ ██████╗ 
██╔════╝██╔════╝██║    ██║██╔══██╗██╔══██╗
█████╗  ███████╗██║ █╗ ██║███████║██████╔╝
██╔══╝  ╚════██║██║███╗██║██╔══██║██╔══██╗
███████╗███████║╚███╔███╔╝██║  ██║██║  ██║
╚══════╝╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`;

  // My name
  console.log(
    `%c${eswarAscii}`,
    `color: ${ACCENT}; font-weight: bold; font-family: monospace; font-size: 12px; text-shadow: 0 0 10px ${ACCENT}55;`,
  );

  console.log(
    "%c  Most people scroll past. You opened DevTools. Respect 🫡!  ",
    `background: ${ACCENT}; color: #0a0a0a; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-family: monospace; font-size: 13px; margin-top: 4px;`,
  );

  console.log(
    "%cI write systems that do more by doing less.",
    `color: ${ACCENT_MUTED}; font-family: monospace; font-size: 12px; line-height: 1.8;`,
  );

  // Spacer
  console.log("%c ", "line-height: 4px;");

  // CTA
  console.log(
    "%cLet's build something → eswardudi06@gmail.com  ",
    `background: #0a0a0a; color: ${ACCENT}; border: 1px solid ${ACCENT}66; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-family: monospace; font-size: 12px;`,
  );
}
