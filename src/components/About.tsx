import Image from "next/image";
import { ArrowRight, Box, BrainCircuit, Code2, Linkedin, Pencil } from "lucide-react";
import aboutImage from "../../Images/AboutPageImage.jpeg";
import BotanicalBackdrop from "./SectionBotanicals";

const focusAreas = [
  {
    icon: Code2,
    title: "Developer",
    description: "Building web applications and digital solutions.",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML",
    description: "Exploring intelligent systems and machine learning.",
  },
  {
    icon: Box,
    title: "Systems",
    description: "Designing scalable and reliable architectures.",
  },
  {
    icon: Pencil,
    title: "Products",
    description: "Creating user-focused products that make an impact.",
  },
];

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate min-h-[100svh] overflow-hidden bg-[#f4f0e6] text-[#1b1b19]">
      <div className="grid min-h-[100svh] lg:grid-cols-[30%_70%]">
        <div className="relative min-h-[68svh] overflow-hidden bg-[#171714] lg:min-h-[100svh]">
          <Image
            src={aboutImage}
            alt="Jeevika Kiran standing in a library"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="origin-bottom scale-[1.2] object-cover object-[35%_center]"
            quality={92}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,8,.18),transparent_45%,rgba(14,12,8,.42))]" />

          <div className="absolute bottom-10 left-8 hidden items-center gap-4 text-white lg:flex">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-light uppercase tracking-[0.26em] text-white/65">
              Let&apos;s connect
            </span>
            <a
              href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect with Jeevika on LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/45 transition-colors hover:border-white hover:bg-white hover:text-[#1b1b19]"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="about-paper relative flex min-h-[100svh] flex-col overflow-hidden px-6 pb-12 pt-24 sm:px-10 lg:px-[7.5%] lg:pb-14 lg:pt-[21.5vh]">
          <BotanicalBackdrop variant="about" />

          <div className="relative z-10 max-w-[680px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#a67c52]">
              About me
            </p>
            <h2
              id="about-title"
              className="mt-5 text-[clamp(2.6rem,4.8vw,4.15rem)] font-light leading-[1.05] tracking-[-0.045em]"
            >
              I&apos;m Jeevika Kiran
            </h2>
            <span className="mt-7 block h-px w-10 bg-[#a67c52]" />
            <p className="mt-6 max-w-[590px] text-[15px] font-light leading-[1.9] text-[#282824]/82 sm:text-[16px]">
              Computer Science graduate student passionate about AI, systems and
              building impactful products that solve real-world problems. I love
              turning ideas into clean, scalable and thoughtful code.
            </p>

            <a
              href="#experience"
              className="group mt-7 inline-flex h-[52px] min-w-[194px] items-center justify-between bg-[#191917] px-7 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a67c52]"
            >
              My story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.4} />
            </a>
          </div>

          <div className="relative z-10 mt-14 grid gap-4 sm:grid-cols-2 xl:mt-auto xl:grid-cols-4">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group min-h-[255px] rounded-[14px] border border-[#8c887e]/30 bg-white/12 p-6 backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-1 hover:border-[#a67c52]/60 hover:bg-white/28"
              >
                <div className="grid h-[52px] w-[52px] place-items-center rounded-[13px] bg-[#e7dfd1] text-[#23231f] transition-colors group-hover:bg-[#d9c8b2]">
                  <Icon className="h-[23px] w-[23px]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em]">
                  {title}
                </h3>
                <p className="mt-4 text-[13px] font-light leading-[1.7] text-[#32322e]/76">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
