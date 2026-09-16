import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, MapPin, Store, X } from "lucide-react";

export function SeamlessEventModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="seamless-modal-title"
      >
        <div
          className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[20px] border border-line-strong bg-card shadow-[0_32px_80px_rgb(12_18_32/0.18)]"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 -mr-4 -mt-4 flex size-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-canvas-2 hover:text-ink"
          >
            <X size={16} />
          </button>

          <div className="max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: event / venue info */}
              <div className="p-7 sm:p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                  Seamless Fintech Middle East 2026
                </p>
                <h2 id="seamless-modal-title" className="mt-2.5 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  Meet the DA One Team
                </h2>
                <p className="mt-3 text-[14px] leading-6 text-muted">
                  Want to see DA One in action or discuss how it can transform
                  your enterprise reporting? Meet our team at Seamless Fintech
                  Middle East.
                </p>

                <div className="mt-6 flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft">
                    <MapPin size={16} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-2 uppercase">
                      Venue
                    </p>
                    <a
                      href="https://maps.app.goo.gl/68CB91wvk4s4LUzo9"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-[14px] font-medium text-ink underline decoration-line-strong underline-offset-2 transition-colors hover:text-accent"
                    >
                      Dubai World Trade Centre
                    </a>
                    <a
                      href="https://maps.app.goo.gl/68CB91wvk4s4LUzo9"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 block text-[13px] leading-5 text-muted transition-colors hover:text-accent"
                    >
                      Sheikh Zayed Road, Trade Centre 2,
                      <br />
                      Dubai, United Arab Emirates
                    </a>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft">
                    <Store size={16} className="text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-2 uppercase">
                      Booth
                    </p>
                    <p className="mt-1 text-lg font-semibold text-ink">Booth SP11</p>
                    <p className="mt-0.5 text-[13px] leading-5 text-muted">
                      Our DA One team will be available at Booth SP11 to meet,
                      answer your questions, and walk you through the platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: booth / event details / location visual */}
              <div className="flex flex-col justify-between border-t border-line bg-canvas-2/60 p-7 sm:p-8 md:border-l md:border-t-0">
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[16px] border border-line-strong bg-card">
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(currentColor 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative flex size-14 items-center justify-center rounded-full bg-accent-soft">
                    <MapPin size={26} className="text-accent" aria-hidden="true" />
                  </div>
                  <p className="relative mt-4 text-2xl font-bold tracking-tight text-ink">
                    SP11
                  </p>
                  <p className="relative mt-1 text-[12px] font-medium text-muted">
                    Booth location
                  </p>
                </div>

                <div className="mt-6 rounded-[14px] border border-line-strong bg-card p-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} className="text-accent" aria-hidden="true" />
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-2 uppercase">
                      Event Details
                    </p>
                  </div>
                  <p className="mt-2 text-[16px] font-semibold text-ink">
                    22–24 September 2026
                  </p>
                  <p className="mt-1 text-[13px] leading-5 text-muted">
                    Dubai World Trade Centre
                    <br />
                    Sheikh Zayed Road, Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
