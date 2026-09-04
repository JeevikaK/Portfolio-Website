"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Github,
  Glasses,
  Layers3,
  ScanFace,
  ScanEye,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import BotanicalBackdrop from "./SectionBotanicals";

const filters = ["All", "AI & ML", "Systems", "Web Development"] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    title: "Deepfake Detection",
    category: "AI & ML" as const,
    description:
      "A multimodal deepfake detection system that fuses visual artifacts, audio authenticity and lip-sync alignment into one per-video probability, reaching 0.9993 ROC-AUC and 98.67% validation accuracy on FakeAVCeleb.",
    image: "/assets/projects/deepfake-detection-stock-v2.jpg",
    imageAlt: "Audio and video editing timelines representing multimodal deepfake analysis",
    technologies: [
      "PyTorch",
      "EfficientNet-B0",
      "Wav2Vec2",
      "SyncNet",
      "MTCNN",
      "OpenCV",
    ],
    githubUrl: "https://github.com/JeevikaK/Deepfake-Detection/",
    icon: ScanFace,
  },
  {
    title: "Life Lens",
    category: "AI & ML" as const,
    description:
      "An AI-guided VR therapy platform that lets therapists design multi-stage sessions and delivers them on Meta Quest through immersive 360° environments, Gemini Live voice guidance and intelligent scene transitions.",
    image: "/assets/projects/life-lens-stock-v2.jpg",
    imageAlt: "Virtual-reality headset and tracking sensor used for an immersive therapy session",
    technologies: [
      "Gemini Live",
      "WebXR",
      "Three.js",
      "React",
      "FastAPI",
      "Meta Quest",
    ],
    liveUrl: "https://www.youtube.com/watch?v=kNfriew4CGc",
    primaryLabel: "Watch demo",
    secondaryUrl: "https://github.com/JeevikaK/Life-Lens",
    secondaryLabel: "View project",
    githubUrl: "https://github.com/JeevikaK/Life-Lens",
    icon: Glasses,
  },
  {
    title: "Foresight",
    category: "AI & ML" as const,
    description:
      "Foresight is an open-source accessibility accelerator for visually impaired users, integrating ShareGPT4V for visual analysis, Detectron2 for object grounding, and Gemma 7B for improved accuracy. With speech-to-text and text-to-speech interaction, it reduces hallucinations and identifies 12% more useful information than baseline models, delivering reliable, context-aware assistance.",
    image: "/assets/projects/foresight-mobile-stock-v3.jpg",
    imageAlt: "Mobile phone representing Foresight's accessible on-device visual assistance",
    technologies: [
      "Generative AI",
      "Detectron2",
      "ShareGPT4V",
      "Gemma 7B",
      "ReactJS",
      "Django",
      "SQLite",
      "Kotlin",
    ],
    liveUrl:
      "https://drive.google.com/file/d/17JhqY_Z2MobLL9N9fnKZo53WVXx6ZM8x/view?usp=sharing",
    primaryLabel: "Watch demo",
    secondaryUrl: "https://github.com/JeevikaK/Foresight",
    secondaryLabel: "View project",
    githubUrl: "https://github.com/JeevikaK/Foresight",
    icon: BrainCircuit,
  },
  {
    title: "AuthEZ",
    category: "Systems" as const,
    description:
      "AuthEZ is a passwordless identity provider SDK that combines SSO, facial verification with liveness checks, voice embeddings and RSA cryptographic signatures for secure, seamless access.",
    image: "/assets/projects/authez-stock.jpg",
    imageAlt: "Finger entering a device passcode, representing secure passwordless authentication",
    technologies: [
      "Identity Provider",
      "Facenet",
      "Resemblyzer",
      "WebAuthn API",
      "ReactJS",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl:
      "https://drive.google.com/file/d/1-Rdxjag_jsWGm6aWPfSP0xFCzdbx3MOJ/view?usp=drivesdk",
    githubUrl: "https://github.com/JeevikaK/AuthEZ",
    icon: ShieldCheck,
  },
  {
    title: "Memoirs",
    category: "Web Development" as const,
    description:
      "A mental-health surveillance and assessment platform for teens and students, with personalized music recommendations and AI-powered assistance.",
    image: "/assets/projects/memoirs-stock.jpg",
    imageAlt: "Person journaling beside a smartphone, representing Memoirs' digital wellness tools",
    technologies: ["React", "TypeScript", "Next.js"],
    githubUrl: "https://github.com/JeevikaK/MindMap/tree/MindMap",
    icon: Layers3,
  },
  {
    title: "Student Buzz",
    category: "Web Development" as const,
    description:
      "A collaborative platform for students to showcase their skills and projects, participate in club activities and connect with peers across colleges.",
    image: "/assets/projects/student-buzz-stock.jpg",
    imageAlt: "Two students collaborating with a laptop and notebook outdoors",
    technologies: ["Django", "ReactJS", "SQLite"],
    githubUrl: "https://github.com/JeevikaK/Student-Buzz",
    icon: Users,
  },
  {
    title: "Car Theft Detection System",
    category: "AI & ML" as const,
    description:
      "An automated vehicle-theft detection system using moving-object detection and barcode scanning to identify suspicious movement and alert parking personnel.",
    image: "/assets/projects/car-theft-stock.jpg",
    imageAlt: "Dark car in a monitored parking garage, representing automated theft detection",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Digital Image Processing",
    ],
    githubUrl: "https://github.com/JeevikaK/Car-theft-detection-Parking",
    icon: ScanEye,
  },
  {
    title: "Valunique",
    category: "Systems" as const,
    description:
      "A bias-aware recruitment platform with faceless hiring and role-based candidate and admin portals.",
    image: "/assets/projects/valunique-stock-v2.jpg",
    imageAlt: "Resume, pen and laptop representing Valunique's bias-aware hiring workflow",
    imagePosition: "18% center",
    technologies: ["ReactJS", "NodeJS", "Microsoft SQL"],
    githubUrl: "https://github.com/JeevikaK/Valunique-Backend",
    icon: Code2,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const trackRef = useRef<HTMLDivElement>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: "smooth" });
  };

  const selectFilter = (filter: Filter) => {
    setActiveFilter(filter);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects-paper relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <BotanicalBackdrop variant="projects" />
      <div className="relative z-10 mx-auto max-w-[1536px] px-5 sm:px-8 lg:px-12">
        <header className="relative mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b28a32]">
            Projects
          </p>
          <h2 className="text-[clamp(2.5rem,4.3vw,4.25rem)] font-light leading-[0.98] tracking-[-0.045em] text-[#151511]">
            My Projects
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-6 text-[#58574f] sm:text-[15px]">
            A selection of products and experiments shaped by curiosity, care,
            <br className="hidden sm:block" /> and a drive to solve meaningful problems.
          </p>

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="View previous projects"
            style={{ left: "calc(50% - 46vw)" }}
            className="projects-arrow absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 text-[#1c1c18] transition hover:border-black hover:bg-black hover:text-white lg:flex"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="View next projects"
            style={{ right: "calc(50% - 46vw)" }}
            className="projects-arrow absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/15 text-[#1c1c18] transition hover:border-black hover:bg-black hover:text-white lg:flex"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </header>

        <div className="projects-filters mt-9 flex items-center justify-start gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => selectFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-[11px] font-medium tracking-wide transition sm:px-6 ${
                activeFilter === filter
                  ? "border-[#171713] bg-[#171713] text-white"
                  : "border-black/20 bg-transparent text-[#57564f] hover:border-black/50 hover:text-black"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative mt-9">
          <div
            ref={trackRef}
            className="projects-track grid snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5 lg:gap-6"
          >
            {visibleProjects.map((project) => {
              const Icon = project.icon;
              const primaryUrl = project.liveUrl ?? project.githubUrl;

              return (
                <article
                  key={project.title}
                  className="group relative h-[500px] snap-start overflow-hidden rounded-[26px] bg-[#292923] sm:h-[545px] lg:h-[570px]"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 639px) 84vw, (max-width: 1023px) 48vw, 25vw"
                    quality={85}
                    className="object-cover saturate-[0.82] contrast-[1.03] transition duration-700 ease-out group-hover:scale-[1.035]"
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-[#9b704a]/[0.05] mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-black/5 to-black/90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#f4f0e5] text-[#1a1a16] shadow-sm">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/15 text-white opacity-0 backdrop-blur-sm transition hover:bg-white hover:text-black focus:opacity-100 group-hover:opacity-100"
                  >
                    <Github className="h-4 w-4" strokeWidth={1.6} />
                  </a>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">
                      {project.category}
                    </p>
                    <h3 className="mt-2 max-w-[90%] text-[29px] font-light leading-[1.02] tracking-[-0.035em] sm:text-[32px]">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-4 text-[12px] font-light leading-[1.55] text-white/80">
                      {project.description}
                    </p>
                    <p className="mt-4 truncate text-[9px] font-medium uppercase tracking-[0.14em] text-white/55">
                      {project.technologies.join("  ·  ")}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a
                        href={primaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] transition hover:border-white"
                      >
                        {project.primaryLabel ?? "View project"}
                        <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                      </a>
                      {project.secondaryUrl && (
                        <a
                          href={project.secondaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/70 transition hover:border-white hover:text-white"
                        >
                          {project.secondaryLabel}
                          <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 flex justify-end gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="View previous projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#1c1c18]"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="View next projects"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-[#1c1c18]"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
