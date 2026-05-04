import { AnimatePresence, motion } from "framer-motion";

const logos = [
  { name: "Lacoste", src: "/Users/zee/Downloads/my-portfolio/public/media/images/lacoste.png" },
  { name: "Nespresso", src: "/Users/zee/Downloads/my-portfolio/public/media/images/Nespresso.png" },
  { name: "L'Oréal", src: "/Users/zee/Downloads/my-portfolio/public/media/images/LOreal-Logo.jpg" },
  { name: "Carrefour", src: "//Users/zee/Downloads/my-portfolio/public/media/images/carrefour.png" },
  { name: "John Lewis", src: "/Users/zee/Downloads/my-portfolio/public/media/images/John_Lewis_&_Partners.png" },
  { name: "Bank of America", src: "/Users/zee/Downloads/my-portfolio/public/media/images/Bank-of-America-logo.png" },
];

const GRID_DURATION = 3.0; // seconds logos stay visible before title fully takes over

export default function IntroSplash({ show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.8, ease: "easeInOut" } }}
        >
          {/* Soft vignette for premium feel */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />

          {/* Phase 1: brand logo grid */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
            }}
          >
            <motion.div
              className="grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex items-center justify-center rounded-xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 12 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    // subtle floating motion
                    y: [0, -4, 0],
                    transition: {
                      duration: 4 + index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 object-contain opacity-90"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Overlay to fade / blur grid before title takes over */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-white/0 backdrop-blur-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backgroundColor: "rgba(255,255,255,0.86)",
            }}
            transition={{
              delay: GRID_DURATION - 1.2,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />

          {/* Phase 2: personal title reveal */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: GRID_DURATION, duration: 0.7, ease: "easeOut" }}
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: GRID_DURATION + 0.1, duration: 0.5 }}
              >
                Portfolio of
              </motion.p>

              <motion.h1
                className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: GRID_DURATION + 0.25, duration: 0.6 }}
              >
                Zeenath
              </motion.h1>

              <motion.p
                className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 sm:text-xs"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: GRID_DURATION + 0.45, duration: 0.55 }}
              >
                Marketing Analyst & Strategist
              </motion.p>

              <motion.p
                className="mx-auto mt-4 max-w-xl text-sm text-zinc-600 sm:text-base"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: GRID_DURATION + 0.65, duration: 0.6 }}
              >
                Global brand experience, data-driven storytelling, and thoughtful marketing strategy—brought together in one portfolio.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}