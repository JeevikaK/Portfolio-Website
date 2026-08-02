import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  ExternalLink,
  Medal,
  Microscope,
  Network,
  PenTool,
  Trophy,
} from "lucide-react";
import BotanicalBackdrop from "./SectionBotanicals";

const publications = [
  {
    title: "Foresight — IEEE GCAT 2025",
    image: "/assets/Foresight.jpeg",
    year: "2025",
    id: "11118397",
    description: "Published in IEEE Xplore",
    meta: "Multimodal generative AI  ·  Accessibility",
    url: "https://ieeexplore.ieee.org/document/11118397",
  },
  {
    title: "AuthEZ — IEEE GCAT 2024",
    image: "/assets/AuthEZ.png",
    year: "2024",
    id: "10923933",
    description: "Published in IEEE Xplore",
    meta: "Identity systems  ·  Passwordless authentication",
    url: "https://ieeexplore.ieee.org/document/10923933",
  },
];

const recognitions = [
  {
    year: "2023",
    title: "Top 7 / 700",
    subtitle: "Unisys Innovation Program",
    description: "Global finalist with AuthEZ, selected from more than 700 participating teams.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Pradarshana Winner",
    subtitle: "Best Final-Year Project",
    description: "Awarded first place for Foresight at Ramaiah Institute of Technology's innovation exhibition.",
    icon: Medal,
    url: "https://drive.google.com/file/d/1LHQk4tzCKmij75kSKlS7N-tzXy5YDWs2/view?usp=sharing",
  },
  {
    year: "2024",
    title: "Research Recognition",
    subtitle: "Unisys Campus Research",
    description: "Recognized for developing the Foresight accessibility accelerator through academic-industry research.",
    icon: Microscope,
    url: "https://drive.google.com/file/d/16EL7E8wdPXN6FFzPgy5EiARDtngURw_u/view?usp=sharing",
  },
];

const certifications = [
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
    <section id="gallery" className="achievements-paper relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <BotanicalBackdrop variant="achievements" />
      <div className="relative z-10 mx-auto grid max-w-[1536px] gap-12 px-6 sm:px-10 lg:grid-cols-[270px_1fr] lg:gap-14 lg:px-[5.5%]">
        <header className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9b6e45]">
            Achievements
          </p>
          <h2 className="mt-4 max-w-[260px] font-serif text-[clamp(2.65rem,4vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#171713]">
            Milestones That Define My Journey
          </h2>
          <span className="mt-6 block h-px w-10 bg-[#a4744c]" />
          <p className="mt-6 max-w-[230px] text-[14px] font-light leading-[1.8] text-[#3f3d37]/78">
            A collection of recognitions, publications and certifications that reflect my passion for learning, research and impact.
          </p>
        </header>

        <div className="min-w-0">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[#e8dfd2] text-[#27251f]">
                <BookOpen className="h-[19px] w-[19px]" strokeWidth={1.5} />
              </span>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#25231f]">
                Publications
              </h3>
            </div>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-[#5c5952] sm:block">
              2 peer-reviewed papers
            </p>
          </div>

          <div className="mt-3 grid gap-4 md:grid-cols-2">
            {publications.map((publication) => (
              <article
                key={publication.id}
                className="group relative min-h-[315px] overflow-hidden rounded-[18px] bg-[#171a1b] text-white"
              >
                <Image
                  src={publication.image}
                  alt={`Visual for ${publication.title}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="object-cover opacity-75 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                <div className="relative flex min-h-[315px] flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/45 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em]">
                      IEEE
                    </span>
                    <span className="rounded-full border border-white/45 px-4 py-1.5 text-[10px] font-medium tracking-[0.12em]">
                      {publication.year}
                    </span>
                  </div>
                  <h4 className="mt-7 max-w-[85%] font-serif text-[clamp(1.55rem,2.3vw,2rem)] font-normal leading-[1.1] tracking-[-0.025em]">
                    {publication.title}
                  </h4>
                  <p className="mt-5 text-[12px] font-light leading-6 text-white/80">
                    {publication.description}
                    <br />
                    (ID: {publication.id}).
                  </p>
                  <span className="mt-4 block h-px w-10 bg-[#c59a70]" />
                  <p className="mt-auto pr-14 text-[11px] font-light leading-5 text-white/74">
                    {publication.meta}
                  </p>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${publication.title} on IEEE Xplore`}
                    className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/55 transition hover:bg-white hover:text-black"
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={1.4} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 border-t border-[#827d72]/20 pt-3">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[#e8dfd2] text-[#27251f]">
                  <Award className="h-[19px] w-[19px]" strokeWidth={1.5} />
                </span>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#25231f]">
                  Awards & Recognitions
                </h3>
              </div>
              <a
                href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#3e3b35] sm:inline-flex"
              >
                View all awards
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>

            <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {recognitions.map((recognition) => {
                const Icon = recognition.icon;
                return (
                  <article
                    key={recognition.title}
                    className="relative min-h-[215px] rounded-[15px] border border-[#918a7d]/25 bg-white/12 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a4744c]/45 hover:bg-white/28"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[#e9e0d3] text-[#594733]">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-[#a06e45]">
                          {recognition.year}
                        </p>
                        <h4 className="mt-2 font-serif text-[21px] font-normal leading-[1.08] tracking-[-0.025em] text-[#24221e]">
                          {recognition.title}
                        </h4>
                        <p className="mt-2 text-[11px] font-medium text-[#3e3a34]">
                          {recognition.subtitle}
                        </p>
                        <p className="mt-2 text-[11px] font-light leading-[1.6] text-[#4a4640]/76">
                          {recognition.description}
                        </p>
                      </div>
                    </div>
                    {recognition.url && (
                      <a
                        href={recognition.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${recognition.title}`}
                        className="absolute bottom-4 right-4 text-[#6b6256] transition hover:text-black"
                      >
                        <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-6 border-t border-[#827d72]/20 pt-3">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-[#e8dfd2] text-[#27251f]">
                  <Medal className="h-[19px] w-[19px]" strokeWidth={1.5} />
                </span>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#25231f]">
                  Certifications
                </h3>
              </div>
              <a
                href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#3e3b35] sm:inline-flex"
              >
                View all certifications
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>

            <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {certifications.map((certification) => {
                const Icon = certification.icon;
                return (
                  <article
                    key={certification.title}
                    className="group relative min-h-[155px] rounded-[15px] border border-[#918a7d]/25 bg-white/12 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a4744c]/45 hover:bg-white/28"
                  >
                    <div className="flex items-start gap-4">
                      <span className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[12px] bg-[#e9e0d3] text-[#594733]">
                        <Icon className="h-[21px] w-[21px]" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 pr-3">
                        <p className="text-[10px] font-semibold tracking-[0.08em] text-[#a06e45]">
                          {certification.year}
                        </p>
                        <h4 className="mt-1.5 font-serif text-[18px] font-normal leading-[1.12] tracking-[-0.02em] text-[#24221e]">
                          {certification.title}
                        </h4>
                        <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5b554d]">
                          {certification.issuer}
                        </p>
                        <p className="mt-2 text-[10.5px] font-light leading-[1.55] text-[#4a4640]/76">
                          {certification.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certification.title} credential`}
                      className="absolute bottom-4 right-4 text-[#6b6256] transition group-hover:translate-x-0.5 group-hover:text-black"
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
