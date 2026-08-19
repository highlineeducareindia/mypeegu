import logo from "../../assets/MyPeeguLogo.png";

const ChatMessage = ({ role, text }) => {
  if (!text) return null;
  const isMyPeegu = role !== "student";

  return (
    <div className={`flex gap-2 ${isMyPeegu ? "justify-start" : "justify-end"}`}>
      {isMyPeegu ? (
        <img
          src={logo}
          alt=""
          className="h-7 w-7 mt-1 rounded-full object-contain bg-white border border-gray-100 shrink-0"
        />
      ) : null}
      <div
        className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed font-medium whitespace-pre-wrap ${
          isMyPeegu
            ? "bg-[#F8FAFC] text-[#1a365d] rounded-tl-md"
            : "bg-[#0066cc] text-white rounded-tr-md"
        }`}
      >
        {isMyPeegu ? (
          <p className="text-[10px] font-black uppercase tracking-wider text-[#0066cc] mb-1">PIVA</p>
        ) : null}
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
