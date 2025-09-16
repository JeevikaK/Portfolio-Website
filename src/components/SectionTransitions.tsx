"use client";

import { useEffect } from 'react';

const SectionTransitions = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-hidden');
        } else {
          entry.target.classList.add('section-hidden');
          entry.target.classList.remove('section-visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      section.classList.add('section-transition');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null;
};

export default SectionTransitions;
