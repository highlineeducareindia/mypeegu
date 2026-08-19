const KIRAN_PATTERNS = [
  /in india you can also reach kiran[^.!?\n]*/gi,
  /kiran\s*\(\s*1800[- ]?599[- ]?0019\s*\)/gi,
  /kiran[:\s]*1800[- ]?599[- ]?0019/gi,
  /1800[- ]?599[- ]?0019/gi,
  /icall[:\s]*\d[\d\s-]*/gi,
  /vandrevala[^.!?\n]*/gi,
];

export const cleanSafetyReply = (text = "") => {
  let cleaned = String(text);
  KIRAN_PATTERNS.forEach((pattern) => {
    cleaned = cleaned.replace(pattern, "");
  });
  return cleaned
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,!?])/g, "$1")
    .replace(/\s+—/g, " —")
    .trim();
};

const DEFAULT_SAFETY_REPLY =
  "I am really glad you told me this. You do not have to go through it alone. If you are in immediate danger, please contact a trusted adult or local emergency services now. A MyPeegu counsellor can support you — would you like to talk to one?";

const SafetySupport = ({ reply, onCounsellor, showCounsellor }) => {
  const displayReply = cleanSafetyReply(reply) || DEFAULT_SAFETY_REPLY;

  return (
    <div className="p-5 space-y-4">
      <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
        <h2 className="text-lg font-black text-red-800">You deserve real support right now</h2>
        <p className="text-sm text-red-800 font-medium mt-2 leading-relaxed whitespace-pre-wrap">
          {displayReply}
        </p>
        <p className="text-sm text-red-700 font-medium mt-3 leading-relaxed">
          Email us at{" "}
          <a
            href="mailto:sankalp@mypeegu.in"
            className="font-bold underline underline-offset-2"
          >
            sankalp@mypeegu.in
          </a>
        </p>
        <a
          href="https://wa.me/919035524865"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block rounded-2xl bg-white/80 border border-red-100 px-4 py-3"
        >
          <p className="text-sm font-bold text-[#1a365d]">Chat with us on WhatsApp</p>
          <p className="text-sm text-red-700 font-medium mt-1 leading-relaxed">
            +91 90355 24865
          </p>
          <p className="text-sm text-red-700 font-medium mt-1 leading-relaxed">
            WhatsApp support is available 24/7. You can message us anytime.
          </p>
        </a>
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
