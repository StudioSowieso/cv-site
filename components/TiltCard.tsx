"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Kaart die zacht meekantelt met de muis en een lichtvlek volgt.
 * Alleen actief voor een echte muis; op touch gebeurt er niets.
 */
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${((0.5 - y) * 5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 7).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </div>
  );
}
