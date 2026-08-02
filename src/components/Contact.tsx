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
            className="mt-4 max-w-[520px] font-serif text-[clamp(2.8rem,5.1vw,4.9rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#191915]"
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
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e4d9cb] text-[#5d4b39]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8f6848]">
                      {label}
                    </span>
                    <span className="mt-1 block truncate text-[13px] font-light text-[#302e29] sm:text-[14px]">
                      {value}
                    </span>
                  </span>
                  {href && <ArrowUpRight className="ml-auto h-4 w-4 text-[#6d665d]" strokeWidth={1.4} />}
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

        <div className="rounded-[22px] border border-[#817b70]/28 bg-[#f6f1e8]/72 p-6 shadow-[0_24px_70px_rgba(68,52,35,.08)] backdrop-blur-[2px] sm:p-9 lg:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9b6e4d]">
            Start a conversation
          </p>
          <h3 className="mt-3 font-serif text-[30px] font-normal tracking-[-0.03em] text-[#22201c]">
            Send me a message
          </h3>
          <p className="mt-2 text-[12px] font-light leading-5 text-[#4f4b44]/70">
            I usually respond within two business days.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
