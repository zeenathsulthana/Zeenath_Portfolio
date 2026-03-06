import { motion, AnimatePresence } from "framer-motion";

export default function IntroSplash({ show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 intro-vignette" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[140vh] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full intro-beam beam-1"
            initial={{ scaleY: 0.15, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[140vh] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full intro-beam beam-2"
            initial={{ scaleY: 0.1, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.95 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[140vh] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full intro-beam beam-3"
            initial={{ scaleY: 0.1, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.9 }}
            transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex h-full items-center justify-center px-6 text-center">
              <div>
                <motion.p
                  className="text-xs uppercase tracking-[0.45em] text-zinc-400"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.45 }}
                >
                  Welcome to
                </motion.p>

                <motion.h1
                  className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.72, duration: 0.55 }}
                >
                  My Portfolio
                </motion.h1>

                <motion.p
                  className="mx-auto mt-4 max-w-xl text-sm text-zinc-300/80 sm:text-base"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.92, duration: 0.5 }}
                >
                  Strategy, storytelling, research, and execution.
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1, transition: { duration: 0.45, ease: "easeInOut" } }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
