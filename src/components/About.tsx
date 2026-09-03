import Image from "next/image";
import { ArrowRight, Box, BrainCircuit, Code2, Database, Linkedin } from "lucide-react";
import aboutImage from "../../Images/AboutPageImage-highres.jpg";
import BotanicalBackdrop from "./SectionBotanicals";

const focusAreas = [
  {
    icon: Code2,
    title: "Agentic AI",
    description: "Agent skills, LLM evaluation and model validation.",
  },
  {
    icon: BrainCircuit,
    title: "AI Systems",
    description: "RAG, inference workflows and production Python services.",
  },
  {
    icon: Box,
    title: "Multimodal ML",
    description: "Vision, audio and learning systems for robotics.",
  },
  {
    icon: Database,
    title: "At Scale",
    description: "Data infrastructure processing more than 1M daily events.",
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate min-h-[100svh] overflow-hidden bg-[#f4f0e6] text-[#1b1b19]">
      <div className="grid min-h-[100svh] lg:grid-cols-[34%_66%]">
        <div className="relative flex min-h-[58svh] items-center justify-center overflow-hidden bg-[#d8d0c3] px-6 pb-9 pt-24 sm:px-10 lg:min-h-[100svh] lg:px-[11%] lg:py-[12vh]">
          <div className="relative w-full max-w-[300px] sm:max-w-[420px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[8px] border border-white/35 bg-[#171714] shadow-[0_26px_70px_rgba(45,35,24,.22)]">
              <Image
                src={aboutImage}
                alt="Jeevika Kiran standing in a library"
                fill
                sizes="(min-width: 1024px) 30vw, calc(100vw - 48px)"
                className="object-cover object-center"
                quality={95}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,8,.08),transparent_55%,rgba(14,12,8,.2))]" />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 text-[#292722]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a6546]">
                  Los Angeles, CA
                </p>
                <p className="mt-1.5 text-[12px] font-light text-[#292722]/70">
                  AI &amp; Software Engineer
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Jeevika on LinkedIn"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#292722]/35 transition-all hover:-translate-y-0.5 hover:border-[#292722] hover:bg-[#292722] hover:text-white"
              >
                <Linkedin className="h-[17px] w-[17px]" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>

        <div className="about-paper relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-12 pt-14 sm:px-10 sm:pt-20 lg:px-[8%] lg:pb-14 lg:pt-[12vh]">
          <BotanicalBackdrop variant="about" />

          <div className="relative z-10 max-w-[680px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#a67c52]">
              About me
            </p>
            <h2
              id="about-title"
              className="mt-5 max-w-[650px] text-[clamp(2.55rem,4.1vw,3.8rem)] font-light leading-[1.04] tracking-[-0.045em]"
            >
              I build AI that works beyond the demo.
            </h2>
            <span className="mt-7 block h-px w-10 bg-[#a67c52]" />
            <div className="mt-6 max-w-[650px] text-[14px] font-light leading-[1.75] text-[#282824]/82 sm:text-[15px]">
              <p>
                I&apos;m Jeevika, pursuing an M.S. in Computer Science at USC.
                Before graduate school, I worked as a software engineer at IBM
                Software Labs. Since then, I&apos;ve moved between industry and
                research—building production systems at scale and exploring AI,
                robotics and developer tooling.
              </p>
              <div className="mt-5 border-l border-[#a67c52]/70 pl-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#9a704a]">
                  How I work
                </p>
                <p className="mt-2.5">
                  I&apos;m happiest when the answer isn&apos;t obvious—digging into an
                  unfamiliar problem, testing ideas and understanding why
                  something works. That space between research and reliable
                  engineering is where I do my best work.
                </p>
              </div>
            </div>

            <a
              href="#experience"
              className="glass-cta group mt-7 inline-flex h-[52px] min-w-[194px] items-center justify-between px-7 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              My story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
            </a>
          </div>

          <div className="relative z-10 mt-10 grid max-w-[680px] gap-3 sm:grid-cols-2 lg:mt-11">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group flex min-h-[96px] items-center gap-4 rounded-[8px] border border-[#8c887e]/30 bg-white/18 p-4 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 hover:border-[#a67c52]/60 hover:bg-white/34"
              >
                <div className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[8px] bg-[#e7dfd1] text-[#23231f] transition-colors group-hover:bg-[#d9c8b2]">
                  <Icon className="h-[19px] w-[19px]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[12px] font-light leading-[1.55] text-[#32322e]/76 sm:text-[13px]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
