"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setProgress(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: spring,
          background: "linear-gradient(90deg, oklch(0.82 0.18 198), oklch(0.72 0.22 284))",
          boxShadow: "0 0 8px oklch(0.82 0.18 198 / 0.6)",
        }}
      />
    </div>
  );
}
