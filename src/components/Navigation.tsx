"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const marker = window.scrollY + window.innerHeight * 0.36;
      let currentSection = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentSection = id;
      });

      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "border-b border-black/5 bg-[#f4f0e6]/88 text-[#1b1b19] shadow-[0_8px_30px_rgba(32,26,18,.06)] backdrop-blur-xl lg:bg-transparent lg:shadow-none"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[80px] w-full max-w-[1536px] items-center justify-between px-6 sm:px-10 lg:px-[5.5%]">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className={`text-[32px] font-light tracking-[-0.06em] transition-colors ${
            isScrolled
              ? activeSection === "about"
                ? "text-[#1b1b19]/85 lg:text-white"
                : "text-[#1b1b19]/85"
              : "text-white/85"
          }`}
          aria-label="Back to home"
        >
          JK<span className="text-[#5471ff]">.</span>
        </button>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`relative py-3 text-[11px] font-normal uppercase tracking-[0.17em] transition-colors ${
                isScrolled ? "text-[#1b1b19]/68 hover:text-[#1b1b19]" : "text-white/72 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                item.id === "home" ? (
                  <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4666ff]" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 h-px w-9 -translate-x-1/2 bg-current" />
                )
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={`grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden ${
            isScrolled || isMobileMenuOpen
              ? "border-black/20 text-[#1b1b19] hover:bg-black/5"
              : "border-white/25 text-white hover:bg-white/10"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#030910]/96 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid px-6 py-5 sm:px-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="border-b border-white/10 py-3.5 text-left text-[12px] font-normal uppercase tracking-[0.17em] text-white/70 transition-colors last:border-0 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
