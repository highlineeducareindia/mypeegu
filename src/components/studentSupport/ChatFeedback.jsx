import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const RATING_MAP = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };

const ChatFeedback = ({ visible, submitted, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [note, setNote] = useState("");

  if (!visible) return null;

  if (submitted) {
    return (
      <p className="mx-4 mb-3 text-sm font-semibold text-slate-500">Thank you — that helps MyPeegu stay kinder.</p>
    );
  }

  return (
    <div className="mx-4 mb-3 rounded-2xl border border-gray-100 bg-white p-4">
      <p className="text-sm font-bold text-[#1a365d] mb-3">Was this helpful?</p>
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={() => setRating(4)}
          className={`flex-1 py-2.5 rounded-full border text-sm font-bold ${
            rating >= 4 ? "bg-[#0066cc] text-white border-[#0066cc]" : "border-gray-200 text-[#1a365d]"
          }`}
        >
          <span className="inline-flex items-center justify-center gap-1">
            <ThumbsUp size={14} /> Helpful
          </span>
        </button>
        <button
          type="button"
          onClick={() => setRating(2)}
          className={`flex-1 py-2.5 rounded-full border text-sm font-bold ${
            rating > 0 && rating < 4 ? "bg-[#1a365d] text-white border-[#1a365d]" : "border-gray-200 text-[#1a365d]"
          }`}
        >
          <span className="inline-flex items-center justify-center gap-1">
            <ThumbsDown size={14} /> Not quite
          </span>
        </button>
      </div>
      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
        rows={2}
        placeholder="What could we do better? (optional)"
        className="w-full px-3 py-2 rounded-2xl bg-slate-50 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#0066cc]/20"
      />
      <button
        type="button"
        disabled={!rating}
        onClick={() => onSubmit({ rating, feedback: note })}
        className="mt-3 w-full py-2.5 rounded-full bg-[#0066cc] text-white font-bold text-sm disabled:opacity-40"
      >
        Send feedback
      </button>
    </div>
  );
};

export default ChatFeedback;
