export default function printEasterEgg() {
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
    "color: #00ff88; font-weight: bold; font-family: monospace; font-size: 12px; text-shadow: 0 0 10px #00ff8855;",
  );

  console.log(
    "%c  Most people scroll past. You opened DevTools. Respect 🫡!  ",
    "background: #00ff88; color: #0a0a0a; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-family: monospace; font-size: 13px; margin-top: 4px;",
  );

  // Quote
  console.log(
    "%cClean code is a quiet revolution.",
    "color: #04b863; font-family: monospace; font-size: 12px; line-height: 1.8; margin-top: 6px;",
  );

  console.log(
    "%cI write systems that do more by doing less.",
    "color: #04b863; font-family: monospace; font-size: 12px; line-height: 1.8;",
  );

  // Spacer
  console.log("%c ", "line-height: 4px;");

  // CTA
  console.log(
    "%cLet's build something → eswardudi06@gmail.com  ",
    "background: #0a0a0a; color: #00ff88; border: 1px solid #00ff8866; padding: 6px 12px; border-radius: 4px; font-weight: bold; font-family: monospace; font-size: 12px;",
  );
}
