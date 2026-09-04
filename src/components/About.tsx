import Image from "next/image";
import { ArrowRight } from "lucide-react";
import aboutImage from "../../Images/AboutPageImage-highres.jpg";
import BotanicalBackdrop from "./SectionBotanicals";

const focusAreas = [
  {
    title: "Agentic AI",
    description: "Agent skills, LLM evaluation and model validation.",
  },
  {
    title: "AI Systems",
    description: "RAG, inference workflows and production Python services.",
  },
  {
    title: "Multimodal ML",
    description: "Vision, audio and learning systems for robotics.",
  },
  {
    title: "At Scale",
    description: "Data infrastructure processing more than 1M daily events.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="about-paper relative isolate min-h-[100svh] overflow-hidden text-[#1b1b19]"
    >
      <BotanicalBackdrop variant="about" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:px-[5.5%] lg:py-[11vh]">
        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <div className="max-w-[720px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#a67c52]">
                About me
              </p>
              <h2
                id="about-title"
                className="mt-5 max-w-[650px] text-[clamp(2.55rem,4.1vw,3.8rem)] font-light leading-[1.04] tracking-[-0.045em]"
              >
                I’m drawn to the things we haven’t figured out yet.
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
                className="glass-cta group mt-7 inline-flex h-[46px] min-w-[178px] items-center justify-between px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white"
              >
                My story
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[680px] lg:h-full lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-[10px] border border-[#a67c52]/28 bg-[#e6ddcf]/35"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] border border-white/65 bg-[#d8d0c3] shadow-[0_28px_72px_rgba(55,42,28,.18)] lg:h-full lg:min-h-[560px] lg:aspect-auto">
              <Image
                src={aboutImage}
                alt="Jeevika Kiran standing in a library"
                fill
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 70vw, calc(100vw - 48px)"
                className="object-cover object-[57%_center]"
                quality={95}
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,10,.04),transparent_62%,rgba(20,16,10,.12))]" />
            </div>
          </figure>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ title, description }) => (
            <article
              key={title}
              className="group relative flex min-h-[104px] overflow-hidden rounded-[5px] border border-white/60 bg-white/28 px-5 py-[18px] shadow-[0_10px_28px_rgba(64,48,30,.055)] backdrop-blur-[3px] transition-[background-color,border-color,box-shadow] duration-300 hover:border-[#a67c52]/35 hover:bg-white/42 hover:shadow-[0_14px_34px_rgba(64,48,30,.08)]"
            >
              <span
                aria-hidden="true"
                className="mr-4 w-px shrink-0 self-stretch bg-[#a67c52]/55 transition-colors duration-300 group-hover:bg-[#a67c52]/85"
              />
              <div className="self-center">
                <h3 className="text-[13px] font-medium tracking-[-0.01em] text-[#23231f]">
                  {title}
                </h3>
                <p className="mt-1.5 max-w-[260px] text-[12px] font-light leading-[1.55] text-[#32322e]/72 sm:text-[12.5px]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
