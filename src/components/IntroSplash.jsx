import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const base = import.meta.env.BASE_URL;

const logos = [
  { name: "World Retail Congress", src: `${base}media/images/wrc.png`, className: "top-[10%] left-[8%]" },
  { name: "Nespresso", src: `${base}media/images/Nespresso.png`, className: "bottom-[10%] right-[9%]" },
  { name: "L'Oréal", src: `${base}media/images/Loreal.jpg`, className: "top-[10%] right-[10%]" },
  { name: "Yves Saint Laurent", src: `${base}media/images/ysl.png`, className: "top-[22%] right-[30%]" },
  { name: "Carrefour", src: `${base}media/images/carrefour.png`, className: "bottom-[18%] left-[12%]" },
  { name: "John Lewis", src: `${base}media/images/John_Lewis_&_Partners.png`, className: "bottom-[10%] left-[34%]" },
  { name: "Bank of America", src: `${base}media/images/Bank-of-America-logo.png`, className: "top-[16%] left-[31%]" },
  { name: "Lacoste", src: `${base}media/images/lacoste.png`, className: "bottom-[20%] right-[28%]" },
];

const TEXT_DELAY = 1.0;
const MOBILE_LOGO_DURATION = 1.6;

export default function IntroSplash({ show }) {
  const [mobileLogoIndex, setMobileLogoIndex] = useState(0);

  useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setMobileLogoIndex((prev) => (prev + 1) % logos.length);
    }, MOBILE_LOGO_DURATION * 1000);

    return () => clearInterval(interval);
  }, [show]);

  const activeLogo = logos[mobileLogoIndex];

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06),transparent_60%)]" />

          {/* FLOWING RIBBONS BACKGROUND */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -left-1/3 top-1/4 h-24 w-[140%] bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-pink-500/10 blur-3xl"
              initial={{ x: "-20%" }}
              animate={{ x: "20%" }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-1/3 top-1/2 h-20 w-[140%] bg-gradient-to-r from-emerald-500/10 via-cyan-500/15 to-blue-500/10 blur-3xl"
              initial={{ x: "20%" }}
              animate={{ x: "-20%" }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-1/3 bottom-1/5 h-24 w-[140%] bg-gradient-to-r from-amber-500/12 via-rose-500/15 to-purple-500/12 blur-3xl"
              initial={{ x: "-10%" }}
              animate={{ x: "15%" }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </div>

          {/* DESKTOP LOGOS ONLY */}
          <div className="hidden md:block">
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
                  animate={{ y: [0, -3, 0], opacity: [1, 0.97, 1] }}
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
          </div>

          {/* MOBILE: ONE LOGO AT A TIME */}
          <div className="pointer-events-none absolute left-1/2 top-[12%] block w-full -translate-x-1/2 px-6 md:hidden">
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLogo.name}
                  className="flex h-24 w-[200px] items-center justify-center rounded-3xl bg-white/88 px-5 shadow-md backdrop-blur"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                >
                  <img
                    src={activeLogo.src}
                    alt={activeLogo.name}
                    className={`object-contain ${
                      activeLogo.name === "Nespresso"
                        ? "max-h-14 max-w-[100px]"
                        : activeLogo.name === "Carrefour"
                        ? "max-h-14 max-w-[110px]"
                        : "max-h-14 max-w-[150px]"
                    }`}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: TEXT_DELAY + 0.1, duration: 0.6, ease: "easeOut" }}
            >
              <motion.p
                className="text-[11px] uppercase tracking-[0.35em] text-black"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: TEXT_DELAY + 0.15, duration: 0.4, ease: "easeOut" }}
              >
                Welcome to
              </motion.p>

              <motion.h1
                className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: TEXT_DELAY + 0.25, duration: 0.5, ease: "easeOut" }}
              >
                My Portfolio
              </motion.h1>

              <motion.p
                className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-600 sm:text-xs md:text-sm"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: TEXT_DELAY + 0.4, duration: 0.45, ease: "easeOut" }}
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