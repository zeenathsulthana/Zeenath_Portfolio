import { useEffect, useMemo, useRef, useState } from "react";
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
                <img src={e.logo} alt={e.company} className="h-full w-full object-contain p-2" />
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
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);

  const H = useMemo(() => Math.max(900, experiences.length * 260), [experiences.length]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();
    const n = experiences.length;

    const pts = Array.from({ length: n }, (_, i) => {
      const t = n === 1 ? 0.5 : i / (n - 1);
      const p = path.getPointAtLength(total * t);
      return { x: p.x, y: p.y };
    });

    setPoints(pts);
  }, [experiences.length]);

  return (
    <div className="relative mx-auto" style={{ width: 820, height: H }}>
      <svg
        className="absolute inset-0"
        width="820"
        height={H}
        viewBox={`0 0 820 ${H}`}
      >
        <defs>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,.30)" />
            <stop offset="100%" stopColor="rgba(255,255,255,.10)" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          d={`
            M 140 60
            C 700 160, 120 300, 680 420
            S 160 700, 680 820
            S 160 1100, 680 1220
            S 160 ${H - 220}, 680 ${H - 80}
          `}
          fill="none"
          stroke="url(#road)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>

      {experiences.map((e, i) => {
        const p = points[i] || { x: 140, y: 60 + i * 220 };
        const leftSide = i % 2 === 0;

        return (
          <motion.div
            key={e.id}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            {/* node */}
            <div className="mx-auto h-4 w-4 rounded-full border border-white/30 bg-white/20 backdrop-blur" />

            {/* card */}
            <div
              className="glass-card mt-3 w-[340px] rounded-3xl p-4"
              style={{ transform: leftSide ? "translateX(-280px)" : "translateX(40px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img src={e.logo} alt={e.company} className="h-full w-full object-contain p-2" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-tight">{e.role}</p>
                  <p className="text-xs text-zinc-300/80 truncate">{e.company}</p>
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
            className="relative w-full max-w-6xl rounded-3xl glass-modal overflow-hidden"
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.985, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
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
              <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>
                <Roadmap experiences={experiences} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
