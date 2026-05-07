import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { trackEvent } from "../lib/analytics";

function getYouTubeId(url) {
  if (!url) return null;
  const watch = url.match(/[?&]v=([^&]+)/);
  if (watch?.[1]) return watch[1];
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short?.[1]) return short[1];
  const embed = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embed?.[1]) return embed[1];
  return null;
}

function YouTubeEmbed({ url }) {
  const id = getYouTubeId(url);
  if (!id) return null;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const hasTrackedOpen = useRef(false);

  useEffect(() => {
    if (!project) {
      hasTrackedOpen.current = false;
      return;
    }

    if (!hasTrackedOpen.current) {
      if (project.type === "pdf") {
        trackEvent("view_project_pdf", {
          project_id: project.id,
          project_title: project.title,
          project_type: project.type,
        });
      }

      if (project.type === "video") {
        trackEvent("view_project_video", {
          project_id: project.id,
          project_title: project.title,
          project_type: project.type,
          video_source: project.video?.youtube ? "youtube" : "file",
        });
      }

      hasTrackedOpen.current = true;
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        trackEvent("close_project_modal", {
          project_id: project.id,
          project_title: project.title,
          close_method: "escape",
        });
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isPdf = project.type === "pdf";
  const isVideo = project.type === "video";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 p-4 sm:p-6 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => {
            trackEvent("close_project_modal", {
              project_id: project.id,
              project_title: project.title,
              close_method: "backdrop",
            });
            onClose();
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-6xl rounded-3xl glass-modal overflow-hidden"
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.985, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* subtle background blobs */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/25 blur-3xl"
                animate={{ x: [0, 40, -10, 0], y: [0, 20, 55, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
                animate={{ x: [0, -30, 20, 0], y: [0, -20, -40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-black/20" />
            </div>

            {/* header */}
            <div className="relative flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.summary ? (
                  <p className="mt-1 text-sm text-zinc-200/80">
                    {project.summary}
                  </p>
                ) : null}
              </div>
              <button
                onClick={() => {
                  trackEvent("close_project_modal", {
                    project_id: project.id,
                    project_title: project.title,
                    close_method: "button",
                  });
                  onClose();
                }}
                className="rounded-xl border border-white/10 bg-white/10 backdrop-blur px-3 py-2 hover:bg-white/15"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* SINGLE-COLUMN CONTENT */}
            <div className="relative p-4 sm:p-5 grid gap-4">
                {isPdf && project.pdf ? (
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <iframe
                      title="PDF viewer"
                      src={`${project.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                      className="h-[55vh] sm:h-[70vh] w-full"
                    />
                  </div>
                ) : null}

              {isVideo && project.video?.src ? (
                <video
                  className="w-full rounded-2xl border border-white/10 bg-black"
                  controls
                  preload="metadata"
                >
                  <source src={project.video.src} />
                </video>
              ) : null}

              {isVideo && project.video?.youtube ? (
                <YouTubeEmbed url={project.video.youtube} />
              ) : null}

              {project.description ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm leading-relaxed text-zinc-100/90 whitespace-pre-wrap">
                    {project.description}
                  </p>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}