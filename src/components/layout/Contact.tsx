import {
  ArrowUpRight,
  FileText,
  Mail,
  MessageCircleQuestion,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "../reusable/icons";

export default function Contact() {
  return (
    <>
      <div
        className="flex justify-center-safe items-center-safe gap-6 text-xl scroll-mt-30 mt-2"
        id="contact"
      >
        <a
          href="/Eswar_Dudi.pdf"
          target="_blank"
          className="w-34 h-14 border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-4 flex items-center justify-center gap-2"
        >
          <FileText />
          Resume
        </a>
        <a
          href="#ama-bot"
          className="w-56 h-14 border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-4 flex items-center justify-center gap-2"
        >
          <MessageCircleQuestion /> Ask Me Anything
        </a>
      </div>

      <div className="flex justify-center-safe items-center-safe gap-14 text-lg mt-10 underline">
        <a
          target="_blank"
          href="mailto:eswardudi06@gmail.com"
          className="flex gap-1.5 items-center"
        >
          <Mail />
          eswardudi06@gmail.com
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/eswar-dudi/"
          className="flex gap-1.5 items-center"
        >
          <LinkedInIcon className="mb-1" />
          eswar-dudi
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://github.com/eswar-7116/"
          className="flex gap-1.5 items-center"
        >
          <GitHubIcon />
          eswar-7116
          <ArrowUpRight />
        </a>
        <a
          target="_blank"
          href="https://x.com/EswarDudi"
          className="flex gap-1.5 items-center"
        >
          <TwitterXIcon />
          EswarDudi
          <ArrowUpRight />
        </a>
      </div>
    </>
  );
}
