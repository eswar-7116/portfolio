import {
  ArrowUpRight,
  FileText,
  Mail,
  MessageCircleQuestion,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterXIcon } from "../reusable/icons";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div
        className="flex justify-center-safe items-center-safe gap-6 text-xl mt-2"
      >
        <Link
          href="/Eswar_Dudi.pdf"
          target="_blank"
          className="w-34 h-14 border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-4 flex items-center justify-center gap-2 transition-transform will-change-transform hover:scale-103"
        >
          <FileText />
          Resume
        </Link>
        <Link
          href="#ama"
          className="w-56 h-14 border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-4 flex items-center justify-center gap-2 transition-transform will-change-transform hover:scale-103"
        >
          <MessageCircleQuestion /> Ask Me Anything
        </Link>
      </div>

      <div className="flex justify-center-safe items-center-safe gap-14 text-lg mt-10 underline">
        <Link
          target="_blank"
          href="mailto:eswardudi06@gmail.com"
          className="flex gap-1.5 items-center transition-transform will-change-transform hover:scale-103"
        >
          <Mail />
          eswardudi06@gmail.com
          <ArrowUpRight />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/eswar-dudi/"
          className="flex gap-1.5 items-center transition-transform will-change-transform hover:scale-103"
        >
          <LinkedInIcon className="mb-1" />
          eswar-dudi
          <ArrowUpRight />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/eswar-7116/"
          className="flex gap-1.5 items-center transition-transform will-change-transform hover:scale-103"
        >
          <GitHubIcon />
          eswar-7116
          <ArrowUpRight />
        </Link>
        <Link
          target="_blank"
          href="https://x.com/EswarDudi"
          className="flex gap-1.5 items-center transition-transform will-change-transform hover:scale-103"
        >
          <TwitterXIcon />
          EswarDudi
          <ArrowUpRight />
        </Link>
      </div>
    </>
  );
}
