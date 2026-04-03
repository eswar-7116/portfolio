import { ArrowUpRight, Mail, MessageCircleQuestion } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterXIcon,
} from "@/components/reusable/icons";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      <div className="space-y-12">
        <h2
          className="text-3xl sm:text-4xl font-mono font-bold flex items-center gap-3"
          id="contact-heading"
        >
          <span className="text-accent underline decoration-accent/30 underline-offset-8">
            05.
          </span>{" "}
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed font-body">
              I&apos;m currently looking for{" "}
              <span className="text-accent font-semibold">
                SDE internship / full-time opportunities
              </span>
              . If you have a role that matches my skills, or if you just want
              to say hi, feel free to reach out.
            </p>

            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10 space-y-4">
              <h3 className="text-sm font-mono text-accent uppercase tracking-widest font-bold flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent"></span>
                Need my resume?
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Reach out with details about the opportunity, and I&apos;ll send
                over a professional CV tailored to your requirements.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="#ama"
              className="flex items-center justify-between p-4 rounded-xl bg-foreground/3 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all group"
            >
              <div className="flex items-center gap-3 text-foreground/80 group-hover:text-accent transition-colors">
                <MessageCircleQuestion size={20} />
                <span className="font-mono text-sm">ask_me_anything()</span>
              </div>
              <ArrowUpRight
                size={18}
                className="text-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </Link>

            <a
              href="mailto:eswardudi06@gmail.com"
              className="flex items-center justify-between p-4 rounded-xl bg-foreground/3 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all group"
            >
              <div className="flex items-center gap-3 text-foreground/80 group-hover:text-accent transition-colors">
                <Mail size={20} />
                <span className="font-mono text-sm">send_email()</span>
              </div>
              <span className="text-xs font-mono text-foreground/30 group-hover:text-accent/60 transition-colors">
                eswardudi06@gmail.com
              </span>
            </a>

            <div className="grid grid-cols-3 gap-4 h-full">
              <a
                href="https://github.com/eswar-7116"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-foreground/3 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all group gap-2"
                aria-label="GitHub"
              >
                <GitHubIcon className="text-foreground/40 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/eswar-dudi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-foreground/3 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all group gap-2"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="text-foreground/40 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://x.com/EswarDudi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-foreground/3 border border-foreground/10 hover:border-accent/30 hover:bg-accent/5 transition-all group gap-2"
                aria-label="X (Twitter)"
              >
                <TwitterXIcon className="text-foreground/40 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
