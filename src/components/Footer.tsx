import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JeevikaK", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeevika-kiran-a0957b242/", icon: Linkedin },
  { label: "Email", href: "mailto:jeevika.kiran@gmail.com", icon: Mail },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-ink border-t border-white/10 text-[#f1ede4]">
      <div className="mx-auto max-w-[1536px] px-6 py-12 sm:px-10 lg:px-[5.5%] lg:py-14">
        <div className="grid gap-10 border-b border-white/12 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bd956f]">
              Thanks for stopping by
            </p>
            <p className="mt-4 max-w-2xl font-serif text-[clamp(1.8rem,3.2vw,3rem)] font-normal leading-[1.08] tracking-[-0.035em] text-white">
              Let&apos;s build something thoughtful together.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/65 transition hover:border-[#bd956f] hover:bg-[#bd956f] hover:text-[#1d241f]"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/65 transition hover:border-white hover:text-white"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[9px] font-medium uppercase tracking-[0.16em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Jeevika Kiran. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#gallery" className="transition hover:text-white">Achievements</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
