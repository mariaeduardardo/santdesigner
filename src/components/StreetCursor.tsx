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

    const applyPosition = (x: number, y: number) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }
    };

    const onMove = (e: MouseEvent) => {
      applyPosition(e.clientX, e.clientY);
      setVisible(true);
    };

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

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    applyPosition(initialX, initialY);

    return () => {
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
