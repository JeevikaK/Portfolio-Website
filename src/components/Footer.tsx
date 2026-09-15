import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/JeevikaK", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeevika-kiran-a0957b242/", icon: Linkedin },
  { label: "Email", href: "mailto:jeevika.kiran@gmail.com", icon: Mail },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-ink border-t border-white/15 text-[#f4f1eb]">
      <div className="mx-auto flex max-w-[1536px] flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[5.5%]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d0a17e]">
            Thanks for stopping by
          </p>
          <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/45">
            © {currentYear} Jeevika Kiran. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/65 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition hover:border-[#d0a17e] hover:bg-[#d0a17e] hover:text-[#17110f]"
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
