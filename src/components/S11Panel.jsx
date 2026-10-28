"use client";

import { useEffect, useRef } from "react";

const F_MIN = 1.0;
const F_MAX = 1.7;
const DB_MIN = -45;
const DB_MAX = 0;
const GATE = -10;
const L1 = 1.575;
const L2 = 1.227;

// Representative two-dip response for the stacked patch: the site's stated
// design targets (L1/L2 dips below the -10 dB gate, inter-band not yet matched).
function s11(f) {
  return (
    -12
    - 26 * Math.exp(-(((f - L2) / 0.016) ** 2))
    - 21 * Math.exp(-(((f - L1) / 0.022) ** 2))
    + 7 * Math.exp(-(((f - 1.4) / 0.09) ** 2))
  );
}

export default function S11Panel() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const draw = () => {
      const { width, height } = wrap.getBoundingClientRect();
      if (width < 40 || height < 40) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const padL = 38;
      const padR = 12;
      const padT = 16;
      const padB = 24;
      const pw = width - padL - padR;
      const ph = height - padT - padB;
      const x = f => padL + ((f - F_MIN) / (F_MAX - F_MIN)) * pw;
      const y = db => padT + ((DB_MAX - db) / (DB_MAX - DB_MIN)) * ph;

      ctx.clearRect(0, 0, width, height);
      ctx.font = "9px 'Spline Sans Mono', ui-monospace, monospace";

      // Inter-band span still above the match gate.
      let hotStart = null;
      let hotEnd = null;
      for (let i = 0; i <= 400; i++) {
        const f = F_MIN + ((F_MAX - F_MIN) * i) / 400;
        if (s11(f) > GATE) {
          if (hotStart === null) hotStart = f;
          hotEnd = f;
        }
      }
      if (hotStart !== null) {
        ctx.fillStyle = "rgba(111, 151, 255, 0.10)";
        ctx.fillRect(x(hotStart), padT, x(hotEnd) - x(hotStart), ph);
        ctx.fillStyle = "#6f97ff";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillText("NOT YET BELOW GATE", (x(hotStart) + x(hotEnd)) / 2, padT + 12);
      }

      // dB gridlines, gate emphasized.
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.lineWidth = 1;
      for (let db = 0; db >= DB_MIN; db -= 10) {
        const isGate = db === GATE;
        ctx.strokeStyle = isGate ? "rgba(111, 151, 255, 0.85)" : "rgba(174, 189, 209, 0.16)";
        ctx.setLineDash(isGate ? [] : [3, 4]);
        ctx.beginPath();
        ctx.moveTo(padL, y(db));
        ctx.lineTo(width - padR, y(db));
        ctx.stroke();
        ctx.fillStyle = isGate ? "#6f97ff" : "#7e8ea3";
        ctx.fillText(String(db), padL - 7, y(db));
      }
      ctx.setLineDash([]);

      // Frequency ticks.
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      for (let f = 1.1; f <= 1.6001; f += 0.1) {
        ctx.strokeStyle = "rgba(174, 189, 209, 0.14)";
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(x(f), padT);
        ctx.lineTo(x(f), padT + ph);
        ctx.stroke();
        ctx.fillStyle = "#7e8ea3";
        ctx.fillText(f.toFixed(1), x(f), height - 8);
      }
      ctx.setLineDash([]);
      ctx.fillStyle = "#7e8ea3";
      ctx.textAlign = "right";
      ctx.fillText("GHz", width - padR, height - 8);

      // Band markers.
      ctx.setLineDash([2, 4]);
      ctx.strokeStyle = "rgba(126, 142, 163, 0.55)";
      ctx.textAlign = "center";
      for (const [f, label] of [[L2, "L2 1.227"], [L1, "L1 1.575"]]) {
        ctx.beginPath();
        ctx.moveTo(x(f), padT);
        ctx.lineTo(x(f), padT + ph);
        ctx.stroke();
        ctx.fillStyle = "#aebdd1";
        ctx.fillText(label, x(f), padT - 4);
      }
      ctx.setLineDash([]);

      // Curve.
      ctx.strokeStyle = "#6f97ff";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (let i = 0; i <= 400; i++) {
        const f = F_MIN + ((F_MAX - F_MIN) * i) / 400;
        const px = x(f);
        const py = y(Math.max(s11(f), DB_MIN));
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <figure
      role="img"
      aria-label="Simulated S11 return-loss sweep from 1.0 to 1.7 gigahertz for the dual-band GPS stacked patch. Resonance dips at 1.227 and 1.575 gigahertz pass the minus 10 dB match gate; the inter-band region is not yet below the gate."
      className="overflow-hidden rounded-2xl border border-panel-line bg-panel shadow-[0_28px_90px_rgba(16,21,27,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-panel-line px-5 py-3.5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-panel-ink">Port 1 · S11</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-panel-dim">GPS stacked patch · CST</span>
      </div>
      <div ref={wrapRef} className="relative aspect-[16/11] w-full">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-panel-line px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-panel-dim">Sweep 1.0–1.7 GHz</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-panel-dim">
          <span className="text-signal-bright">L1 pass · L2 pass</span> · inter-band tuning
        </span>
      </figcaption>
    </figure>
  );
}