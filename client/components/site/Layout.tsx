import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ScrollProgress from "@/components/anim/ScrollProgress";

export default function SiteLayout() {
  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <BackgroundDecor />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob-fast" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/40 blur-3xl animate-blob" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,hsl(var(--primary)/0.08),transparent_60%)]" />
    </div>
  );
}
