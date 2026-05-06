import { motion } from "framer-motion";
import { profile } from "../content/portfolio.js";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-6 sm:pt-10">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl"
        initial={{ opacity: 0, y: 10, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-zinc-950/90 via-rose-900/70 to-amber-700/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10" />

        <div className="relative px-5 py-5 sm:px-8 sm:py-8">
          <div className="grid items-start gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8">
            {profile.proPic && (
              <div className="flex justify-start md:pt-2">
                <div className="h-65 w-60 overflow-hidden rounded border-2 border-white/20 bg-zinc-900 shadow-2xl sm:h-58 sm:w-58">
                  <img
                    src={profile.proPic}
                    alt={profile.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="min-w-0 pt-1 md:pt-4">
              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-100/70">
                {profile.location}
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                {profile.title}
              </h1>

              <div className="mt-5 max-w-3xl border-t border-white/10 pt-5 sm:mt-6 sm:pt-6">
                <p className="text-sm leading-relaxed text-zinc-100/85 sm:text-base">
                  {profile.blurb}
                </p>

                <div className="mt-5">
                  {profile.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-zinc-50 shadow-lg backdrop-blur-md transition hover:bg-white/15"
                    >
                      {l.label}
                      <ArrowUpRight size={16} className="opacity-80" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}