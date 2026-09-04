"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

const animationSources = {
  bob: "/assets/publications/bob-automation.lottie",
  foresight: "/assets/publications/foresight-mobile-ai.lottie",
  authez: "/assets/publications/authez-biometrics.lottie",
} as const;

type PublicationAnimationProps = {
  type: keyof typeof animationSources;
};

const PublicationAnimation = ({ type }: PublicationAnimationProps) => {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (reduceMotion === null) {
    return <span className="publication-motion-placeholder" />;
  }

  return (
    <DotLottieReact
      src={animationSources[type]}
      autoplay={!reduceMotion}
      loop={!reduceMotion}
      className={`publication-motion publication-motion--${type}`}
    />
  );
};

export default PublicationAnimation;
