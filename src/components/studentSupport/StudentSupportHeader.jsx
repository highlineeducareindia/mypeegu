import logo from "../../assets/MyPeeguLogo.png";
import { X, Minus, ArrowLeft } from "lucide-react";

const StudentSupportHeader = ({
  status,
  onClose,
  onMinimise,
  showBack = false,
  onBack,
  showEndSession = false,
  onEndSession,
}) => {
  return (
    <header className="shrink-0 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-3 px-4 py-3">
        <img src={logo} alt="" className="h-9 w-auto object-contain" />
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-black text-[#1a365d] leading-tight">PIVA</p>
          <p className="text-[11px] text-slate-500 font-medium truncate">
            {status || "MyPeegu Virtual Assistant"}
          </p>
        </div>
        <button
          type="button"
          onClick={onMinimise}
          aria-label="Minimise PIVA"
          className="p-2 rounded-full text-slate-500 hover:bg-slate-50 hover:text-[#1a365d] transition-colors"
        >
          <Minus size={18} />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close PIVA"
          className="p-2 rounded-full text-slate-500 hover:bg-slate-50 hover:text-[#1a365d] transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {showBack || showEndSession ? (
        <div className="flex items-center justify-between gap-2 px-3 pb-2.5">
          {showBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[12px] font-bold text-[#0066cc] hover:bg-blue-50 transition-colors"
            >
              <ArrowLeft size={14} />
              Topics
            </button>
          ) : (
            <span />
          )}
          {showEndSession ? (
            <button
              type="button"
              onClick={onEndSession}
              className="rounded-full px-2.5 py-1.5 text-[12px] font-semibold text-slate-500 hover:bg-slate-50 bg- !text-red-500 hover:text-red-600 transition-colors"
            >
              End Session
            </button>
          ) : null}
        </div>
      ) : null}
    </header>
  );
};

export default StudentSupportHeader;
