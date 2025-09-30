import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setW(Math.min(100, Math.max(0, (st / h) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}
