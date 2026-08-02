import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import landingImage from "../../Images/LandingPageImage.jpeg";
import HeroActions from "./HeroActions";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-landing relative isolate min-h-[100svh] overflow-hidden bg-[#03080d] text-white"
    >
      <div className="hero-photo-frame absolute inset-y-0 left-0 right-0 lg:left-[20%] lg:-right-[20%]">
        <Image
          src={landingImage}
          alt="Jeevika working beside a panoramic window overlooking a green landscape"
          fill
          sizes="100vw"
          className="hero-image object-cover object-[23%_center] lg:object-center"
          quality={95}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,7,12,.98)_0%,rgba(2,8,14,.88)_24%,rgba(2,8,14,.46)_51%,rgba(2,8,14,.14)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,5,10,.55)_0%,transparent_32%,transparent_66%,rgba(0,5,10,.86)_100%)]" />
      <div className="hero-grain absolute inset-0 opacity-[0.1]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1536px] flex-col px-6 sm:px-10 lg:px-[5.5%]">
        <div className="flex flex-1 items-center pb-44 pt-28 sm:pb-40 sm:pt-36 lg:pb-36 lg:pt-40">
          <div className="hero-copy max-w-[525px] lg:-translate-y-20">
            <p className="hero-reveal text-[14px] font-normal tracking-[0.045em] text-[#5874ff] sm:text-[16px]">
              Hi, I&apos;m
            </p>

            <h1
              id="hero-title"
              className="hero-reveal mt-2.5 text-[clamp(2.3rem,4.2vw,3.7rem)] font-semibold leading-[1.04] tracking-[-0.04em]"
              style={{ animationDelay: "90ms" }}
            >
              Jeevika Kiran
            </h1>

            <p
              className="hero-reveal mt-4 text-[14px] font-medium leading-tight text-white/70 sm:text-[17px]"
              style={{ animationDelay: "160ms" }}
            >
              Computer Science Graduate Student
            </p>

            <p
              className="hero-reveal mt-6 max-w-[490px] text-[13px] font-light leading-[1.75] text-white/68 sm:text-[16px]"
              style={{ animationDelay: "230ms" }}
            >
              Passionate about AI, Systems and building impactful products that
              solve real-world problems.
            </p>

            <div className="hero-reveal" style={{ animationDelay: "300ms" }}>
              <HeroActions />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between sm:bottom-10 sm:left-10 sm:right-10 lg:bottom-[6.5%] lg:left-[5.5%] lg:right-[5.5%]">
          <div className="hidden sm:block">
            <p className="mb-4 text-[11px] font-normal uppercase tracking-[0.16em] text-white/70">
              Let&apos;s connect
            </p>
            <HeroActions socialOnly />
          </div>

          <a
            href="#about"
            className="group absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-[10px] font-light uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white lg:flex"
          >
            Scroll to explore
            <ArrowDown className="h-6 w-6 transition-transform duration-300 group-hover:translate-y-1.5" strokeWidth={1.1} />
          </a>

          <div className="ml-auto flex items-center gap-2 text-[12px] font-light text-white/75 sm:text-[13px]">
            <MapPin className="h-[18px] w-[18px] text-white" strokeWidth={1.5} />
            <span>Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
