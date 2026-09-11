import { useEffect, useState } from "react";
import { Disc3 } from "lucide-react";
import {
  attachClickSounds,
  initSoundFromStorage,
  isSoundEnabled,
  setSoundEnabled,
} from "@/lib/sound";

function SoundToggle({ showLabel = false }: { showLabel?: boolean }) {
  const [on, setOn] = useState<boolean>(() => initSoundFromStorage());

  // Mantém as instâncias (menu + rodapé) sincronizadas
  useEffect(() => {
    const sync = (e: Event) => setOn((e as CustomEvent<boolean>).detail);
    window.addEventListener("sant:sound-change", sync);
    setOn(isSoundEnabled());
    return () => window.removeEventListener("sant:sound-change", sync);
  }, []);

  // Click mecânico de vinil ao clicar em links/botões — liga uma vez só
  useEffect(() => {
    attachClickSounds();
  }, []);

  const label = on ? "Desligar efeitos sonoros" : "Ligar efeitos sonoros (chiado de vinil)";

  return (
    <button
      type="button"
      data-sound-toggle
      onClick={() => setSoundEnabled(!on)}
      aria-pressed={on}
      aria-label={label}
      title={label}
      className={
        showLabel
          ? `inline-flex items-center gap-2 h-8 px-3 border text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
              on
                ? "bg-primary/15 border-primary/60 text-primary"
                : "bg-white/10 border-white/10 text-white/60 hover:text-white"
            }`
          : `relative w-8 h-8 border flex items-center justify-center transition-colors ${
              on
                ? "bg-primary/15 border-primary/60 text-primary"
                : "bg-white/10 border-white/10 text-white/60 hover:text-white"
            }`
      }
    >
      <Disc3
        className={`w-4 h-4 ${on ? "animate-[spin_2.5s_linear_infinite] motion-reduce:animate-none" : ""}`}
      />
      {!on && !showLabel && (
        <span aria-hidden="true" className="absolute w-px h-5 bg-current rotate-45 opacity-70" />
      )}
      {showLabel && (
        <span className="flex items-center gap-1.5">
          Som {on ? "on" : "off"}
          <span
            aria-hidden="true"
            className={`w-1.5 h-1.5 rounded-full ${on ? "bg-primary animate-pulse" : "bg-white/25"}`}
          />
        </span>
      )}
      {on && !showLabel && (
        <span aria-hidden="true" className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
      )}
    </button>
  );
}

export default SoundToggle;
