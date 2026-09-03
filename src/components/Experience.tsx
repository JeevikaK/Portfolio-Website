"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  Cpu,
  Database,
  GitBranch,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siApachekafka,
  siDocker,
  siDotnet,
  siFastapi,
  siGit,
  siHuggingface,
  siJavascript,
  siMeta,
  siMongodb,
  siNodedotjs,
  siOnnx,
  siOwasp,
  siPlotly,
  siPostgresql,
  siPython,
  siPytorch,
  siReact,
  siRedhatopenshift,
  siStreamlit,
  siVolvo,
} from "simple-icons";
import BotanicalBackdrop from "./SectionBotanicals";

type ExperienceItem = {
  timelineYear: string;
  period: string;
  title: string;
  company: string;
  companyMark: "ibm" | "usc" | "volvo";
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

const experiences: ExperienceItem[] = [
  {
    timelineYear: "2022",
    period: "Aug 2022 — Nov 2022",
    title: "Software Developer Intern",
    company: "Volvo Digital & IT",
    companyMark: "volvo",
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
    timelineYear: "2024",
    period: "Jan 2024 — Jul 2024",
    title: "Software Developer Intern",
    company: "IBM India Software Labs",
    companyMark: "ibm",
    location: "Bengaluru, India",
    description:
      "Built OWASP-based vulnerability detection and automated remediation workflows with IBM Granite, LLaMA and FastAPI, backed by logging pipelines for security trend analysis.",
    technologies: ["Python", "FastAPI", "IBM Granite", "LLaMA", "OWASP", "IBM Carbon", "SQL"],
    achievements: [
      "Reduced manual vulnerability-review workload by 50%",
      "Automated fixes using IBM Granite and LLaMA models",
      "Improved accessibility with IBM Design Principles and Carbon components",
    ],
  },
  {
    timelineYear: "2024",
    period: "Jul 2024 — Jul 2025",
    title: "Software Developer",
    company: "IBM India Software Labs",
    companyMark: "ibm",
    location: "Bengaluru, India",
    description:
      "Engineered Python services, secure LLM workflows, telemetry systems and Kafka analytics pipelines for watsonx Code Assistant, while optimizing relational and NoSQL data models for high-volume workloads.",
    technologies: ["Python", "FastAPI", "Kafka", "SQL", "NoSQL", "Red Hat OpenShift", "IBM Granite"],
    achievements: [
      "Built more than 15 production data visualizations",
      "Improved IBM Granite model performance by 70%",
      "Contributed to two proof of concepts and a patent idea",
    ],
  },
  {
    timelineYear: "2025",
    period: "Oct 2025 — Feb 2026",
    title: "Research Assistant",
    company: "USC GLAMOR Lab",
    companyMark: "usc",
    location: "Los Angeles, CA",
    description:
      "Trained multimodal vision-language models for robotic manipulation and long-horizon task planning, and developed automated evaluation tooling across more than 10 manipulation scenarios.",
    technologies: ["Python", "PyTorch", "Hugging Face", "Vision-Language Models", "Robotics", "Benchmarking"],
    achievements: [
      "Achieved 85% success on benchmark manipulation tasks",
      "Reduced model-assessment time by 50%",
      "Evaluated cube lifting, charger insertion and 10+ robotic scenarios",
    ],
  },
  {
    timelineYear: "2026",
    period: "May 2026 — Aug 2026",
    title: "AI Foundations Software Engineer Intern",
    company: "IBM Research · T. J. Watson Research Center",
    companyMark: "ibm",
    location: "Yorktown Heights, NY",
    description:
      "Built AI developer tools and Agent Skills for the IBM Granite Agent Laboratory, automating benchmark evaluation, failure analysis and model validation across the model-development lifecycle.",
    technologies: ["Python", "Streamlit", "Plotly", "Hugging Face", "Transformers", "ONNX", "CI/CD", "IBM Granite"],
    achievements: [
      "Reduced manual feedback analysis by 70% with interactive dashboards",
      "Improved Granite compatibility-testing accuracy by 50%",
      "Validated models across Hugging Face, Transformers and ONNX",
    ],
  },
];

const timelineYears = ["2022", "2024", "2025", "2026"] as const;

type TechnologyIcon =
  | { brand: SimpleIcon; fallback?: never; ibm?: never }
  | { fallback: LucideIcon; brand?: never; ibm?: never }
  | { ibm: true; brand?: never; fallback?: never };

const technologyIcons: Record<string, TechnologyIcon> = {
  Python: { brand: siPython },
  JavaScript: { brand: siJavascript },
  "React.js": { brand: siReact },
  React: { brand: siReact },
  FastAPI: { brand: siFastapi },
  ".NET": { brand: siDotnet },
  "Node.js": { brand: siNodedotjs },
  Kafka: { brand: siApachekafka },
  "Red Hat OpenShift": { brand: siRedhatopenshift },
  "IBM Cloud": { ibm: true },
  Docker: { brand: siDocker },
  "IBM Granite": { ibm: true },
  "IBM Carbon": { ibm: true },
  PostgreSQL: { brand: siPostgresql },
  "Microsoft SQL": { fallback: Database },
  SQL: { fallback: Database },
  NoSQL: { fallback: Database },
  MongoDB: { brand: siMongodb },
  SSO: { fallback: ShieldCheck },
  Git: { brand: siGit },
  LLaMA: { brand: siMeta },
  OWASP: { brand: siOwasp },
  PyTorch: { brand: siPytorch },
  "Hugging Face": { brand: siHuggingface },
  Streamlit: { brand: siStreamlit },
  Plotly: { brand: siPlotly },
  ONNX: { brand: siOnnx },
  Transformers: { fallback: BrainCircuit },
  "Vision-Language Models": { fallback: BrainCircuit },
  Robotics: { fallback: Bot },
  Benchmarking: { fallback: ChartNoAxesCombined },
  "CI/CD": { fallback: GitBranch },
};

const BrandIcon = ({ icon, className, color }: { icon: SimpleIcon; className: string; color?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
    <path d={icon.path} fill={color ?? "currentColor"} />
  </svg>
);

const IbmMark = ({ compact = false }: { compact?: boolean }) => (
  <span
    aria-hidden="true"
    className={compact ? "text-[7px] font-black leading-none tracking-[-0.09em]" : "text-[28px] font-black leading-none tracking-[-0.1em]"}
    style={{
      fontFamily: "Arial, Helvetica, sans-serif",
      backgroundImage:
        "repeating-linear-gradient(to bottom, currentColor 0, currentColor 1.4px, transparent 1.4px, transparent 2.8px)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    IBM
  </span>
);

const UscMark = () => (
  <span
    aria-hidden="true"
    className="font-serif text-[22px] font-semibold tracking-[-0.06em] text-[#ffcc00]"
  >
    USC
  </span>
);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(timelineYears.length - 1);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);
  const activeYear = timelineYears[activeIndex];
  const activeExperiences = experiences
    .filter((experience) => experience.timelineYear === activeYear)
    .reverse();

  useEffect(() => {
    const timeline = mobileTimelineRef.current;
    const activeButton = timeline?.children[activeIndex] as HTMLElement | undefined;
    if (!timeline || !activeButton) return;

    timeline.scrollTo({
      left: activeButton.offsetLeft - (timeline.clientWidth - activeButton.clientWidth) / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

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
            className="glass-cta group mt-7 inline-flex h-[48px] min-w-[182px] items-center justify-between px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            View full resume
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
          </a>
        </header>

        <div className="relative z-10 min-w-0">
          <div className="relative hidden grid-cols-4 gap-3 pb-7 md:grid">
            <span className="absolute left-[12.5%] right-[12.5%] top-[31px] h-px bg-[#8b867c]/45" />
            {timelineYears.map((year, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className="group relative text-left focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#8e5d32]"
                >
                  <span className={`block text-center text-[11px] font-medium transition-colors ${isActive ? "text-[#8d6037]" : "text-[#282722]"}`}>
                    {year}
                  </span>
                  <span
                    className={`relative z-10 mx-auto mt-[13px] block h-3 w-3 rounded-full border bg-[#f3efe6] transition-all duration-300 ${
                      isActive
                        ? "border-[#9b704a] shadow-[0_0_0_5px_rgba(155,112,74,.14)] before:absolute before:inset-[2px] before:rounded-full before:bg-[#8e5d32]"
                        : "border-[#9d978c] group-hover:border-[#8e5d32]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div ref={mobileTimelineRef} className="experience-timeline mb-5 flex snap-x gap-2 overflow-x-auto pb-1 md:hidden">
            {timelineYears.map((year, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={year}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[96px] snap-start rounded-lg border px-3 py-3 text-center transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#8e5d32] ${
                    isActive
                      ? "border-[#9b704a] bg-[#e7ddcf] text-[#7b4e29]"
                      : "border-[#8b867c]/25 bg-white/15 text-[#4b4943]/70"
                  }`}
                >
                  <span className="block text-[12px] font-medium">{year}</span>
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {activeExperiences.map((activeExperience) => (
          <article
            key={`${activeExperience.company}-${activeExperience.period}`}
            className="grid overflow-hidden rounded-[12px] border border-[#8f897d]/28 bg-white/18 shadow-[0_18px_55px_rgba(67,54,35,.04)] lg:grid-cols-[1fr_300px]"
          >
            <div className="p-6 sm:p-7 lg:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-[7px] bg-[#191916] text-[15px] font-semibold tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(0,0,0,.14)]">
                  {activeExperience.companyMark === "volvo" ? (
                    <BrandIcon icon={siVolvo} className="h-10 w-10" />
                  ) : activeExperience.companyMark === "usc" ? (
                    <UscMark />
                  ) : (
                    <IbmMark />
                  )}
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
                  const icon = technologyIcons[technology] ?? { fallback: Cpu };
                  return (
                    <span
                      key={technology}
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#e8e2d8]/78 px-2.5 py-1.5 text-[10px] font-normal text-[#34312c]"
                    >
                      <span
                        className="grid h-3 w-3 shrink-0 place-items-center text-[#755235]"
                        style={icon.ibm ? { color: "#0f62fe" } : undefined}
                      >
                        {icon.brand ? (
                          <BrandIcon icon={icon.brand} className="h-3 w-3" color={`#${icon.brand.hex}`} />
                        ) : icon.ibm ? (
                          <IbmMark compact />
                        ) : (
                          <icon.fallback className="h-3 w-3" strokeWidth={1.6} aria-hidden="true" />
                        )}
                      </span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
