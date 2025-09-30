import { useEffect, useState } from "react";
import { NAV } from "./nav";

export function SideTOC() {
  const [active, setActive] = useState<string>(NAV[0].href);

  useEffect(() => {
    const handler = () => {
      let current = active;
      for (const item of NAV) {
        const el = document.querySelector<HTMLElement>(item.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.href;
          break;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <aside className="pointer-events-none fixed right-3 top-24 z-40 hidden w-44 lg:block">
      <div className="pointer-events-auto rounded-xl border bg-background/70 p-2 shadow-sm backdrop-blur">
        <nav className="grid gap-1">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={
                "rounded-md px-3 py-1.5 text-xs transition-colors hover:bg-secondary hover:text-foreground " +
                (active === i.href ? "bg-secondary/80 text-foreground" : "text-foreground/70")
              }
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
