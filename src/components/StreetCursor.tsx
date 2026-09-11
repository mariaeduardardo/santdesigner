import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, .cursor-pointer';

const StreetCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só em dispositivo com mouse/trackpad — touch segue com cursor nativo
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("street-cursor-on");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest?.(HOVER_SELECTOR));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("street-cursor-on");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="street-cursor-root">
      {/* Anel / mira com atraso — cruz estilo stencil */}
      <div
        ref={ringRef}
        data-hover={hovering ? "true" : "false"}
        data-pressed={pressed ? "true" : "false"}
        data-visible={visible ? "true" : "false"}
        className="street-cursor-ring"
      >
        <span className="street-cursor-tick street-cursor-tick-t" />
        <span className="street-cursor-tick street-cursor-tick-b" />
        <span className="street-cursor-tick street-cursor-tick-l" />
        <span className="street-cursor-tick street-cursor-tick-r" />
        <span className="street-cursor-circle" />
      </div>
      {/* Ponto central — segue o mouse 1:1 */}
      <div
        ref={dotRef}
        data-hover={hovering ? "true" : "false"}
        data-pressed={pressed ? "true" : "false"}
        data-visible={visible ? "true" : "false"}
        className="street-cursor-dot"
      />
    </div>
  );
};

export default StreetCursor;
