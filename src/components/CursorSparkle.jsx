import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAX_SPARKLES = 12;

export default function CursorSparkle() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      if (Math.random() > 0.35) return;

      const id = crypto.randomUUID();
      const x = e.clientX;
      const y = e.clientY;

      setSparkles((prev) => {
        const next = [
          ...prev,
          {
            id,
            x,
            y,
            size: 4 + Math.random() * 3,
            opacity: 0.35 + Math.random() * 0.25,
          },
        ];
        if (next.length > MAX_SPARKLES) next.shift();
        return next;
      });

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: s.opacity, scale: 1, y: 0 }}
            animate={{ opacity: 0, scale: 0.6, y: 10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute rounded-full bg-gradient-to-tr from-white via-white to-yellow-100 shadow-[0_0_14px_rgba(255,255,255,0.7)]"
            style={{
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}