import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AwardCard from "./AwardCard.jsx";

const AUTO_DELAY = 5000;

export default function AwardsWheel({ awards, onOpen }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 2) % awards.length);
  const prev = () =>
    setIndex((i) => (i - 2 + awards.length) % awards.length);

  useEffect(() => {
    const id = setInterval(next, AUTO_DELAY);
    return () => clearInterval(id);
  }, [awards.length]);

  if (!awards?.length) return null;

  const get = (offset) =>
    awards[(index + offset + awards.length) % awards.length];

  // 4 visible at once
  const left = get(-1);
  const center1 = get(0);
  const center2 = get(1);
  const right = get(2);

  return (
    <div className="relative flex items-center justify-center py-6">
      {/* arrows (desktop only) */}
      <button
        type="button"
        onClick={prev}
        className="hidden sm:flex absolute left-0 z-20 h-9 w-9 items-center justify-center rounded-full bg-black/30 text-xs text-zinc-100 backdrop-blur hover:bg-black/50"
      >
        ←
      </button>
      <button
        type="button"
        onClick={next}
        className="hidden sm:flex absolute right-0 z-20 h-9 w-9 items-center justify-center rounded-full bg-black/30 text-xs text-zinc-100 backdrop-blur hover:bg-black/50"
      >
        →
      </button>

      <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden">
        <AnimatePresence initial={false}>
          {/* left tilted small */}
          <motion.div
            key={left.id + "-left"}
            className="absolute inset-y-0 left-0 flex items-center justify-start"
            initial={{ opacity: 0, x: -40, scale: 0.7, rotateY: 25 }}
            animate={{ opacity: 0.5, x: 0, scale: 0.8, rotateY: 18 }}
            exit={{ opacity: 0, x: -40, scale: 0.7, rotateY: 25 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="w-32 sm:w-40 cursor-pointer ml-2"
              onClick={prev}
              whileHover={{ y: -2 }}
            >
              <AwardCard award={left} onOpen={() => onOpen(left)} />
            </motion.div>
          </motion.div>

          {/* right tilted small */}
          <motion.div
            key={right.id + "-right"}
            className="absolute inset-y-0 right-0 flex items-center justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.7, rotateY: -25 }}
            animate={{ opacity: 0.5, x: 0, scale: 0.8, rotateY: -18 }}
            exit={{ opacity: 0, x: 40, scale: 0.7, rotateY: -25 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="w-32 sm:w-40 cursor-pointer mr-2"
              onClick={next}
              whileHover={{ y: -2 }}
            >
              <AwardCard award={right} onOpen={() => onOpen(right)} />
            </motion.div>
          </motion.div>

          {/* center two large cards */}
          <motion.div
            key={center1.id + "-" + center2.id + "-center"}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -16 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="flex w-[68%] max-w-3xl items-stretch gap-4 mx-auto">
              <motion.div
                className="flex-1 cursor-pointer"
                onClick={() => onOpen(center1)}
                whileHover={{ y: -4 }}
              >
                <AwardCard
                  award={center1}
                  onOpen={() => onOpen(center1)}
                  variant="large"
                />
              </motion.div>

              <motion.div
                className="flex-1 cursor-pointer"
                onClick={() => onOpen(center2)}
                whileHover={{ y: -4 }}
              >
                <AwardCard
                  award={center2}
                  onOpen={() => onOpen(center2)}
                  variant="large"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}