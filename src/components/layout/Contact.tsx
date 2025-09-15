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
      <div className="flex flex-col sm:flex-row justify-center-safe items-center-safe gap-4 sm:gap-6 text-xl mt-2 px-4 sm:px-0">
        <a
          href="/Eswar_Dudi.pdf"
          target="_blank"
          className="w-full sm:w-auto border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-3 sm:p-4 flex items-center justify-center gap-2 transition-transform will-change-transform hover:scale-103"
          rel="noopener noreferrer"
        >
          <FileText />
          Resume
        </a>
        <Link
          href="#ama"
          className="w-full sm:w-56 border-2 border-blue-950 bg-blue-700 rounded-full cursor-pointer p-3 sm:p-4 flex items-center justify-center gap-2 transition-transform will-change-transform hover:scale-103"
        >
          <MessageCircleQuestion /> Ask Me Anything
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-center-safe items-center-safe gap-6 text-lg mt-6 sm:mt-10 underline px-4 sm:px-0">
        <Link
          target="_blank"
          href="mailto:eswardudi06@gmail.com"
          className="flex gap-1.5 items-center transition-transform will-change-transform hover:scale-103"
        >
          <Mail />
          <span className="break-all">eswardudi06@gmail.com</span>
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
