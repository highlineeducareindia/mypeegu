import { useState } from "react";

const StudentAgeStep = ({ onContinue }) => {
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const value = Number(age);
    if (!Number.isFinite(value) || value < 1) {
      setError("Please enter your age.");
      return;
    }
    onContinue(value);
  };

  return (
    <form onSubmit={submit} className="p-5 space-y-4">
      <div>
        <h2 className="text-lg font-black text-[#1a365d]">How old are you?</h2>
        <p className="text-sm text-slate-500 font-medium mt-1 leading-relaxed">
          This helps MyPeegu keep the conversation age-appropriate. You can stay anonymous.
        </p>
      </div>
      <input
        value={age}
        onChange={(event) => {
          setAge(event.target.value);
          setError("");
        }}
        inputMode="numeric"
        placeholder="Age"
        className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-2 border-transparent outline-none text-sm font-medium text-[#1a365d] focus:border-[#0066cc] focus:bg-white"
      />
      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
      <button
        type="submit"
        className="w-full py-3 rounded-full bg-[#0066cc] text-white font-bold text-sm shadow-sm shadow-blue-200"
      >
        Continue
      </button>
    </form>
  );
};

export default StudentAgeStep;
