"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 56);
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

  const hasLightSurface = isScrolled || isMobileMenuOpen;

  return (
    <nav aria-label="Main navigation" className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`premium-nav-shell pointer-events-auto flex h-[48px] w-full items-center justify-between px-5 sm:h-[58px] sm:px-8 lg:h-[56px] lg:px-[5.5%] ${
          hasLightSurface ? "premium-nav-shell--scrolled text-[#1b1b19]" : "text-white"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className={`mobile-nav-brand text-[21px] font-light tracking-[-0.065em] transition-[color,opacity] duration-300 hover:opacity-70 sm:text-[26px] lg:text-[29px] ${
            hasLightSurface ? "text-[#1b1b19]" : "text-white"
          }`}
          aria-label="Back to home"
        >
          JK<span className="text-[#d18a74]">.</span>
        </button>

        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`group relative py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isActive
                    ? hasLightSurface ? "text-[#1b1b19]" : "text-white"
                    : hasLightSurface ? "text-[#1b1b19]/58 hover:text-[#1b1b19]" : "text-white/62 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-[5px] left-1/2 h-px -translate-x-1/2 bg-current transition-[width,opacity] duration-500 ${
                    isActive ? "w-7 opacity-75" : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-45"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className={`mobile-nav-trigger grid h-8 w-8 place-items-center rounded-[4px] border transition-[color,background-color,border-color] duration-300 sm:h-9 sm:w-9 lg:hidden ${
            hasLightSurface
              ? "border-black/10 text-[#1b1b19] hover:bg-black/5"
              : "border-white/20 text-white hover:bg-white/10"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-[15px] w-[15px]" /> : <Menu className="h-[15px] w-[15px]" />}
        </button>
      </div>

      <div
        className={`premium-mobile-menu pointer-events-auto mt-0 overflow-hidden lg:hidden ${
          isMobileMenuOpen ? "max-h-[430px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="grid px-4 py-3 sm:px-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center justify-between border-b border-black/[0.07] py-3.5 text-left text-[11px] font-medium uppercase tracking-[0.17em] transition-colors last:border-0 ${
                activeSection === item.id ? "text-[#9a6546]" : "text-[#1b1b19]/66 hover:text-[#1b1b19]"
              }`}
            >
              {item.label}
              <span className="text-[9px] font-light opacity-45">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
