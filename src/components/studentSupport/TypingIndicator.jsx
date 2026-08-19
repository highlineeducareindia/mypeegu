const TypingIndicator = ({ status }) => {
  return (
    <div className="flex justify-start">
      <div className="bg-[#F8FAFC] rounded-2xl rounded-tl-md px-3.5 py-2.5">
        <p className="text-[11px] font-semibold text-[#0066cc] mb-1">
          {status || "PIVA is listening..."}
        </p>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0066cc]/50 animate-pulse" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#0066cc]/50 animate-pulse [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#0066cc]/50 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
