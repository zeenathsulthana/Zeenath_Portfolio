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

    const createRibbon = (baseY, color) => {
      const segments = 8;
      const points = [];

      // Start from middle-left area
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
        speed: 0.8 + Math.random() * 0.6,
        amplitude: 16 + Math.random() * 10,
        phase: Math.random() * Math.PI * 2,
        color,
        thickness: 8 + Math.random() * 4,
      };
    };

    let ribbons = [];

    const initRibbons = () => {
      const midY = height / 2;
      const gap = 40;

      ribbons = [
        createRibbon(midY - gap, "rgba(255, 105, 180, 0.7)"), // pink
        createRibbon(midY, "rgba(144, 238, 144, 0.7)"),       // green
        createRibbon(midY + gap, "rgba(135, 206, 250, 0.7)"), // blue
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
      // White background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      ribbons.forEach((ribbon, idx) => {
        const { points, speed, amplitude, phase, color, thickness } = ribbon;

        ctx.save();
        ctx.beginPath();

        const updatedPoints = [];

        for (let i = 0; i < points.length; i++) {
          let { x, y } = points[i];

          // Move horizontally
          x += speed;

          // Apply vertical wave
          const offset =
            Math.sin(t * 0.0015 + phase + i * 0.5 + idx * 0.8) * amplitude;
          y = y + offset;

          updatedPoints.push({ x, y });
        }

        ribbon.points = updatedPoints;

        // If ribbon moved fully off-screen to the right, recreate it
        const lastPoint = ribbon.points[ribbon.points.length - 1];
        if (lastPoint.x > width + width * 0.3) {
          const baseY = height / 2 + (idx - 1) * 40;
          ribbons[idx] = createRibbon(baseY, color);
          ctx.restore();
          return;
        }

        // Draw smooth ribbon (quadratic curves)
        ctx.lineWidth = thickness;
        ctx.strokeStyle = color;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        const first = ribbon.points[0];
        ctx.moveTo(first.x, first.y);

        for (let i = 1; i < ribbon.points.length - 1; i++) {
          const p0 = ribbon.points[i];
          const p1 = ribbon.points[i + 1];
          const cx = (p0.x + p1.x) / 2;
          const cy = (p0.y + p1.y) / 2;
          ctx.quadraticCurveTo(p0.x, p0.y, cx, cy);
        }

        ctx.stroke();
        ctx.restore();
      });

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

          {/* Subtle center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent_55%)]" />

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <motion.p
                className="text-[11px] uppercase tracking-[0.45em] text-pink-500/70"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.55 }}
              >
                My Portfolio
              </motion.h1>

              <motion.p
                className="mx-auto mt-4 max-w-2xl text-sm text-zinc-700 sm:text-base"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Strategy, storytelling, and research in motion.
              </motion.p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}