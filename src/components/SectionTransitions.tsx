"use client";

import { useEffect } from "react";

const SectionTransitions = () => {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-premium-reveal]"),
    );
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    let frame = 0;

    const updateScene = () => {
      frame = 0;
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll-progress", String(Math.min(window.scrollY / scrollable, 1)));

      if (!reducedMotion) {
        sections.forEach((section) => {
          const bounds = section.getBoundingClientRect();
          const centerOffset = bounds.top + bounds.height / 2 - window.innerHeight / 2;
          const shift = Math.max(-18, Math.min(18, centerOffset * -0.025));
          section.style.setProperty("--botanical-shift", `${shift.toFixed(2)}px`);
        });
      }
    };

    const requestSceneUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScene);
    };

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    let observer: IntersectionObserver | undefined;

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("premium-reveal", "is-revealed"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            target.classList.remove("is-pending-reveal");
            target.classList.add("is-revealed");
            observer?.unobserve(target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8%" },
      );

      revealTargets.forEach((target, index) => {
        target.classList.add("premium-reveal");
        target.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);

        if (target.getBoundingClientRect().top < window.innerHeight * 0.9) {
          target.classList.add("is-revealed");
        } else {
          target.classList.add("is-pending-reveal");
          observer?.observe(target);
        }
      });
    }

    updateScene();
    window.addEventListener("scroll", requestSceneUpdate, { passive: true });
    window.addEventListener("resize", requestSceneUpdate, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("scroll", requestSceneUpdate);
      window.removeEventListener("resize", requestSceneUpdate);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <>
      <div className="premium-scroll-progress" aria-hidden="true" />
      <div className="site-ambient-glow" aria-hidden="true" />
    </>
  );
};

export default SectionTransitions;
