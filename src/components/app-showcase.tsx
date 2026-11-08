import { useEffect, useRef } from "react";
import { ChevronRight, Grid2X2, Shield, UserRound } from "lucide-react";
import "./app-showcase.css";

const pillars = [
  { title: "CLIENT", subtitle: "DIRECT JET CARE", icon: UserRound, tone: "client" },
  { title: "FLEET OPS", subtitle: "OPERATIONS CONTROL", icon: Grid2X2, tone: "fleet" },
  { title: "DETAILERS", subtitle: "SERVICE EXECUTION", icon: Shield, tone: "detailers" },
];

export function AppShowcase() {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const section = scene?.closest(".who-section");
    if (!scene || !section) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    const render = () => {
      x += (targetX - x) * 0.065;
      y += (targetY - y) * 0.065;
      scene.style.setProperty("--pointer-x", x.toFixed(4));
      scene.style.setProperty("--pointer-y", y.toFixed(4));
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.001) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };
    const start = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const move = (event: Event) => {
      if (motion.matches || !pointer.matches) return;
      const e = event as PointerEvent;
      if (e.pointerType !== "mouse") return;
      const bounds = section.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((e.clientX - bounds.left) / bounds.width) * 2 - 1));
      targetY = Math.max(-1, Math.min(1, ((e.clientY - bounds.top) / bounds.height) * 2 - 1));
      start();
    };
    const reset = () => {
      targetX = 0;
      targetY = 0;
      start();
    };
    const preferenceChanged = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      x = y = targetX = targetY = 0;
      scene.style.setProperty("--pointer-x", "0");
      scene.style.setProperty("--pointer-y", "0");
    };
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", reset);
    motion.addEventListener("change", preferenceChanged);
    pointer.addEventListener("change", preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", preferenceChanged);
      pointer.removeEventListener("change", preferenceChanged);
    };
  }, []);

  return (
    <figure className="jetacy-showcase" ref={sceneRef} aria-label="Jetacy Detailing OS app preview">
      <div className="jetacy-screen">
        <div className="jetacy-screen-brand">
          <svg viewBox="231 671 1238 359" role="img" aria-label="Jetacy">
            <image href="/images/jetacy-logo.png" width="1700" height="1701" />
          </svg>
          <span>DETAILING OS</span>
        </div>
        {pillars.map(({ title, subtitle, icon: Icon, tone }) => (
          <div className={`jetacy-pillar-slot jetacy-pillar-${tone}`} key={tone}>
            <div className="jetacy-pillar-depth">
              <div className="jetacy-pillar-parallax">
                <div className="jetacy-pillar-card">
                  <span className="jetacy-pillar-icon">
                    <Icon strokeWidth={1.8} />
                  </span>
                  <span className="jetacy-pillar-copy">
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                  </span>
                  <span className="jetacy-pillar-chevron">
                    <ChevronRight strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="jetacy-screen-caption">
          Aircraft detailing OS providing precision care,
          <br />
          protection &amp; presentation standards for
          <br />
          private &amp; business aviation
        </div>
      </div>
    </figure>
  );
}
