import { motion } from "framer-motion";

export default function AwardCard({ award, onOpen }) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      className="glass-card group w-full text-left overflow-hidden rounded-3xl p-0"
    >
      <div className="flex min-h-[180px]">
        <div className="w-[120px] sm:w-[140px] shrink-0 border-r border-white/10 bg-white/5">
          <img
            src={award.thumbnail}
            alt={award.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-base font-semibold leading-tight text-zinc-100">
                {award.title}
              </p>
              <p className="mt-1 text-sm text-zinc-300/80">
                {award.issuer} • {award.year}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-200/85 line-clamp-4">
            {award.summary}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
