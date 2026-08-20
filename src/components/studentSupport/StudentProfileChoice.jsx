import { Lock, HeartHandshake } from "lucide-react";

const OptionCard = ({ icon, title, body, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full text-left rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#0066cc]/40 hover:shadow-[0_10px_24px_rgba(0,102,204,0.08)] transition-all active:scale-[0.99]"
  >
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0066cc] mb-3">
      {icon}
    </span>
    <p className="font-bold text-[#1a365d] text-[15px]">{title}</p>
    <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">{body}</p>
  </button>
);

const StudentProfileChoice = ({ age, onAnonymous, onPersonalised }) => {
  return (
    <div className="p-5 space-y-4">
      <div>
        <h2 className="text-lg font-black text-[#1a365d]">How would you like to continue?</h2>
        <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">
          Age {age} noted. You can stay anonymous, or share a few details for more personal support.
        </p>
      </div>
      <OptionCard
        icon={<Lock size={18} />}
        title="Continue Anonymously"
        body="Start a conversation without sharing personal details."
        onClick={onAnonymous}
      />
      <OptionCard
        icon={<HeartHandshake size={18} />}
        title="Get Personalised Support"
        body="Share a few details so MyPeegu can personalise your guidance."
        onClick={onPersonalised}
      />
    </div>
  );
};

export default StudentProfileChoice;
