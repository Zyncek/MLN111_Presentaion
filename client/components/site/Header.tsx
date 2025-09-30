import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV } from "./nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        scrolled ? "shadow-sm" : "",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md">
            <span className="absolute inset-0 rounded-md bg-primary/30 blur-sm animate-blob" />
            <span className="relative z-10 text-sm font-extrabold text-primary-foreground mix-blend-multiply">
              ML
            </span>
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            Triết học Mác - Lênin
          </span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container grid gap-1 py-2">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {i.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
