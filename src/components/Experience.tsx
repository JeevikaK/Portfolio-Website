"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  GitBranch,
  MapPin,
  PanelsTopLeft,
  RadioTower,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import BotanicalBackdrop from "./SectionBotanicals";

type ExperienceItem = {
  year: string;
  period: string;
  title: string;
  company: string;
  companyMark: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    year: "2022",
    period: "Aug 2022 — Nov 2022",
    title: "Software Developer Intern",
    company: "Volvo Digital & IT",
    companyMark: "VOLVO",
    location: "Bengaluru, India",
    description:
      "Developed a web application proof of concept for unbiased candidate shortlisting, with single sign-on and multi-level access controls across admin and candidate portals.",
    technologies: ["React", "JavaScript", "SSO", "Node.js", "Git", "MongoDB", "Docker"],
    achievements: [
      "Reduced human effort in first-round screening by 50%",
      "Cut candidate shortlisting time by 70%",
      "Improved documentation efficiency",
    ],
  },
  {
    year: "2024",
    period: "Jan 2024 — Jul 2024",
    title: "Software Developer Intern",
    company: "IBM India Software Labs",
    companyMark: "IBM",
    location: "Bengaluru, India",
    description:
      "Implemented OWASP-based vulnerability detection and automated fixes using IBM Granite and LLaMA models, while improving accessibility through IBM Carbon components.",
    technologies: ["React.js", ".NET", "PostgreSQL", "JavaScript", "Docker", "Python", "Microsoft SQL"],
    achievements: [
      "Improved vulnerability detection by 50%",
      "Created a more consistent and accessible product experience",
    ],
  },
  {
    year: "2025",
    period: "Jul 2024 — Jul 2025",
    title: "Software Developer",
    company: "IBM India Software Labs",
    companyMark: "IBM",
    location: "Bengaluru, India",
    description:
      "Engineered Python backend services, telemetry systems and Kafka analytics pipelines for real-time insight, while optimizing relational and NoSQL data models for high-volume workloads.",
    technologies: ["Python", "FastAPI", "Kafka", "Red Hat OpenShift", "Docker", "IBM Cloud", "IBM Granite"],
    achievements: [
      "Built more than 15 production data visualizations",
      "Improved IBM Granite model performance by 70%",
      "Contributed to two proof of concepts and a patent idea",
    ],
  },
];

const technologyIcons: Record<string, LucideIcon> = {
  Python: Code2,
  JavaScript: Code2,
  "React.js": PanelsTopLeft,
  React: PanelsTopLeft,
  FastAPI: Server,
  ".NET": Server,
  "Node.js": Server,
  Kafka: RadioTower,
  "Red Hat OpenShift": Cloud,
  "IBM Cloud": Cloud,
  Docker: Container,
  "IBM Granite": BrainCircuit,
  PostgreSQL: Database,
  "Microsoft SQL": Database,
  MongoDB: Database,
  SSO: ShieldCheck,
  Git: GitBranch,
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);
  const activeExperience = experiences[activeIndex];

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="experience-paper relative isolate overflow-hidden border-y border-[#23211d]/20 bg-[#f3efe6] text-[#1c1b18]"
    >
      <BotanicalBackdrop variant="experience" />
      <div className="mx-auto grid w-full max-w-[1536px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[260px_1fr] lg:gap-14 lg:px-[5.5%] lg:py-[70px]">
        <header className="relative z-10 lg:pt-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.19em] text-[#a37b54]">
            Experience
          </p>
          <h2
            id="experience-title"
            className="mt-5 max-w-[250px] text-[clamp(2.35rem,3.3vw,3.35rem)] font-light leading-[1.08] tracking-[-0.045em]"
          >
            Where I&apos;ve
            <br />
            Built Impact
          </h2>
          <span className="mt-6 block h-px w-8 bg-[#a37b54]" />
          <p className="mt-5 max-w-[220px] text-[13px] font-light leading-[1.75] text-[#34322d]/72">
            A timeline of my professional journey so far.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex h-[48px] min-w-[182px] items-center justify-between bg-[#1c1b18] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a37b54]"
          >
            View full resume
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
          </a>
        </header>

        <div className="relative z-10 min-w-0">
          <div className="relative hidden grid-cols-3 gap-4 pb-7 md:grid">
            <span className="absolute left-[16.66%] right-[16.66%] top-[31px] h-px bg-[#8b867c]/45" />
            {experiences.map((experience, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={experience.period}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className="group relative text-left"
                >
                  <span className={`block text-center text-[11px] font-medium transition-colors ${isActive ? "text-[#8d6037]" : "text-[#282722]"}`}>
                    {experience.year}
                  </span>
                  <span
                    className={`relative z-10 mx-auto mt-[13px] block h-3 w-3 rounded-full border bg-[#f3efe6] transition-all duration-300 ${
                      isActive
                        ? "border-[#9b704a] shadow-[0_0_0_5px_rgba(155,112,74,.14)] before:absolute before:inset-[2px] before:rounded-full before:bg-[#8e5d32]"
                        : "border-[#9d978c] group-hover:border-[#8e5d32]"
                    }`}
                  />
                  <span className={`mt-4 block text-center text-[11px] font-semibold leading-[1.45] transition-colors ${isActive ? "text-[#1c1b18]" : "text-[#4b4943]/72"}`}>
                    {experience.company}
                  </span>
                  <span className="mt-0.5 block text-center text-[10px] font-light text-[#4b4943]/66">
                    {experience.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2 md:hidden">
            {experiences.map((experience, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={experience.period}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-lg border px-2 py-3 text-center transition-colors ${
                    isActive
                      ? "border-[#9b704a] bg-[#e7ddcf] text-[#7b4e29]"
                      : "border-[#8b867c]/25 bg-white/15 text-[#4b4943]/70"
                  }`}
                >
                  <span className="block text-[12px] font-medium">{experience.year}</span>
                  <span className="mt-1 block truncate text-[9px] uppercase tracking-[0.08em]">
                    {experience.companyMark}
                  </span>
                </button>
              );
            })}
          </div>

          <article className="grid overflow-hidden rounded-[12px] border border-[#8f897d]/28 bg-white/18 shadow-[0_18px_55px_rgba(67,54,35,.04)] lg:grid-cols-[1fr_300px]">
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-[7px] bg-[#191916] text-[15px] font-semibold tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(0,0,0,.14)]">
                  {activeExperience.companyMark}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#8f6945]">
                    {activeExperience.period}
                  </p>
                  <h3 className="mt-2 text-[clamp(1.35rem,2vw,1.8rem)] font-medium leading-tight tracking-[-0.025em]">
                    {activeExperience.title}
                  </h3>
                  <p className="mt-2 text-[12px] font-medium text-[#9a6e47]">
                    {activeExperience.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[10px] font-light text-[#4a4842]/58">
                    <MapPin className="h-3 w-3" strokeWidth={1.5} />
                    {activeExperience.location}
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-[720px] text-[12px] font-light leading-[1.75] text-[#34322e]/76 sm:text-[13px]">
                {activeExperience.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                {activeExperience.technologies.map((technology) => {
                  const TechnologyIcon = technologyIcons[technology] ?? Cpu;
                  return (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#e8e2d8]/78 px-2.5 py-1.5 text-[10px] font-normal text-[#34312c]"
                    >
                      <TechnologyIcon className="h-3 w-3 text-[#8e6743]" strokeWidth={1.6} />
                      {technology}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[#8f897d]/22 p-6 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#5d5951]/68">
                  Key impact
                </p>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#3a3833] hover:text-[#8e5d32]"
                >
                  View work
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
                </a>
              </div>
              <ul className="space-y-5">
                {activeExperience.achievements.map((achievement, index) => {
                  const ImpactIcon = index === 0 ? ChartNoAxesCombined : index === 1 ? Sparkles : Check;
                  return (
                    <li key={achievement} className="flex items-start gap-3 text-[11px] font-light leading-[1.55] text-[#35332e]/78">
                      <ImpactIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8e6743]" strokeWidth={1.6} />
                      <span>{achievement}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
