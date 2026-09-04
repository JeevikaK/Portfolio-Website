import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import BotanicalBackdrop from "./SectionBotanicals";

const contactDetails = [
  {
    label: "Email",
    value: "jeevika.kiran@gmail.com",
    href: "mailto:jeevika.kiran@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Los Angeles, CA",
    icon: MapPin,
  },
  {
    label: "Phone",
    value: "+1 (213) 551-3288",
    href: "tel:+12135513288",
    icon: Phone,
  },
];

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-paper relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <BotanicalBackdrop variant="contact" />
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9b6e4d]">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-4 max-w-[520px] text-[clamp(2.8rem,5.1vw,4.9rem)] font-light leading-[1.02] tracking-[-0.045em] text-[#191915]"
          >
            Let&apos;s create something meaningful.
          </h2>
          <span className="mt-7 block h-px w-10 bg-[#a4744c]" />
          <p className="mt-7 max-w-[500px] text-[14px] font-light leading-[1.85] text-[#3f3c36]/78 sm:text-[15px]">
            I&apos;m always interested in thoughtful products, ambitious ideas and new opportunities. Tell me what you&apos;re working on—or simply say hello.
          </p>

          <div className="mt-10 border-t border-[#837e73]/25">
            {contactDetails.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 place-items-center rounded-[5px] border border-black/10 bg-white/18 text-[#171715] transition-colors duration-300 group-hover:border-black/25 group-hover:bg-white/34">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.35} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8f6848]">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-[13px] font-light text-[#302e29] sm:text-[14px]">
                      {value}
                    </span>
                  </span>
                  {href && <ArrowUpRight className="ml-auto h-4 w-4 text-[#1b1b18]/55 transition-colors group-hover:text-[#1b1b18]" strokeWidth={1.35} />}
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 border-b border-[#837e73]/25 py-4 transition hover:pl-1"
                >
                  {content}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 border-b border-[#837e73]/25 py-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[7px] border border-[#8f897d]/28 bg-white/18 p-6 shadow-[0_18px_55px_rgba(67,54,35,.04)] backdrop-blur-[2px] sm:p-8 lg:p-9">
          <div className="flex flex-col gap-3 border-b border-[#837e73]/25 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9b6e4d]">
                Start a conversation
              </p>
              <h3 className="mt-2.5 text-[28px] font-light tracking-[-0.03em] text-[#22201c] sm:text-[30px]">
                Send me a message
              </h3>
            </div>
            <p className="max-w-[190px] text-[11px] font-light leading-[1.55] text-[#4f4b44]/65 sm:pb-1 sm:text-right">
              Usually replies within two business days.
            </p>
          </div>
          <div className="pt-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
