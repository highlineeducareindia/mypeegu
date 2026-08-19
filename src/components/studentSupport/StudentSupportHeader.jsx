import logo from "../../assets/MyPeeguLogo.png";
import { X, Minus } from "lucide-react";

const StudentSupportHeader = ({ status, onClose, onMinimise }) => {
  return (
    <header className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-white">
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
    </header>
  );
};

export default StudentSupportHeader;
