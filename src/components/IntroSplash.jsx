import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

function RibbonCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // one ribbon = smooth polyline with wave motion
    const createRibbon = (baseY, color, amplitudeBase, speedBase) => {
      const segments = 10; // smooth but not chaotic
      const points = [];

      // originate from middle-left (slightly off-screen)
      const startX = -width * 0.2;
      const offsetY = baseY;

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = startX + t * width * 1.4;
        const y = offsetY;
        points.push({ x, y });
      }

      return {
        points,
        speed: speedBase * (prefersReducedMotion ? 0.6 : 1),
        amplitude: amplitudeBase * (prefersReducedMotion ? 0.5 : 1),
        phase: Math.random() * Math.PI * 2,
        color,
        thickness: 10,
      };
    };

    let ribbons = [];

    const initRibbons = () => {
      const midY = height / 2;
      const bandHeight = Math.min(200, height * 0.32);
      const gap = bandHeight / 6;

      ribbons = [
        // Pink – data
        createRibbon(
          midY - gap,
          "rgba(255, 120, 180, 0.85)",
          18,
          0.9
        ),
        // Green – creativity
        createRibbon(
          midY,
          "rgba(140, 225, 170, 0.9)",
          22,
          0.85
        ),
        // Blue – strategy
        createRibbon(
          midY + gap,
          "rgba(110, 155, 255, 0.9)",
          15,
          0.8
        ),
      ];
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      initRibbons();
    };

    const render = (t) => {
      // white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      // subtle horizontal band in the center where ribbons live
      const bandHeight = Math.min(220, height * 0.35);
      const bandTop = height / 2 - bandHeight / 2;
      const bandGradient = ctx.createLinearGradient(
        0,
        bandTop,
        0,
        bandTop + bandHeight
      );
      bandGradient.addColorStop(0, "rgba(245,245,245,0.0)");
      bandGradient.addColorStop(0.5, "rgba(245,245,245,0.9)");
      bandGradient.addColorStop(1, "rgba(245,245,245,0.0)");
      ctx.fillStyle = bandGradient;
      ctx.fillRect(0, bandTop, width, bandHeight);

      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,0.10)";
      ctx.shadowBlur = 16;
      ctx.shadowOffsetY = 4;

      ribbons.forEach((ribbon, idx) => {
        const { points, speed, amplitude, phase, color, thickness } = ribbon;

        ctx.beginPath();

        const updatedPoints = [];
        for (let i = 0; i < points.length; i++) {
          let { x, y } = points[i];

          // calm left-to-right motion
          x += speed * (width / 1200); // slight scaling with screen width

          // structured wave, not chaotic
          const timeFactor = prefersReducedMotion ? t * 0.4 : t;
          const offset =
            Math.sin(timeFactor * 0.0013 + phase + i * 0.55 + idx * 0.4) *
            amplitude;
          const bandCenter = height / 2;
          const constrainedY = bandCenter + (y - bandCenter) + offset;

          updatedPoints.push({ x, y: constrainedY });
        }

        ribbon.points = updatedPoints;

        // recycle ribbon once fully off-screen to the right
        const lastPoint = ribbon.points[ribbon.points.length - 1];
        if (lastPoint.x > width + width * 0.3) {
          const baseY =
            height / 2 +
            (idx - 1) * (bandHeight / 6); // keep them in the same central strip
          ribbons[idx] = createRibbon(
            baseY,
            color,
            amplitude,
            speed
          );
          return;
        }

        // soft gradient stroke along the ribbon
        const first = ribbon.points[0];
        const last = ribbon.points[ribbon.points.length - 1];
        const gradient = ctx.createLinearGradient(
          first.x,
          first.y,
          last.x,
          last.y
        );
        gradient.addColorStop(0, color.replace("0.9", "0.0").replace("0.85", "0.0"));
        gradient.addColorStop(0.3, color);
        gradient.addColorStop(0.7, color);
        gradient.addColorStop(1, color.replace("0.9", "0.0").replace("0.85", "0.0"));

        ctx.lineWidth = thickness;
        ctx.strokeStyle = gradient;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.moveTo(first.x, first.y);
        for (let i = 1; i < ribbon.points.length - 1; i++) {
          const p0 = ribbon.points[i];
          const p1 = ribbon.points[i + 1];
          const cx = (p0.x + p1.x) / 2;
          const cy = (p0.y + p1.y) / 2;
          ctx.quadraticCurveTo(p0.x, p0.y, cx, cy);
        }

        ctx.stroke();
      });

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

export default function IntroSplash({ show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 2.0, ease: "easeInOut" } }}
        >
          <RibbonCanvas />

          {/* Soft vignette for premium feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <motion.p
                className="text-[11px] uppercase tracking-[0.45em] text-zinc-500"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.55 }}
              >
                My Portfolio
              </motion.h1>

              <motion.p
                className="mx-auto mt-4 max-w-2xl text-sm text-zinc-700 sm:text-base"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.02, duration: 0.5 }}
              >
                Marketing, storytelling, and data flowing into one narrative.
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}