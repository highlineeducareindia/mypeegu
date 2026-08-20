const TOPIC_COLORS = [
  "border-l-[#0066cc]",
  "border-l-[#F97316]",
  "border-l-[#10B981]",
  "border-l-[#8B5CF6]",
  "border-l-[#0066cc]/40",
];

const TopicSuggestions = ({ topics = [], loading, onSelect, locationHint }) => {
  return (
    <div className="p-5 space-y-3">
      <div>
        <h2 className="text-lg font-black text-[#1a365d]">What would you like to talk about?</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Pick a topic to begin, or choose "Something Else" to share in your own words.
        </p>
        {locationHint ? (
          <p className="text-xs text-slate-400 font-medium mt-2">
            Approximate location: {locationHint}
          </p>
        ) : null}
      </div>
      {loading ? (
        <div className="space-y-3" aria-hidden>
          {[0, 1, 2, 3, 4].map((item) => (
            <div key={item} className="h-[72px] rounded-2xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      ) : (
        topics.map((topic, index) => {
          const isElse = /something else/i.test(topic.title);
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => onSelect(topic)}
              className={`w-full text-left rounded-2xl border p-4 transition-all active:scale-[0.99] ${
                isElse
                  ? "border-dashed border-[#0066cc]/40 bg-blue-50/40 hover:bg-blue-50"
                  : `border-gray-100 border-l-4 ${TOPIC_COLORS[index % TOPIC_COLORS.length]} bg-white shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:border-[#0066cc]/30`
              }`}
            >
              <p className="font-bold text-[#1a365d] text-[15px]">{topic.title}</p>
              {topic.subtitle ? (
                <p className="text-sm text-slate-500 font-medium mt-1">{topic.subtitle}</p>
              ) : null}
            </button>
          );
        })
      )}
    </div>
  );
};

export default TopicSuggestions;
