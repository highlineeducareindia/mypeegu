import { HeartHandshake, Mail, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const APPROVED_SAFETY_REPLY =
  "Thank you for sharing this with me. You don’t have to face this alone. If you are in immediate danger, please contact a trusted adult or local emergency services right away. A MyPeegu counsellor is here to support you. Would you like to connect with one?";

const SafetySupport = ({ onCounsellor, showCounsellor }) => {
  return (
    <div className="p-5 space-y-4">
      <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-red-800">
            <HeartHandshake size={22} />
          </span>
          <div>
            <h2 className="text-lg font-black text-red-800">You deserve real support right now</h2>
            <p className="text-sm text-red-800 font-medium mt-2 leading-relaxed">
              {APPROVED_SAFETY_REPLY}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-red-800">
            <Mail size={18} />
          </span>
          <p className="text-sm text-red-700 font-medium leading-relaxed pt-1.5">
            Email us at{" "}
            <a
              href="mailto:sankalp@mypeegu.in"
              className="font-bold underline underline-offset-2"
            >
              sankalp@mypeegu.in
            </a>
          </p>
        </div>

        <a
          href="https://wa.me/919035524865"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-start gap-3 rounded-2xl bg-white border border-red-100 px-4 py-3"
        >
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-800">
            <FaWhatsapp size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-[#1a365d]">Chat with us on WhatsApp</p>
            <p className="text-sm font-bold text-red-800 mt-1">+91 90355 24865</p>
            <p className="text-sm text-red-700 font-medium mt-1 leading-relaxed">
              WhatsApp support is available 24/7. You can message us anytime.
            </p>
          </div>
        </a>

        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-red-100/70 px-4 py-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-red-800">
            <ShieldCheck size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-red-800">Your safety matters.</p>
            <p className="text-sm text-red-700 font-medium mt-0.5 leading-relaxed">
              A MyPeegu Expert Counsellor has been notified immediately.
            </p>
          </div>
        </div>
      </div>
      {showCounsellor ? (
        <button
          type="button"
          onClick={onCounsellor}
          className="w-full py-3 rounded-full bg-[#0066cc] text-white font-bold text-sm shadow-sm shadow-blue-200"
        >
          Connect with a Counsellor
        </button>
      ) : null}
    </div>
  );
};

export default SafetySupport;
