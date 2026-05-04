import { AnimatePresence, motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

// Positions are carefully chosen so nothing overlaps the center text
const logos = [
  // top band (left -> right)
  {
    name: "World Retail Congress",
    src: `${base}media/images/wrc.png`,
    className: "top-[10%] left-[8%]",
  },
  {
    name: "Nespresso",
    src: `${base}media/images/Nespresso.png`,
    className: "bottom-[10%] right-[9%]",
  
  },
  {
    name: "L'Oréal",
    src: `${base}media/images/Loreal.jpg`,
    className: "top-[10%] right-[10%]",
  },
  {
    name: "Yves Saint Laurent",
    src: `${base}media/images/ysl.png`,
    className: "top-[22%] right-[30%]",
  },

  // bottom band (left -> right)
  {
    name: "Carrefour",
    src: `${base}media/images/carrefour.png`,
    className: "bottom-[18%] left-[12%]",
  },
  {
    name: "John Lewis",
    src: `${base}media/images/John_Lewis_&_Partners.png`,
    className: "bottom-[10%] left-[34%]",
  },
  {
    name: "Bank of America",
    src: `${base}media/images/Bank-of-America-logo.png`,
      className: "top-[16%] left-[31%]",
  },
  {
    name: "Lacoste",
    src: `${base}media/images/lacoste.png`,
    className: "bottom-[20%] right-[28%]",
  },
];

const TEXT_DELAY = 1.0;

export default function IntroSplash({ show }) {
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

          {/* SCATTERED BUT BALANCED LOGOS */}
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className={`pointer-events-none absolute flex items-center justify-center ${logo.className}`}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.15 + index * 0.07,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="flex h-32 w-[230px] items-center justify-center rounded-3xl bg-white/85 px-6 shadow-md backdrop-blur"
                animate={{
                  y: [0, -3, 0],
                  opacity: [1, 0.97, 1],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`object-contain ${
                    logo.name === "Nespresso"
                      ? "max-h-18 max-w-[120px]"
                      : logo.name === "Carrefour"
                      ? "max-h-18 max-w-[130px]"
                      : "max-h-18 max-w-[180px]"
                  }`}
                />
              </motion.div>
            </motion.div>
          ))}

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: TEXT_DELAY + 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: TEXT_DELAY + 0.15,
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
                  delay: TEXT_DELAY + 0.25,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                My Portfolio
              </motion.h1>

              <motion.p
                className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-600 sm:text-xs md:text-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: TEXT_DELAY + 0.4,
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