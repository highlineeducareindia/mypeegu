import { useState } from "react";

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

  if (confirmed || alreadySubmitted) {
    return (
      <div className="mx-4 mb-3 rounded-2xl bg-green-50 border border-green-100 px-4 py-3 text-sm font-semibold text-green-700">
        {alreadySubmitted
          ? "Your counsellor request is already submitted."
          : "A MyPeegu Expert Counsellor request has been submitted."}
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
        className="mx-4 mb-3 rounded-2xl border border-gray-100 bg-white p-4 space-y-3"
        onSubmit={submitWithContact}
      >
        <p className="text-sm font-semibold text-[#1a365d]">
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
    <div className="mx-4 mb-3 rounded-2xl bg-blue-50/70 border border-blue-100 px-4 py-3">
      <p className="text-sm font-medium text-[#1a365d] mb-3">
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
