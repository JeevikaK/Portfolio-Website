import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Bot,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  ExternalLink,
  Medal,
  Network,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import PublicationAnimation from "./PublicationAnimation";
import BotanicalBackdrop from "./SectionBotanicals";

const publications = [
  {
    title: "Build reusable Bob skills for developer workflow automation",
    visual: "bob" as const,
    source: "IBM Developer",
    year: "2026",
    description: "Published on IBM Developer",
    meta: "Agentic AI  ·  Reusable developer workflows",
    url: "https://developer.ibm.com/articles/build-reusable-agent-skills-with-bob/",
  },
  {
    title: "Foresight — IEEE GCAT 2025",
    visual: "foresight" as const,
    source: "IEEE",
    year: "2025",
    id: "11118397",
    description: "Published in IEEE Xplore",
    meta: "Multimodal generative AI  ·  Accessibility",
    url: "https://ieeexplore.ieee.org/document/11118397",
  },
  {
    title: "AuthEZ — IEEE GCAT 2024",
    visual: "authez" as const,
    source: "IEEE",
    year: "2024",
    id: "10923933",
    description: "Published in IEEE Xplore",
    meta: "Identity systems  ·  Passwordless authentication",
    url: "https://ieeexplore.ieee.org/document/10923933",
  },
];

const PublicationVisual = ({ type }: { type: "bob" | "foresight" | "authez" }) => (
  <div className={`publication-visual publication-visual--${type}`} aria-hidden="true">
    <PublicationAnimation type={type} />
  </div>
);

const recognitions = [
  {
    year: "2026",
    title: "IBM Internship Certificate",
    subtitle: "IBM Internship Program",
    description: "Verified completion of the internship learning plan, manager-directed project work and final impact presentation.",
    image: "/assets/IBMInternshipCertificateBlue.png",
    imageAlt: "IBM Internship Program Certificate digital badge issued to Jeevika Kiran",
    imageClass: "object-contain object-center",
    frameClass: "bg-[#1428ff]",
    rotation: "xl:rotate-[0.3deg]",
    url: "https://www.credly.com/badges/fd823d18-9909-4d10-a981-add72ccace45/linked_in_profile",
  },
  {
    year: "2024",
    title: "Best Capstone Project",
    subtitle: "Best Final-Year Project within the Information Science Department",
    description: "Awarded first place for Foresight at Ramaiah Institute of Technology's innovation exhibition.",
    image: "/assets/Pradarshana.jpeg",
    imageAlt: "Jeevika Kiran receiving the Pradarshana Best Final-Year Project award",
    imageClass: "scale-[1.08] object-cover object-[center_40%] group-hover:scale-[1.12]",
    frameClass: "bg-[#ece9e1]",
    rotation: "xl:-rotate-[0.2deg]",
    url: "https://drive.google.com/file/d/1LHQk4tzCKmij75kSKlS7N-tzXy5YDWs2/view?usp=sharing",
  },
  {
    year: "2024",
    title: "Research Recognition",
    subtitle: "Unisys Campus Research",
    description: "Recognized for developing the Foresight accessibility accelerator through academic-industry research.",
    image: "/assets/UnisysResearch.png",
    imageAlt: "Unisys certificate recognizing Jeevika Kiran's Foresight research",
    imageClass: "scale-[1.04] object-cover object-center group-hover:scale-[1.06]",
    frameClass: "bg-[#ece9e1]",
    rotation: "xl:rotate-[0.2deg]",
    url: "https://drive.google.com/file/d/16EL7E8wdPXN6FFzPgy5EiARDtngURw_u/view?usp=sharing",
  },
  {
    year: "2023",
    title: "Top 7 / 700",
    subtitle: "Unisys Innovation Program",
    description: "Global finalist with AuthEZ, selected from more than 700 participating teams.",
    image: "/assets/UnisysInnovation.png",
    imageAlt: "Jeevika Kiran and fellow finalists at the Unisys Innovation Program",
    imageClass: "scale-[1.08] object-cover object-center group-hover:scale-[1.12]",
    frameClass: "bg-[#ece9e1]",
    rotation: "xl:-rotate-[0.3deg]",
  },
];

const certifications = [
  {
    year: "2026",
    title: "AI Engineer Agentic Track",
    issuer: "Udemy",
    description: "Complete Agent & MCP course covering agentic systems and reusable AI tooling.",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-4ab8fb78-3682-40af-9c43-b06fc20cf779.pdf",
    icon: Bot,
  },
  {
    year: "2024",
    title: "Enterprise Design Thinking",
    issuer: "IBM",
    description: "Applying enterprise design-thinking principles to practical product challenges.",
    url: "https://www.coursera.org/account/accomplishments/verify/276H4XNQGTCU",
    icon: PenTool,
  },
  {
    year: "2023",
    title: "Convolutional Neural Networks",
    issuer: "Coursera",
    description: "Deep-learning concepts and applications for visual recognition systems.",
    url: "https://www.coursera.org/account/accomplishments/verify/276H4XNQGTCU",
    icon: BrainCircuit,
  },
  {
    year: "2023",
    title: "Advanced Learning Algorithms",
    issuer: "Coursera",
    description: "Advanced machine-learning algorithms, evaluation and implementation practices.",
    url: "https://www.coursera.org/account/accomplishments/verify/MN2R3HGBXKGV",
    icon: Network,
  },
  {
    year: "2022",
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    description: "Regression and classification techniques for supervised-learning problems.",
    url: "https://www.coursera.org/account/accomplishments/verify/PBNLNCFKYYF6",
    icon: ChartNoAxesCombined,
  },
  {
    year: "2022",
    title: "Foundational Data, ML & AI",
    issuer: "Google Cloud",
    description: "Foundational data, machine-learning and AI workflows on Google Cloud.",
    url: "https://www.cloudskillsboost.google/public_profiles/f05ef982-4025-4dee-b437-d9b5e2b65f0f/badges/3455947?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    icon: Cloud,
  },
  {
    year: "2021",
    title: "Python Data Structures",
    issuer: "Coursera",
    description: "Core Python data structures and their use in practical problem solving.",
    url: "https://www.coursera.org/account/accomplishments/certificate/KRABXZ59U9GE",
    icon: Code2,
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="achievements-paper relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      <BotanicalBackdrop variant="achievements" />
      <div className="relative z-10 mx-auto grid max-w-[1536px] gap-12 px-6 sm:px-10 lg:grid-cols-[320px_1fr] lg:gap-x-12 lg:gap-y-0 lg:px-[5.5%]">
        <header className="relative max-w-[320px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9b6e45]">
            Achievements
          </p>
          <h2 className="mt-4 max-w-[320px] text-[clamp(2.65rem,3.7vw,3.55rem)] font-light leading-[1.06] tracking-[-0.04em] text-[#171713]">
            Milestones That Define My Journey
          </h2>
          <span className="mt-6 block h-px w-10 bg-[#a4744c]" />
          <p className="mt-6 max-w-[300px] text-[13.5px] font-light leading-[1.75] text-[#3f3d37]/78 sm:text-[14px]">
            A collection of recognitions, publications and certifications that reflect my passion for learning, research and impact.
          </p>
        </header>

        <div className="min-w-0 lg:contents">
          <div className="min-w-0 lg:col-start-2">
            <div className="flex items-end justify-between gap-5 border-b border-[#837e73]/25 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-[5px] border border-black/10 bg-white/18 text-[#171715]">
                  <BookOpen aria-hidden="true" className="h-4 w-4" strokeWidth={1.35} />
                </span>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-light tracking-[-0.025em] text-[#25231f]">
                  Publications
                </h3>
              </div>
              <p className="hidden pb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#5c5952]/75 sm:block">
                3 publications · 2 peer-reviewed
              </p>
            </div>

            <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {publications.map((publication) => (
                <article
                  key={publication.url}
                  className={`publication-card publication-card--${publication.visual} group relative min-h-[248px] overflow-hidden rounded-[14px] bg-[#171a1b] text-white`}
                >
                  <PublicationVisual type={publication.visual} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#121210] via-[#151411]/88 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

                  <div className="relative flex min-h-[248px] flex-col p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/45 px-3.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em]">
                        {publication.source}
                      </span>
                      <span className="rounded-full border border-white/45 px-3.5 py-1 text-[9px] font-medium tracking-[0.12em]">
                        {publication.year}
                      </span>
                    </div>
                    <h4 className="mt-5 max-w-[88%] text-[clamp(1.2rem,1.65vw,1.55rem)] font-light leading-[1.12] tracking-[-0.025em]">
                      {publication.title}
                    </h4>
                    <p className="mt-3 text-[11px] font-light leading-5 text-white/80">
                      {publication.description}
                      {publication.id && (
                        <>
                          <br />
                          (ID: {publication.id}).
                        </>
                      )}
                    </p>
                    <span className="mt-3 block h-px w-8 bg-[#c59a70]" />
                    <p className="mt-auto pr-12 text-[10px] font-light leading-5 text-white/74">
                      {publication.meta}
                    </p>
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${publication.title} on ${publication.source}`}
                      className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/55 transition hover:bg-white hover:text-black"
                    >
                      <ExternalLink className="h-4 w-4" strokeWidth={1.4} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div id="awards-recognitions" className="mt-8 scroll-mt-24 lg:col-span-2 lg:col-start-1">
            <div className="flex items-end justify-between gap-5 border-b border-[#837e73]/25 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-[5px] border border-black/10 bg-white/18 text-[#171715]">
                  <Award aria-hidden="true" className="h-4 w-4" strokeWidth={1.35} />
                </span>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-light tracking-[-0.025em] text-[#25231f]">
                  Awards & Recognitions
                </h3>
              </div>
              <a
                href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-3 pb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#3e3b35]/75 transition-colors hover:text-[#1b1b18] sm:inline-flex"
              >
                View all awards
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>

            <div className="recognition-stack mt-6 grid gap-9 sm:grid-cols-2 xl:flex xl:gap-0">
              {recognitions.map((recognition) => {
                return (
                  <article
                    key={recognition.title}
                    className="recognition-stack-item group relative xl:shrink-0"
                  >
                    <div className="mb-3 px-1 xl:min-h-[58px]">
                      <p className="text-[9px] font-semibold tracking-[0.14em] text-[#a06e45]">
                        {recognition.year}
                      </p>
                      <h4 className="mt-1 text-[18px] font-light leading-[1.1] tracking-[-0.02em] text-[#24221e] sm:text-[19px]">
                        {recognition.title}
                      </h4>
                    </div>

                    <div className={`recognition-polaroid relative mx-auto max-w-[382px] p-3 pb-0 transition-shadow duration-500 group-hover:shadow-[0_26px_48px_rgba(72,59,42,0.19)] ${recognition.rotation}`}>
                      <span className="recognition-pin" aria-hidden="true" />
                      <div className={`relative aspect-[4/3] overflow-hidden ${recognition.frameClass}`}>
                        <Image
                          src={recognition.image}
                          alt={recognition.imageAlt}
                          fill
                          sizes="(min-width: 1280px) 382px, (min-width: 640px) 46vw, calc(100vw - 72px)"
                          className={`transition-transform duration-700 ${recognition.imageClass}`}
                          quality={90}
                        />
                      </div>

                      <div className="recognition-polaroid-copy relative min-h-[126px] px-2 pb-5 pt-4 xl:min-h-[142px]">
                        <p className="text-[12px] leading-[1.65] text-[#37342f]/78">
                          <span className="font-semibold text-[#25231f]">
                            {recognition.subtitle}.{" "}
                          </span>
                          {recognition.description}
                        </p>
                        {recognition.url && (
                          <a
                            href={recognition.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${recognition.title}`}
                            className="recognition-polaroid-link absolute bottom-5 right-1 grid h-7 w-7 place-items-center rounded-full border border-[#756e63]/35 text-[#5e574d] transition hover:border-[#28251f] hover:bg-[#28251f] hover:text-white"
                          >
                            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div id="certifications" className="mt-8 scroll-mt-24 lg:col-span-2 lg:col-start-1">
            <div className="flex items-end justify-between gap-5 border-b border-[#837e73]/25 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-[5px] border border-black/10 bg-white/18 text-[#171715]">
                  <Medal aria-hidden="true" className="h-4 w-4" strokeWidth={1.35} />
                </span>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-light tracking-[-0.025em] text-[#25231f]">
                  Certifications
                </h3>
              </div>
              <a
                href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-3 pb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#3e3b35]/75 transition-colors hover:text-[#1b1b18] sm:inline-flex"
              >
                View all certifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((certification) => {
                const Icon = certification.icon;
                return (
                  <article
                    key={certification.title}
                    className="achievement-card group relative min-h-[150px] overflow-hidden rounded-[12px] border p-4 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[7px] bg-[#191916] text-white shadow-[0_8px_20px_rgba(0,0,0,.12)]">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.4} />
                      </span>
                      <div className="min-w-0 pr-5">
                        <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#8f6945]">
                          {certification.year}
                        </p>
                        <h4 className="mt-1.5 text-[14px] font-medium leading-[1.15] tracking-[-0.02em] text-[#24221e]">
                          {certification.title}
                        </h4>
                        <p className="mt-1.5 text-[9px] font-medium text-[#9a6e47]">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 border-t border-[#8f897d]/18 pt-3 text-[9.5px] font-light leading-[1.55] text-[#34322e]/72">
                      {certification.description}
                    </p>
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certification.title} credential`}
                      className="absolute right-3.5 top-3.5 grid h-7 w-7 place-items-center rounded-md border border-[#8f897d]/22 text-[#5d5951]/70 transition-colors group-hover:border-[#8e5d32]/45 group-hover:text-[#8e5d32]"
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
