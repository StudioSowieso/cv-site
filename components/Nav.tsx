"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Icon } from "./Icons";
import { navItems } from "@/lib/data";

type NavId = (typeof navItems)[number]["id"];

export default function Nav() {
  const [active, setActive] = useState<NavId>("home");
  const progressRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === active),
  );

  // Welke sectie staat in het midden van het scherm?
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-nav]"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = (entry.target as HTMLElement).dataset.nav as NavId | undefined;
          if (id) setActive(id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  // Scrollvoortgang bovenin + randgevallen (helemaal boven / helemaal onder).
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const y = window.scrollY;
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      progressRef.current?.style.setProperty("--progress", progress.toFixed(4));

      if (max > 0 && max - y < 8) setActive("contact");
      else if (y < 24) setActive("home");
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

  // Positie van de glijdende markering in de desktopnavigatie.
  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;

    const measure = () => {
      const el = pill.querySelector<HTMLElement>(`[data-id="${active}"]`);
      if (!el) return;
      pill.style.setProperty("--ind-x", `${el.offsetLeft}px`);
      pill.style.setProperty("--ind-w", `${el.offsetWidth}px`);
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true">
        <span />
      </div>

      <nav className="topnav" aria-label="Hoofdnavigatie">
        <div className="topnav__pill" ref={pillRef}>
          <span className="topnav__ind" aria-hidden="true" />
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  className="topnav__link"
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => setActive(item.id)}
                >
                  {item.long}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="dock" aria-label="Snelnavigatie">
        <div className="dock__pill" style={{ "--i": activeIndex } as CSSProperties}>
          <span className="dock__ind" aria-hidden="true" />
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="dock__link"
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => setActive(item.id)}
                >
                  <Icon name={item.icon} size={22} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
