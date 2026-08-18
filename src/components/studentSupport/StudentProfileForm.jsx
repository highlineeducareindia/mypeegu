import { useState } from "react";

const inputClass =
  "w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-transparent outline-none text-sm font-medium text-[#1a365d] transition-all focus:border-[#0066cc] focus:bg-white";

const CONTACT_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "mobile", label: "Mobile" },
  { value: "either", label: "Either" },
];

const StudentProfileForm = ({ age, onSubmit, onBack, submitting }) => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    city: "",
    schoolName: "",
    grade: "",
    email: "",
    mobile: "",
    preferredContactMethod: "either",
    consentStatus: false,
  });

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setError("");
  };

  const finish = (event) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.consentStatus) {
      setError("Please tick the consent box to continue with personalised support.");
      return;
    }
    if (form.mobile.trim() && !/^\d{10}$/.test(form.mobile.trim())) {
      setError("Mobile number must be a 10-digit Indian number.");
      return;
    }

    const payload = {
      name: form.name.trim(),
      age,
      consentStatus: true,
    };
    if (form.city.trim()) payload.city = form.city.trim();
    if (form.schoolName.trim()) payload.schoolName = form.schoolName.trim();
    if (form.grade.trim()) payload.grade = form.grade.trim();
    if (form.email.trim()) payload.email = form.email.trim();
    if (form.mobile.trim()) payload.mobile = form.mobile.trim();
    payload.preferredContactMethod = form.preferredContactMethod;

    onSubmit(payload);
  };

  return (
    <form onSubmit={finish} className="p-5 space-y-4">
      <div>
        <h2 className="text-lg font-black text-[#1a365d]">Get personalised support</h2>
        <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">
          Name and consent are required. City is optional — MyPeegu can use an approximate location if you skip it.
        </p>
      </div>

      <div className="space-y-3">
        <input name="name" value={form.name} onChange={update} className={inputClass} placeholder="Name *" />
        <input
          value={age}
          readOnly
          className={`${inputClass} text-slate-500`}
          aria-label="Age"
        />
        <input name="city" value={form.city} onChange={update} className={inputClass} placeholder="City (optional)" />
        <input name="schoolName" value={form.schoolName} onChange={update} className={inputClass} placeholder="School (optional)" />
        <input name="grade" value={form.grade} onChange={update} className={inputClass} placeholder="Grade / Class (optional)" />
        <input name="email" type="email" value={form.email} onChange={update} className={inputClass} placeholder="Email (optional)" />
        <input name="mobile" value={form.mobile} onChange={update} className={inputClass} placeholder="Mobile — 10 digits (optional)" inputMode="tel" />
        <div>
          <p className="text-xs font-semibold text-slate-500 mb-1.5">Preferred contact method</p>
          <div className="flex flex-wrap gap-2">
            {CONTACT_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border cursor-pointer transition-colors ${
                  form.preferredContactMethod === opt.value
                    ? "bg-[#0066cc] text-white border-[#0066cc]"
                    : "border-gray-200 text-[#1a365d] hover:border-[#0066cc]/40"
                }`}
              >
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={opt.value}
                  checked={form.preferredContactMethod === opt.value}
                  onChange={update}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
        <label className="flex items-start gap-3 text-sm text-slate-600 font-medium leading-relaxed">
          <input
            type="checkbox"
            name="consentStatus"
            checked={form.consentStatus}
            onChange={update}
            className="mt-1 accent-[#0066cc]"
          />
          I agree to share these details with MyPeegu for support and counselling communication.
        </label>
      </div>

      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 rounded-full border-2 border-[#0066cc] text-[#0066cc] font-bold text-sm"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 py-3 rounded-full bg-[#0066cc] text-white font-bold text-sm shadow-sm shadow-blue-200 disabled:opacity-60"
        >
          {submitting ? "Saving..." : "Continue"}
        </button>
      </div>
    </form>
  );
};

export default StudentProfileForm;
