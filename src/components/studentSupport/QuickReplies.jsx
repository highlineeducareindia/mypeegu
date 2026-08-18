const QuickReplies = ({ replies = [], onSelect, disabled }) => {
  if (!replies.length) return null;

  return (
    <div className="px-4 pb-2 flex flex-wrap gap-2">
      {replies.map((reply) => (
        <button
          key={reply}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(reply)}
          className="px-3 py-2 rounded-full bg-white border border-[#0066cc]/20 text-[#0066cc] text-[13px] font-bold hover:bg-blue-50 disabled:opacity-50 transition-colors"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
