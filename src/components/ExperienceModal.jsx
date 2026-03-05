import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function LogoCarousel({ experiences }) {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-3 snap-x snap-mandatory">
        {experiences.map((e) => (
          <div
            key={e.id}
            className="snap-start shrink-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            style={{ minWidth: 160 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src={e.logo}
                  alt={e.company}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
              <div className="text-sm text-zinc-100/90">{e.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Roadmap({ experiences }) {
  const W = 1400;
  const xLine = Math.round(W / 2);

  const TOP = 70;
  const BOTTOM = 100;

  const MIN_ROW = 220; // bigger minimum since cards now have big logo header
  const ROW_GAP = 52;

  const SIDE_PAD = 110;

  // Responsive card width
  const CARD_W = "clamp(340px, 40vw, 620px)";

  // Big logo banner height = roughly ~50% of "top half" feel
  const LOGO_H = 92;

  const cardRefs = useRef([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, experiences.length);
  }, [experiences.length]);

  useLayoutEffect(() => {
    const measure = () => {
      const hs = cardRefs.current.map((el) => (el ? el.offsetHeight : 0));
      setHeights(hs);
    };

    measure();

    // Re-measure after images load (logos can change layout)
    const t = window.setTimeout(measure, 120);

    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [experiences.length]);

  const ys = useMemo(() => {
    const out = [];
    let y = TOP;

    for (let i = 0; i < experiences.length; i++) {
      const h = heights[i] || MIN_ROW;
      const row = Math.max(MIN_ROW, h);
      out.push(y + row / 2);
      y += row + ROW_GAP;
    }
    return out;
  }, [experiences.length, heights]);

  const H = useMemo(() => {
    if (!ys.length) {
      return Math.max(760, TOP + BOTTOM + experiences.length * (MIN_ROW + ROW_GAP));
    }
    const lastCenter = ys[ys.length - 1];
    const lastH = Math.max(MIN_ROW, heights[heights.length - 1] || MIN_ROW);
    return Math.max(760, lastCenter + lastH / 2 + BOTTOM);
  }, [ys, heights, experiences.length]);

  const xLeftAnchor = SIDE_PAD;
  const xRightAnchor = W - SIDE_PAD;

  // How far connector should stop before the card edge
  const CONNECT_GAP_TO_CARD = 18;

  return (
    <div className="relative mx-auto" style={{ width: W, height: H }}>
      {/* DEFINITIONS + VERTICAL GOLD LINE (always visible) */}
      <svg
        className="absolute inset-0"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <linearGradient id="goldLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 230, 140, .98)" />
            <stop offset="45%" stopColor="rgba(255, 195, 80, .95)" />
            <stop offset="100%" stopColor="rgba(175, 110, 18, .78)" />
          </linearGradient>

          <filter id="goldGlow" x="-120%" y="-20%" width="340%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
                1 0 0 0 0.95
                0 1 0 0 0.72
                0 0 1 0 0.18
                0 0 0 0.95 0"
              result="goldBlur"
            />
            <feMerge>
              <feMergeNode in="goldBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* glow stroke behind */}
        <line
          x1={xLine}
          y1={TOP}
          x2={xLine}
          y2={H - BOTTOM}
          stroke="rgba(255, 205, 90, .40)"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.60"
          filter="url(#goldGlow)"
        />
        {/* main line */}
        <line
          x1={xLine}
          y1={TOP}
          x2={xLine}
          y2={H - BOTTOM}
          stroke="url(#goldLine)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.98"
        />
      </svg>

      {experiences.map((e, i) => {
        const y = ys[i] ?? TOP + i * (MIN_ROW + ROW_GAP);
        const leftSide = i % 2 === 0;

        // Card edge X (approx) so connector stops before the card border.
        // Since width is clamp(), we can’t compute exact edge in JS, so we stop the connector
        // well before the anchor, and visually it will never cross the card.
        const connectorEndX = leftSide
          ? xLine - (W * 0.22) // ends left of center
          : xLine + (W * 0.22); // ends right of center

        // Additionally, we ensure connector end is always closer than the anchor.
        const safeEndX = leftSide
          ? Math.min(connectorEndX, xLine - 140)
          : Math.max(connectorEndX, xLine + 140);

        return (
          <motion.div
            key={e.id}
            className="absolute"
            style={{ left: 0, top: 0, width: W, height: H }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.03 * i }}
          >
            {/* Dot + connector (connector stops BEFORE reaching the card) */}
            <svg
              className="absolute left-0 top-0"
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              style={{ pointerEvents: "none" }}
            >
              <circle
                cx={xLine}
                cy={y}
                r="7.5"
                fill="rgba(255, 215, 110, .20)"
                stroke="rgba(255, 220, 150, .85)"
                strokeWidth="1.8"
                filter="url(#goldGlow)"
              />

              <line
                x1={xLine}
                y1={y}
                x2={safeEndX}
                y2={y}
                stroke="rgba(255, 210, 130, .35)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              {/* small end-dot to look intentional */}
              <circle
                cx={safeEndX}
                cy={y}
                r="3.2"
                fill="rgba(255, 210, 130, .55)"
              />
            </svg>

            {/* CARD */}
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className="glass-card rounded-3xl overflow-hidden absolute"
              style={{
                width: CARD_W,
                top: y,
                left: leftSide ? xLeftAnchor : xRightAnchor,
                transform: leftSide
                  ? "translate(0%, -50%)"
                  : "translate(-100%, -50%)",
              }}
            >
              {/* Big logo banner (covers ~50% of the top visual area) */}
              <div
                className="relative border-b border-white/10 bg-white/5"
                style={{ height: LOGO_H }}
              >
                <img
                  src={e.logo}
                  alt={e.company}
                  className="absolute inset-0 h-full w-full object-contain"
                  draggable={false}
                />
                {/* subtle dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/30" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="min-w-0">
                  <p className="text-base font-semibold leading-tight">{e.role}</p>
                  <p className="text-sm text-zinc-300/80 truncate">{e.company}</p>
                </div>

                <p className="mt-2 text-sm text-zinc-300/80">
                  {e.start} – {e.end} • {e.location}
                </p>

                <p className="mt-3 text-sm text-zinc-200/85 whitespace-pre-wrap leading-relaxed">
                  {e.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ExperienceModal({ open, onClose, experiences }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          // keep modal INSIDE viewport: padding + items-center + max-h on panel
          className="fixed inset-0 z-50 p-3 sm:p-5 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            // constrain height so it never goes under OS/taskbar
            className="relative w-full max-w-[94vw] lg:max-w-[90vw] rounded-3xl glass-modal flex flex-col"
            style={{ maxHeight: "calc(100dvh - 24px)" }}
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.985, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5 overflow-hidden rounded-t-3xl shrink-0">
              <div>
                <h3 className="text-lg font-semibold">Work experience roadmap</h3>
                <p className="mt-1 text-sm text-zinc-200/80">
                  Logos + full timeline (scroll down)
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/15"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-5 grid gap-5 overflow-hidden flex-1 min-h-0">
              <LogoCarousel experiences={experiences} />

              <div className="overflow-y-auto overflow-x-auto" style={{ maxHeight: "100%" }}>
                <div className="min-w-max px-6">
                  <Roadmap experiences={experiences} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
