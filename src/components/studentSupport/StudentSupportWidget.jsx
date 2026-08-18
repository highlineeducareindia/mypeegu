import { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";
import logo from "../../assets/MyPeeguLogo.png";

const StudentSupportPanel = lazy(() => import("./StudentSupportPanel"));

const StudentSupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [booted, setBooted] = useState(false);

  const openChat = () => {
    setBooted(true);
    setOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {!open ? (
          <motion.button
            key="launcher"
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            onClick={openChat}
            aria-label="Open MyPeegu Support"
            className="fixed z-[998] right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center gap-2 rounded-full bg-[#0066cc] text-white shadow-[0_8px_30px_rgba(0,102,204,0.28)] pl-1.5 pr-3.5 py-1.5 sm:pl-2 sm:pr-4 hover:bg-[#005bb8] transition-colors"
          >
            <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src={logo} alt="" className="h-6 w-auto object-contain hidden sm:block" />
              <MessageCircleHeart size={18} className="text-[#0066cc] sm:hidden" />
            </span>
            <span className="text-[13px] font-bold tracking-tight">MyPeegu Support</span>
          </motion.button>
        ) : null}
      </AnimatePresence>

      {booted ? (
        <div
          className={`fixed z-[1000] flex flex-col inset-x-0 bottom-0 top-8 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[430px] sm:h-[min(720px,calc(100vh-2.5rem))] sm:max-h-[calc(100vh-2.5rem)] bg-white sm:rounded-[1.75rem] rounded-t-[1.75rem] shadow-[0_8px_30px_rgb(0,0,0,0.14)] border border-gray-100 overflow-hidden ${
            open ? "" : "hidden"
          }`}
        >
          <Suspense
            fallback={
              <div className="h-full min-h-[420px] flex items-center justify-center text-sm font-semibold text-[#0066cc]">
                MyPeegu is listening...
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
