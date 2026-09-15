"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

type HeroActionsProps = {
  socialOnly?: boolean;
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeevika-kiran-a0957b242/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/JeevikaK",
    icon: Github,
  },
  {
    label: "Email Jeevika",
    href: "mailto:jeevika.kiran@gmail.com",
    icon: Mail,
  },
];

const HeroActions = ({ socialOnly = false }: HeroActionsProps) => {
  if (socialOnly) {
    return (
      <div className="flex items-center gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group grid h-[42px] w-[42px] place-items-center rounded-full border border-white/45 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#4568ff] hover:bg-[#4568ff]"
          >
            <Icon className="h-[17px] w-[17px] transition-transform duration-300 group-hover:scale-105" strokeWidth={1.7} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
      <a
        href="#projects"
        className="glass-cta hero-cta-button group inline-flex self-start items-center justify-between px-4 text-[9px] font-medium uppercase tracking-[0.1em] text-white"
      >
        View my work
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.35} />
      </a>
      <a
        href="#contact"
        className="glass-cta hero-cta-button group inline-flex self-start items-center justify-between px-4 text-[9px] font-medium uppercase tracking-[0.1em] text-white"
      >
        Get in touch
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.35} />
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/1hMiCVz5KRhsthcoi6SoNaYX4TlmCvo5m"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Jeevika Kiran's resume in Google Drive"
        className="glass-cta hero-cta-button group inline-flex self-start items-center justify-between px-4 text-[9px] font-medium uppercase tracking-[0.1em] text-white"
      >
        Download resume
        <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={1.35} />
      </a>
    </div>
  );
};

export default HeroActions;
