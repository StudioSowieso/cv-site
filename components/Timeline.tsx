"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Tijdlijn waarvan de lijn meegroeit met het scrollen.
 * Kinderen zijn <li data-node>-elementen; die lichten op zodra de lijn ze bereikt.
 */
export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.62;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      el.style.setProperty("--p", progress.toFixed(4));

      el.querySelectorAll<HTMLElement>("[data-node]").forEach((node) => {
        node.classList.toggle("is-on", node.getBoundingClientRect().top < anchor);
      });
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol ref={ref} className="timeline">
      {children}
    </ol>
  );
}
