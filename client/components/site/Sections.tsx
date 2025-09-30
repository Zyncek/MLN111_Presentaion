import Reveal from "@/components/anim/Reveal";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export function CurvySeparator({ flip = false }: { flip?: boolean }) {
  return (
    <div className={cn("relative h-16 w-full overflow-hidden", flip && "rotate-180")}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(var(--secondary) / 0.5)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.4)" />
          </linearGradient>
        </defs>
        <path fill="url(#g)" d="M0,96L120,101.3C240,107,480,117,720,122.7C960,128,1200,128,1320,128L1440,128L1440,160L1320,160C1200,160,960,160,720,160C480,160,240,160,120,160L0,160Z" />
      </svg>
    </div>
  );
}

export function Timeline({ items }: { items: { title: string; content: string }[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-s pl-6">
      {items.map((it, idx) => (
        <Reveal key={idx}>
          <li className="mb-8 ms-6">
            <span className="absolute -start-2 mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border bg-background">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <h4 className="text-base font-semibold">{it.title}</h4>
            <p className="mt-1 text-foreground/80">{it.content}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function Comparison({ a, b, labels }: { a: string[]; b: string[]; labels: { left: string; right: string } }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border bg-card/60 p-6 shadow-sm">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">{labels.left}</h4>
        <ul className="space-y-2">
          {a.map((s, i) => (
            <li key={i} className="leading-relaxed">{s}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border bg-card/60 p-6 shadow-sm">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">{labels.right}</h4>
        <ul className="space-y-2">
          {b.map((s, i) => (
            <li key={i} className="leading-relaxed">{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CriteriaGrid({ points }: { points: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {points.map((p, i) => (
        <Reveal key={i}>
          <div className="group relative overflow-hidden rounded-2xl border bg-card/60 p-5 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl" />
            <div className="mb-2 inline-flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground/80">Tiêu chí</span>
            </div>
            <p className="relative z-10 leading-relaxed">{p}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function QuoteMarquee({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden rounded-xl border bg-secondary/40 py-2">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap text-sm text-foreground/70">
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
        <span className="mx-6">{text}</span>
      </div>
    </div>
  );
}
