import { useState } from "react";
import { X } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-transparent outline-none text-sm font-medium text-[#1a365d] transition-all focus:border-[#0066cc] focus:bg-white";

const CounsellorCTA = ({
  visible,
  confirmed,
  alreadySubmitted,
  submitting,
  profile,
  prompt,
  onRequest,
}) => {
  const [name, setName] = useState(profile?.name || "");
  const [email, setEmail] = useState(profile?.email || "");
  const [mobile, setMobile] = useState(profile?.mobile || "");
  const [city, setCity] = useState(profile?.city || "");
  const [consent, setConsent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState("");
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    if (confirmed || alreadySubmitted) return null;
    if (!visible) return null;
    return (
      <div className="mx-4 mb-3 text-center">
        <button
          type="button"
          onClick={() => setDismissed(false)}
          className="text-xs font-bold text-[#0066cc] underline underline-offset-2"
        >
          Need a counsellor? Tap to connect
        </button>
      </div>
    );
  }

  if (confirmed || alreadySubmitted) {
    return (
      <div className="relative mx-4 mb-3 rounded-2xl bg-green-50 border border-green-100 px-4 py-3 pr-10 text-sm font-semibold text-green-700">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss counsellor update"
          className="absolute top-2 right-2 p-1 rounded-full text-green-700/70 hover:bg-green-100 hover:text-green-800"
        >
          <X size={16} />
        </button>
        {alreadySubmitted
          ? "Your counsellor request is already submitted. You can keep chatting with PIVA."
          : "Your counsellor request is submitted. A MyPeegu expert will reach out. You can keep chatting with PIVA."}
      </div>
    );
  }

  if (!visible) return null;

  const submitEmpty = () => onRequest({});

  const submitWithContact = (event) => {
    event.preventDefault();
    const body = {};
    if (name.trim()) body.name = name.trim();
    if (email.trim()) body.email = email.trim();
    if (mobile.trim()) body.mobile = mobile.trim();
    if (city.trim()) body.city = city.trim();
    if (Object.keys(body).length && !consent) {
      setFormError("Please tick the consent box to share contact details.");
      return;
    }
    if (Object.keys(body).length) body.consentStatus = true;
    onRequest(body);
  };

  if (showForm) {
    return (
      <form
        className="relative mx-4 mb-3 rounded-2xl border border-gray-100 bg-white p-4 space-y-3"
        onSubmit={submitWithContact}
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close counsellor form"
          className="absolute top-2 right-2 p-1 rounded-full text-slate-400 hover:bg-slate-50 hover:text-[#1a365d]"
        >
          <X size={16} />
        </button>
        <p className="text-sm font-semibold text-[#1a365d] pr-6">
          Share a way for the counsellor to reach you (optional).
        </p>
        <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name (optional)" />
        <input className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" />
        <input className={inputClass} value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile (optional)" inputMode="tel" />
        <input className={inputClass} value={city} onChange={(e) => setCity(e.target.value)} placeholder="City (optional)" />
        <label className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 accent-[#0066cc]"
          />
          I agree to share these details with MyPeegu for support and counselling communication.
        </label>
        {formError ? <p className="text-sm font-semibold text-red-600">{formError}</p> : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-full bg-[#0066cc] text-white font-bold text-sm disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Submit request"}
        </button>
      </form>
    );
  }

  return (
    <div className="relative mx-4 mb-3 rounded-2xl bg-blue-50/70 border border-blue-100 px-4 py-3">
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Hide counsellor option"
        className="absolute top-2 right-2 p-1 rounded-full text-slate-400 hover:bg-white hover:text-[#1a365d]"
      >
        <X size={16} />
      </button>
      <p className="text-sm font-medium text-[#1a365d] mb-3 pr-6">
        {prompt || "Would you like to talk this through with a MyPeegu Expert Counsellor?"}
      </p>
      <button
        type="button"
        disabled={submitting}
        onClick={submitEmpty}
        className="w-full py-3 rounded-full bg-[#0066cc] text-white font-bold text-sm shadow-sm shadow-blue-200 disabled:opacity-60"
      >
        Connect with a Counsellor
      </button>
      <button
        type="button"
        onClick={() => setShowForm(true)}
        className="w-full mt-2 py-2 text-xs font-bold text-[#0066cc]"
      >
        Share contact details
      </button>
    </div>
  );
};

export default CounsellorCTA;
