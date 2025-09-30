import { useEffect, useState } from "react";

export function ParallaxLayer({ speed = 0.2, className = "", children }: { speed?: number; className?: string; children?: React.ReactNode }) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY * speed);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return (
    <div className={className} style={{ transform: `translate3d(0, ${y}px, 0)` }}>
      {children}
    </div>
  );
}
