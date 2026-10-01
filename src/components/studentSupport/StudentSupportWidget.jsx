import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
import logo from "../../assets/MyPeeguLogo.png";

const StudentSupportPanel = lazy(() => import("./StudentSupportPanel"));

const StudentSupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [showNudge, setShowNudge] = useState(false);

  useEffect(() => {
    if (open) return undefined;

    let cancelled = false;
    let timer;
    const showFor = 5000;
    const hideFor = 8000;

    const cycle = (visible) => {
      if (cancelled) return;
      setShowNudge(visible);
      timer = setTimeout(() => cycle(!visible), visible ? showFor : hideFor);
    };

    timer = setTimeout(() => cycle(true), 2800);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [open]);

  const openChat = () => {
    setBooted(true);
    setOpen(true);
    setShowNudge(false);
  };

  return (
    <>
      <style>{`
        @keyframes piva-nudge-in {
          0% { opacity: 0; transform: translateY(8px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes piva-nudge-blink {
          0%, 72%, 100% { opacity: 1; }
          84% { opacity: 0.35; }
        }
        @keyframes piva-ring {
          0% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0.45); }
          70% { box-shadow: 0 0 0 12px rgba(0, 102, 204, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 102, 204, 0); }
        }
        .piva-nudge {
          animation: piva-nudge-in 0.45s ease-out both, piva-nudge-blink 2.6s ease-in-out 0.5s infinite;
        }
        .piva-launcher-live {
          animation: piva-ring 2.2s ease-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .piva-nudge, .piva-launcher-live { animation: none; }
        }
      `}</style>
      <AnimatePresence>
        {!open ? (
          <motion.div
            key="launcher"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed z-[998] right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col items-end gap-2"
          >
            {showNudge ? (
              <button
                type="button"
                onClick={openChat}
                className="piva-nudge relative max-w-[220px] rounded-2xl bg-white px-3.5 py-2 text-left shadow-[0_8px_24px_rgba(26,54,93,0.16)] border border-blue-100"
              >
                <span className="block text-[13px] font-black text-[#1a365d] leading-tight">
                  Talk to PIVA
                </span>
                <span className="block text-[11px] font-medium text-slate-500 mt-0.5">
                  We're here if you need support
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-blue-100"
                />
              </button>
            ) : null}
            <button
              type="button"
              onClick={openChat}
              aria-label="Talk to PIVA – MyPeegu Virtual Assistant"
              className="piva-launcher-live flex items-center gap-2 rounded-full bg-[#0066cc] text-white shadow-[0_8px_30px_rgba(0,102,204,0.28)] pl-1.5 pr-3.5 py-1.5 sm:pl-2 sm:pr-4 hover:bg-[#005bb8] transition-colors"
            >
              <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img src={logo} alt="" className="h-6 w-auto object-contain hidden sm:block" />
                <MessageCircleHeart size={18} className="text-[#0066cc] sm:hidden" />
              </span>
              <span className="text-[13px] font-bold tracking-tight">PIVA</span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {booted ? (
        <div
          className={`fixed z-[1000] flex flex-col inset-x-0 bottom-0 top-16 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[400px] sm:h-[min(620px,calc(100vh-4rem))] sm:max-h-[calc(100vh-4rem)] bg-white sm:rounded-[1.75rem] rounded-t-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.14)] border border-gray-100 overflow-hidden ${
            open ? "" : "hidden"
          }`}
        >
          <Suspense
            fallback={
              <div className="h-full min-h-[360px] flex items-center justify-center text-sm font-semibold text-[#0066cc]">
                PIVA is listening...
              </div>
            }
          >
            <StudentSupportPanel
              onClose={() => setOpen(false)}
              onMinimise={() => setOpen(false)}
            />
          </Suspense>
        </div>
      ) : null}
    </>
  );
};

export default StudentSupportWidget;
