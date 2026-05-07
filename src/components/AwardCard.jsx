import { motion } from "framer-motion";

export default function AwardCard({ award, onOpen, variant = "normal" }) {
  const isLarge = variant === "large";

  return (
    <div
      className={`
        glass-card rounded-3xl p-4 sm:p-5 flex flex-col gap-3
        ${isLarge ? "h-72 sm:h-72" : ""}
      `}
    >
      {/* top: big thumbnail area */}
      <div className="flex items-center gap-3">
        <div
          className={`
            overflow-hidden bg-white/70 flex items-center justify-center
            ${isLarge ? "h-32 w-32 sm:h-32 sm:w-32 rounded-3xl" : "h-14 w-14 rounded-2xl"}
          `}
        >
          <img
            src={award.thumbnail}
            alt={award.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-ivory">
            {award.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory/60">
            {award.issuer} · {award.year}
          </p>
        </div>
      </div>

      {/* summary */}
      <p className="text-xs sm:text-sm text-ivory/80 line-clamp-3">
        {award.summary}
      </p>

      {/* actions */}
      <div className="mt-auto flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onOpen}
          className="glass-btn rounded-xl px-3 py-1.5 text-xs text-ivory"
        >
          View details
        </button>

        {award.link && (
          <a
            href={award.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-black/10 bg-white/80 px-3 py-1.5 text-xs text-black hover:bg-white"
          >
            View post
          </a>
        )}
      </div>
    </div>
  );
}