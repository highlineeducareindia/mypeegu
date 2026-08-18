const SafetySupport = ({ reply, onCounsellor, showCounsellor }) => {
  return (
    <div className="p-5 space-y-4">
      <div className="rounded-2xl bg-red-50 border border-red-200 p-4">
        <h2 className="text-lg font-black text-red-800">You deserve real support right now</h2>
        {reply ? (
          <p className="text-sm text-red-800 font-medium mt-2 leading-relaxed whitespace-pre-wrap">
            {reply}
          </p>
        ) : null}
        <p className="text-sm text-red-700 font-medium mt-3 leading-relaxed">
          If you are in immediate danger, contact a trusted adult or local emergency services.
          In India you can also reach KIRAN: 1800-599-0019.
        </p>
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
