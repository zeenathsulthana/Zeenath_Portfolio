import { AnimatePresence, motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

const logos = [
  { name: "Lacoste", src: `${base}media/images/lacoste.png` },
  { name: "Nespresso", src: `${base}media/images/Nespresso.png` },
  { name: "L'Oréal", src: `${base}media/images/Loreal.jpg` },
  { name: "Carrefour", src: `${base}media/images/carrefour.png` },
  { name: "John Lewis", src: `${base}media/images/John_Lewis_&_Partners.png` },
  { name: "Bank of America", src: `${base}media/images/Bank-of-America-logo.png` },
];

const GRID_PHASE = 1.0; // still controls when text appears

export default function IntroSplash({ show }) {
  const topLogos = logos.slice(0, 3);
  const bottomLogos = logos.slice(3, 6);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          {/* subtle vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />

          {/* TOP ROW LOGOS */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 top-[14%] flex items-center justify-center px-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="grid w-full max-w-5xl grid-cols-3 gap-4 md:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {topLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex h-24 items-center justify-center rounded-2xl bg-white/80 px-4 shadow-md backdrop-blur"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 12 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [1, 0.96, 1],
                    transition: {
                      duration: 2.5 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-14 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* BOTTOM ROW LOGOS */}
          <motion.div
            className="pointer-events-none absolute left-0 right-0 bottom-[14%] flex items-center justify-center px-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="grid w-full max-w-5xl grid-cols-3 gap-4 md:gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {bottomLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  className="flex h-24 items-center justify-center rounded-2xl bg-white/80 px-4 shadow-md backdrop-blur"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 12 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  animate={{
                    y: [0, 3, 0],
                    opacity: [1, 0.96, 1],
                    transition: {
                      duration: 2.5 + index * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-14 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CENTER TEXT ONLY, logos stay visible behind */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: GRID_PHASE + 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: GRID_PHASE + 0.15,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: GRID_PHASE + 0.25,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                My Portfolio
              </motion.h1>

              <motion.p
                className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 sm:text-xs"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: GRID_PHASE + 0.4,
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                Marketing Analyst &amp; Strategist
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}