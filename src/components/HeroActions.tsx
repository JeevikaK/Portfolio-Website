"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

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
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="#projects"
        className="glass-cta group inline-flex h-[50px] min-w-[190px] self-start items-center justify-between px-6 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1"
      >
        View my work
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.4} />
      </a>
      <a
        href="#contact"
        className="glass-cta group inline-flex h-[50px] min-w-[185px] self-start items-center justify-between px-6 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-1"
      >
        Get in touch
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={1.4} />
      </a>
    </div>
  );
};

export default HeroActions;
