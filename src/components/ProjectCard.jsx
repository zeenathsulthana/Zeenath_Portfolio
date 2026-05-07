import { motion } from "framer-motion";

export default function ProjectCard({ project, onOpen, variant = "secondary" }) {
  const hook = project.hook || project.summary;
  const isFeatured = variant === "featured";

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group w-full text-left"
    >
      <div
        className={`
          relative overflow-hidden rounded-3xl bg-white/5 shadow-md
          flex flex-col
          ${isFeatured ? "h-72 sm:h-88 lg:h-96" : "h-52 sm:h-60"}
        `}
      >
        {/* top: thumbnail */}
        <div className="relative flex-1 overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          {isFeatured && (
            <div className="absolute left-4 top-3 text-[10px] uppercase tracking-[0.18em] text-zinc-100/85 bg-black/45 px-2.5 py-1 rounded-full backdrop-blur-sm">
              Featured project
            </div>
          )}

          {project.year && (
            <div className="absolute right-3 bottom-3 text-[10px] sm:text-xs text-zinc-100/85 bg-black/45 px-2 py-1 rounded-full backdrop-blur-sm">
              {project.year}
            </div>
          )}
        </div>

        {/* bottom: full-width projection bar inside same card */}
        <div className="shrink-0 bg-black/80 border-t border-white/10 px-4 py-2.5 backdrop-blur-sm flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm font-semibold text-zinc-50 truncate">
              {project.title}
            </h3>
            {hook && (
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-zinc-200/90 line-clamp-2">
                {hook}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-zinc-100/90 opacity-70 group-hover:opacity-100 transition-opacity">
            <span>View</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}