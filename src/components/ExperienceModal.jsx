import { useEffect, useMemo } from "react";
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
                  className="h-full w-full object-contain p-2"
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
  // Bigger canvas so left/right cards have room; wrapper provides horizontal scroll
  const W = 1280;

  // Spacing controls (tweak these if you want tighter/looser)
  const TOP = 80;
  const BOTTOM = 90;
  const STEP = 220;

  const H = useMemo(() => {
    const n = experiences.length;
    return Math.max(760, TOP + BOTTOM + Math.max(0, n - 1) * STEP);
  }, [experiences.length]);

  const xLine = Math.round(W / 2);

  // Alternating card layout
  const CONNECT = 18;
  const GAP = 12;
  const CARD_SHIFT = CONNECT + GAP;

  return (
    <div className="relative mx-auto" style={{ width: W, height: H }}>
      {/* Vertical line */}
      <svg
        className="absolute inset-0"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
      >
        <defs>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.30)" />
            <stop offset="100%" stopColor="rgba(255,255,255,.10)" />
          </linearGradient>
        </defs>

        <line
          x1={xLine}
          y1={TOP}
          x2={xLine}
          y2={H - BOTTOM}
          stroke="url(#road)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      {/* Nodes + cards */}
      {experiences.map((e, i) => {
        const y = TOP + i * STEP;
        const leftSide = i % 2 === 0; // strict alternation
        const dir = leftSide ? -1 : 1;

        return (
          <motion.div
            key={e.id}
            className="absolute"
            style={{
              left: xLine,
              top: y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * i }}
          >
            {/* Dot */}
            <div className="mx-auto h-3.5 w-3.5 rounded-full border border-white/35 bg-white/25 backdrop-blur" />

            {/* Connector */}
            <div
              className="mt-2 h-px bg-white/25"
              style={{
                width: CONNECT,
                transform: `translateX(${dir * 6}px)`,
              }}
            />

            {/* Card */}
            <div
              className="glass-card mt-2 rounded-3xl p-4"
              style={{
                width: "clamp(260px, 34vw, 440px)",
                transform: `translateX(${dir * CARD_SHIFT}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img
                    src={e.logo}
                    alt={e.company}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-tight">{e.role}</p>
                  <p className="text-xs text-zinc-300/80 truncate">
                    {e.company}
                  </p>
                </div>
              </div>

              <p className="mt-2 text-xs text-zinc-300/80">
                {e.start} – {e.end} • {e.location}
              </p>

              <p className="mt-3 text-sm text-zinc-200/85 whitespace-pre-wrap">
                {e.description}
              </p>
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
          className="fixed inset-0 z-50 p-4 sm:p-6 flex items-end sm:items-center justify-center"
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
            className="relative w-full max-w-[92vw] lg:max-w-[88vw] rounded-3xl glass-modal"
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.985, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5 overflow-hidden rounded-t-3xl">
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

            <div className="p-4 sm:p-5 grid gap-5">
              <LogoCarousel experiences={experiences} />

              {/* Vertical scroll for long timeline + horizontal scroll for left/right cards */}
              <div
                className="overflow-y-auto overflow-x-auto"
                style={{ maxHeight: "82vh" }}
              >
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
