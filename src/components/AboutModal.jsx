import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { trackEvent } from "../lib/analytics";

function AboutCard({ item, reverse }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden">
      <div
        className={`grid md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="h-64 md:h-full min-h-[260px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">
            {item.title}
          </h3>
          <p className="mt-3 text-sm sm:text-base leading-7 text-zinc-200/85">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutModal({ open, onClose, items }) {
  const hasTrackedOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      hasTrackedOpen.current = false;
      return;
    }

    if (!hasTrackedOpen.current) {
      trackEvent("open_about_modal", {
        modal_name: "who_am_i",
        item_count: items?.length || 0,
      });
      hasTrackedOpen.current = true;
    }

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        trackEvent("close_about_modal", {
          modal_name: "who_am_i",
          close_method: "escape",
        });
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, items]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 p-4 sm:p-6 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => {
            trackEvent("close_about_modal", {
              modal_name: "who_am_i",
              close_method: "backdrop",
            });
            onClose();
          }}
        >
          <motion.div
            className="absolute inset-0 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-5xl rounded-3xl glass-modal overflow-hidden"
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.985, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.9 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">Who am I</h3>
                <p className="mt-1 text-sm text-zinc-300/80">
                  A little more beyond the portfolio.
                </p>
              </div>

              <button
                onClick={() => {
                  trackEvent("close_about_modal", {
                    modal_name: "who_am_i",
                    close_method: "button",
                  });
                  onClose();
                }}
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur hover:bg-white/15"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[78vh] overflow-y-auto p-4 sm:p-5">
              <div className="grid gap-5">
                {items.map((item, i) => (
                  <AboutCard
                    key={item.id}
                    item={item}
                    reverse={i % 2 === 1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
