import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AUTO_DELAY = 6000;

export default function ExperienceCarousel({ experiences, onOpen }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return experiences.length - 1;
      if (next >= experiences.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const id = setInterval(() => paginate(1), AUTO_DELAY);
    return () => clearInterval(id);
  }, [experiences.length]);

  const exp = experiences[index];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full">
        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={exp.id}
            type="button"
            onClick={() => onOpen?.(exp)}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="glass-card w-full rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row items-stretch gap-6 text-left"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ivory/60">
                Work experience
              </p>
              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-ivory">
                {exp.role}
              </h3>
              <p className="text-sm text-ivory/70">{exp.company}</p>
              <p className="mt-2 text-xs sm:text-sm text-ivory/60">
                {exp.start} – {exp.end} · {exp.location}
              </p>
              <p className="mt-4 text-sm sm:text-base text-ivory/80 leading-relaxed line-clamp-5">
                {exp.description}
              </p>
            </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                <img
                    src={exp.logo}
                    alt={exp.company}
                    className="h-20 w-auto sm:h-28 md:h-32 lg:h-40 object-contain"
                />
                </div>
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={() => paginate(-1)}
          className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-white/40 text-xs text-ivory/70 hover:bg-white/60"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-white/40 text-xs text-ivory/70 hover:bg-white/60"
        >
          →
        </button>
      </div>
    </div>
  );
}