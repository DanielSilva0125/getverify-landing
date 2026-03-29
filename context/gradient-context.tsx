"use client";

import { createContext, useContext, useEffect } from "react";
import { useAnimation } from "framer-motion";

export const LANDING_GRADIENTS = [
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 55%, #1b2e3e 100%)",
  "linear-gradient(to top right, #5381c6 0%, #80c0cc 55%, #1b2e3e 100%)",
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 40%, #1b2e3e 100%)",
  "linear-gradient(to top right, #5381c6 0%, #80c0cc 45%, #1b2e3e 100%)",
  "linear-gradient(to top right, #80c0cc 0%, #5381c6 55%, #1b2e3e 100%)",
];

type AnimationControls = ReturnType<typeof useAnimation>;

const GradientContext = createContext<AnimationControls | null>(null);

export function GradientProvider({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: LANDING_GRADIENTS,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      },
    });
  }, [controls]);

  return (
    <GradientContext.Provider value={controls}>
      {children}
    </GradientContext.Provider>
  );
}

export function useGradientControls() {
  return useContext(GradientContext);
}
