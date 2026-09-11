// Motor de som 100% sintetizado via Web Audio — sem arquivos externos.
// Desligado por padrão. Quando ligado: chiado de vinil bem baixo em loop
// + click mecânico discreto ao clicar em links/botões.
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let hissNodes: { src: AudioBufferSourceNode; gain: GainNode } | null = null;
let enabled = false;

const STORAGE_KEY = "sant-sound-enabled";

function getContext(): AudioContext {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function makeNoiseBuffer(context: AudioContext, seconds: number, crackle: boolean): AudioBuffer {
  const rate = context.sampleRate;
  const buffer = context.createBuffer(1, Math.floor(rate * seconds), rate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < data.length; i++) {
    // Ruído rosa aproximado (bem mais suave que white noise puro)
    const white = Math.random() * 2 - 1;
    last = last * 0.94 + white * 0.06;
    data[i] = last * 2.2;
  }
  if (crackle) {
    // Estalos aleatórios de vinil
    const pops = Math.floor(seconds * 6);
    for (let p = 0; p < pops; p++) {
      const at = Math.floor(Math.random() * data.length);
      const amp = 0.25 + Math.random() * 0.4;
      const len = 20 + Math.floor(Math.random() * 120);
      for (let j = 0; j < len && at + j < data.length; j++) {
        data[at + j] += amp * Math.exp(-j / 18) * (Math.random() > 0.5 ? 1 : -1);
      }
    }
  }
  return buffer;
}

function startHiss() {
  if (!ctx || !master || hissNodes) return;
  const context = ctx;
  const src = context.createBufferSource();
  src.buffer = makeNoiseBuffer(context, 3, true);
  src.loop = true;
  const lowpass = context.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 4200;
  const gain = context.createGain();
  gain.gain.value = 0.028; // chiado bem discreto
  src.connect(lowpass);
  lowpass.connect(gain);
  gain.connect(master);
  src.start();
  hissNodes = { src, gain };
}

function stopHiss() {
  if (!hissNodes || !ctx) return;
  const { src, gain } = hissNodes;
  hissNodes = null;
  try {
    gain.gain.setTargetAtTime(0, ctx.currentTime, 0.08);
    window.setTimeout(() => {
      try { src.stop(); } catch { /* já parado */ }
      src.disconnect();
      gain.disconnect();
    }, 300);
  } catch {
    try { src.stop(); } catch { /* noop */ }
  }
}

/** Click mecânico de agulha: transiente + thumb grave curto. */
export function playVinylClick() {
  if (!enabled) return;
  try {
    const context = getContext();
    if (!master) return;
    const t = context.currentTime;

    // Transiente (agulha no sulco)
    const clickSrc = context.createBufferSource();
    clickSrc.buffer = makeNoiseBuffer(context, 0.05, false);
    const band = context.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 2400;
    band.Q.value = 0.9;
    const clickGain = context.createGain();
    clickGain.gain.setValueAtTime(0.22, t);
    clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.06);
    clickSrc.connect(band);
    band.connect(clickGain);
    clickGain.connect(master);
    clickSrc.start(t);
    clickSrc.stop(t + 0.07);

    // Thump grave (corpo mecânico)
    const osc = context.createOscillator();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(170, t);
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.09);
    const thump = context.createGain();
    thump.gain.setValueAtTime(0.16, t);
    thump.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    osc.connect(thump);
    thump.connect(master);
    osc.start(t);
    osc.stop(t + 0.11);
  } catch {
    // Áudio é extra — nunca quebra o site
  }
}

function notify() {
  window.dispatchEvent(new CustomEvent<boolean>("sant:sound-change", { detail: enabled }));
}

let clickListenerAttached = false;
const CLICK_SELECTOR = 'a, button, [role="button"]';

/** Liga o click de vinil uma única vez, mesmo com o botão no menu + rodapé. */
export function attachClickSounds() {
  if (clickListenerAttached) return;
  clickListenerAttached = true;
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest?.("[data-sound-toggle]")) return;
    if (!target?.closest?.(CLICK_SELECTOR)) return;
    playVinylClick();
  });
}

export function isSoundEnabled(): boolean {
  return enabled;
}

export function setSoundEnabled(on: boolean) {
  enabled = on;
  try {
    localStorage.setItem(STORAGE_KEY, on ? "1" : "0");
  } catch { /* storage indisponível */ }
  if (on) {
    try {
      getContext();
      startHiss();
      // Agulha caindo no disco ao ligar
      window.setTimeout(() => playVinylClick(), 60);
    } catch { /* noop */ }
  } else {
    stopHiss();
  }
  notify();
}

export function initSoundFromStorage() {
  try {
    enabled = localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    enabled = false;
  }
  // Segurança: sempre começa desligado nesta sessão — o usuário liga com um gesto.
  // (O gesto cria o AudioContext sem bloqueio de autoplay.)
  if (enabled) {
    enabled = false;
    try { localStorage.setItem(STORAGE_KEY, "0"); } catch { /* noop */ }
  }
  return enabled;
}
