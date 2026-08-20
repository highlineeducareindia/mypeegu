import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import {
  User,
  School,
  Briefcase,
  BookOpen,
  MonitorSmartphone,
  KeyRound,
  ShieldCheck,
  CalendarDays,
  ClipboardList,
} from "lucide-react";
import logo from "../../assets/MyPeeguLogo.png";
import {
  WORKSHOP_REGISTRATION_TYPES,
  isWorkshopSource,
  formatWorkshopDateLabel,
} from "./workshopConfig";

const API_BASE_URL = "https://app.mypeegu.com/api";
const REGISTRATION_ENDPOINT = `${API_BASE_URL}/counsellor-registration`;

const MyPeeguActivationForm = () => {
  const location = useLocation();

  const urlSource = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("source") || "Other";
  }, [location.search]);

  const isWorkshopFlow = isWorkshopSource(urlSource);
  const totalSteps = 7;

  const extractApiErrorMessage = (data, status) => {
    const raw = data?.message ?? data?.error ?? data?.errors;
    if (!raw) return `Request failed (status ${status})`;
    if (typeof raw === "string") return raw;
    if (Array.isArray(raw)) {
      return raw
        .map((item) =>
          typeof item === "string"
            ? item
            : item?.message || item?.msg || JSON.stringify(item),
        )
        .filter(Boolean)
        .join(" ");
    }
    if (typeof raw === "object") {
      if (typeof raw.message === "string") return raw.message;
      if (typeof raw.error === "string") return raw.error;
      try {
        return JSON.stringify(raw);
      } catch {
        return `Request failed (status ${status})`;
      }
    }
    return String(raw);
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    workshopDate: "",
    workshopRegistrationType: "",
    fullName: "",
    mobile: "",
    email: "",
    schoolName: "",
    city: "",
    role: "",
    roleOtherSpec: "",
    curriculum: [],
    curriculumOtherSpec: "",
    strength: "",
    usePlatform: "",
    platformName: "",
    access: "",
    consentAccepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prev) => ({ ...prev, [name]: "" }));
    setApiError("");

    if (type === "checkbox" && name === "curriculum") {
      let updatedCurriculum = [...formData.curriculum];
      if (checked) {
        updatedCurriculum.push(value);
      } else {
        updatedCurriculum = updatedCurriculum.filter((item) => item !== value);
      }
      setFormData({ ...formData, curriculum: updatedCurriculum });
      if (updatedCurriculum.length > 0) setErrors((prev) => ({ ...prev, curriculum: "" }));
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep = () => {
    const newErrors = {};
    let isValid = true;

    if (isWorkshopFlow) {
      switch (currentStep) {
        case 1:
          if (!formData.workshopDate) {
            newErrors.workshopDate = "Please select a workshop date";
            isValid = false;
          }
          break;
        case 2:
          if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
            isValid = false;
          }
          if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is required";
            isValid = false;
          } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
            isValid = false;
          }
          if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
            isValid = false;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
          }
          break;
        case 3:
          if (!formData.schoolName.trim()) {
            newErrors.schoolName = "School Name is required";
            isValid = false;
          }
          if (!formData.city.trim()) {
            newErrors.city = "City / Location is required";
            isValid = false;
          }
          break;
        case 4:
          if (!formData.role) {
            newErrors.role = "Please select a role";
            isValid = false;
          }
          if (formData.role === "Other" && !formData.roleOtherSpec.trim()) {
            newErrors.roleOtherSpec = "Please specify your role";
            isValid = false;
          }
          break;
        case 5:
          if (formData.curriculum.includes("Other") && !formData.curriculumOtherSpec.trim()) {
            newErrors.curriculumOtherSpec = "Please specify the curriculum";
            isValid = false;
          }
          if (!formData.strength) {
            newErrors.strength = "Please select approximate student strength";
            isValid = false;
          }
          break;
        case 6:
          if (!formData.workshopRegistrationType) {
            newErrors.workshopRegistrationType =
              "Please select a workshop registration type";
            isValid = false;
          }
          break;
        case 7:
          if (!formData.consentAccepted) {
            newErrors.consentAccepted =
              "Please agree to the consent before submitting";
            isValid = false;
          }
          break;
        default:
          break;
      }
    } else {
      switch (currentStep) {
        case 1:
          if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
            isValid = false;
          }
          if (!formData.mobile) {
            newErrors.mobile = "Mobile Number is required";
            isValid = false;
          } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
            isValid = false;
          }
          if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
            isValid = false;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
          }
          break;
        case 2:
          if (!formData.schoolName.trim()) {
            newErrors.schoolName = "School Name is required";
            isValid = false;
          }
          if (!formData.city.trim()) {
            newErrors.city = "City / Location is required";
            isValid = false;
          }
          break;
        case 3:
          if (!formData.role) {
            newErrors.role = "Please select a role";
            isValid = false;
          }
          if (formData.role === "Other" && !formData.roleOtherSpec.trim()) {
            newErrors.roleOtherSpec = "Please specify your role";
            isValid = false;
          }
          break;
        case 4:
          if (formData.curriculum.includes("Other") && !formData.curriculumOtherSpec.trim()) {
            newErrors.curriculumOtherSpec = "Please specify the curriculum";
            isValid = false;
          }
          if (!formData.strength) {
            newErrors.strength = "Please select approximate student strength";
            isValid = false;
          }
          break;
        case 5:
          if (!formData.usePlatform) {
            newErrors.usePlatform = "Please select Yes or No";
            isValid = false;
          }
          if (formData.usePlatform === "yes" && !formData.platformName.trim()) {
            newErrors.platformName = "Please mention the platform name";
            isValid = false;
          }
          break;
        case 6:
          if (!formData.access) {
            newErrors.access = "Please select Yes or No";
            isValid = false;
          }
          break;
        case 7:
          if (!formData.consentAccepted) {
            newErrors.consentAccepted =
              "Please agree to the consent before submitting";
            isValid = false;
          }
          break;
        default:
          break;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep()) {
      setApiError("");
      setErrors({});
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setApiError("");
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    if (!validateStep()) {
      return;
    }

    setIsSubmitting(true);

    const curriculumFinal = formData.curriculum
      .map((v) =>
        v === "Other" && formData.curriculumOtherSpec
          ? formData.curriculumOtherSpec
          : v,
      )
      .join(", ");

    const selectedWorkshopLabel = formatWorkshopDateLabel(formData.workshopDate);
    const workshopMeta = [
      selectedWorkshopLabel || formData.workshopDate,
      formData.workshopRegistrationType,
    ]
      .filter(Boolean)
      .join(" | ");

    const payload = isWorkshopFlow
      ? {
          fullName: formData.fullName,
          mobileNumber: formData.mobile,
          email: formData.email,
          schoolName: formData.schoolName,
          schoolCity: formData.city,
          role:
            formData.role === "Other" ? formData.roleOtherSpec : formData.role,
          otherRole: formData.role === "Other" ? formData.roleOtherSpec : "",
          curriculum: curriculumFinal,
          studentStrength: formData.strength,
          isUsingDigitalPlatform: false,
          platformName: "",
          wantsComplimentaryAccess: false,
          consentAccepted: formData.consentAccepted,
          registrationSource: urlSource,
          // Persist date + type in existing backend fields until dedicated columns exist
          workshopLocation: [formData.city, workshopMeta].filter(Boolean).join(" | "),
          otherRegistrationSource: workshopMeta,
          workshopDate: formData.workshopDate,
          workshopDateLabel: selectedWorkshopLabel,
          workshopRegistrationType: formData.workshopRegistrationType,
        }
      : {
          fullName: formData.fullName,
          mobileNumber: formData.mobile,
          email: formData.email,
          schoolName: formData.schoolName,
          schoolCity: formData.city,
          role:
            formData.role === "Other" ? formData.roleOtherSpec : formData.role,
          otherRole: formData.role === "Other" ? formData.roleOtherSpec : "",
          curriculum: curriculumFinal,
          studentStrength: formData.strength,
          isUsingDigitalPlatform: formData.usePlatform === "yes",
          platformName:
            formData.usePlatform === "yes" ? formData.platformName : "",
          wantsComplimentaryAccess: formData.access === "yes",
          consentAccepted: formData.consentAccepted,
          registrationSource: urlSource,
          workshopLocation: "",
          otherRegistrationSource: urlSource === "Other" ? "Direct Link" : "",
        };

    try {
      const response = await fetch(REGISTRATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(extractApiErrorMessage(data, response.status));
      }

      Swal.fire({
        html: `
          <div class="flex flex-col items-center justify-center p-2">
            <div class="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 border-2 border-blue-100">
                <img src="${logo}" alt="MyPeegu Logo" class="w-10 h-10 object-contain" />
            </div>
            <h2 class="text-2xl font-extrabold text-[#1A233A] mb-2 tracking-tight">Registration Successful!</h2>
            <p class="text-[#4B5563] text-sm mb-6 text-center">
              Thank you for registering. You are being redirected to the home page.
            </p>
            <div class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div class="bg-[#0066CC] h-full rounded-full animate-shrink-bar"></div>
            </div>
          </div>
        `,
        showConfirmButton: false,
        timer: 2000,
        width: 360,
        background: "#ffffff",
        backdrop: `rgba(26, 35, 58, 0.6)`,
        allowOutsideClick: false,
        customClass: {
          container: "form-font-inter",
          popup: "rounded-3xl shadow-2xl border border-gray-100 p-6",
        },
      }).then(() => {
        window.location.href = "https://mypeegu.com";
      });
    } catch (err) {
      const errorMsg = err.message.toLowerCase();

      if (isWorkshopFlow) {
        if (
          errorMsg.includes("workshop date") ||
          errorMsg.includes("workshopdate")
        ) {
          setCurrentStep(1);
        } else if (
          errorMsg.includes("mobile") ||
          errorMsg.includes("number") ||
          errorMsg.includes("email") ||
          (errorMsg.includes("name") && !errorMsg.includes("school"))
        ) {
          setCurrentStep(2);
        } else if (
          errorMsg.includes("school") ||
          errorMsg.includes("city") ||
          errorMsg.includes("location")
        ) {
          setCurrentStep(3);
        } else if (errorMsg.includes("role")) {
          setCurrentStep(4);
        } else if (
          errorMsg.includes("curriculum") ||
          errorMsg.includes("strength") ||
          errorMsg.includes("student")
        ) {
          setCurrentStep(5);
        } else if (
          errorMsg.includes("registration type") ||
          errorMsg.includes("workshop registration")
        ) {
          setCurrentStep(6);
        }
      } else if (
        errorMsg.includes("mobile") ||
        errorMsg.includes("number") ||
        errorMsg.includes("email") ||
        errorMsg.includes("name")
      ) {
        setCurrentStep(1);
      } else if (
        errorMsg.includes("school") ||
        errorMsg.includes("city") ||
        errorMsg.includes("location")
      ) {
        setCurrentStep(2);
      } else if (errorMsg.includes("role")) {
        setCurrentStep(3);
      }

      setApiError(`Oops! ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  const inputClass = (hasError) =>
    `w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-[#0066CC] focus:border-[#0066CC] outline-none transition-all ${hasError ? "input-error" : ""
    }`;

  return (
    <div className="relative min-h-screen text-gray-800 antialiased py-4 sm:py-6 px-4 md:px-8 bg-white overflow-hidden flex flex-col form-font-inter">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        .form-font-inter { font-family: 'Inter', sans-serif; }
        .bubble { position: fixed; border-radius: 50%; filter: blur(3px); opacity: 0.25; z-index: 0; animation: float 14s ease-in-out infinite; }
        .bubble:nth-child(1){ width:180px; height:180px; background:#0066CC; top:-60px; left:-40px; animation-duration:16s; }
        .bubble:nth-child(2){ width:120px; height:120px; background:#3385D6; top:10%; right:-30px; animation-duration:12s; animation-delay:1s; }
        .bubble:nth-child(3){ width:90px; height:90px; background:#004C99; top:40%; left:5%; animation-duration:18s; animation-delay:2s; }
        .bubble:nth-child(4){ width:220px; height:220px; background:#66A3E0; bottom:-80px; right:-60px; animation-duration:20s; }
        .bubble:nth-child(5){ width:70px; height:70px; background:#99C2EB; bottom:15%; left:15%; animation-duration:10s; animation-delay:1.5s; }
        .bubble:nth-child(6){ width:100px; height:100px; background:#0059B3; top:55%; right:8%; animation-duration:15s; animation-delay:0.5s; }
        @keyframes float { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(15px,-20px) scale(1.06); } }
        .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.5); border-top-color: #fff; border-radius: 50%; display: inline-block; animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shrink-bar { from { width: 100%; } to { width: 0%; } }
        .animate-shrink-bar { animation: shrink-bar 2s linear forwards; }
        
        .input-error { border-color: #ef4444 !important; background-color: #fef2f2 !important; }
        .input-error:focus { box-shadow: 0 0 0 2px #f87171 !important; }
      `}</style>

      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="relative z-10 max-w-3xl mx-auto w-full space-y-4">
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-sm border border-gray-200 px-4 py-3 sm:px-5 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="MyPeegu"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold text-[#1A233A] tracking-tight leading-tight">
                {isWorkshopFlow
                  ? "MyPeegu Workshop Registration"
                  : "MyPeegu Activation Portal"}
              </h1>
              <p className="text-gray-500 text-xs mt-1 sm:mt-0 leading-tight">
                {isWorkshopFlow
                  ? "Register for your selected workshop date. Scan-to-register via Workshop QR."
                  : "Register your school to connect with the wellness architecture."}
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-lg shrink-0">
            {isWorkshopFlow ? (
              <CalendarDays className="w-4 h-4 text-[#F97316]" />
            ) : (
              <svg
                className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#F97316]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            )}
            {isWorkshopFlow ? (
              <span className="text-[11px] font-bold text-[#F97316]">Workshop QR</span>
            ) : null}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur shadow-sm border border-gray-200 rounded-xl flex flex-col relative pb-24 sm:pb-20"
          noValidate
        >
          <div className="p-4 sm:p-5 pb-4 border-b border-gray-100 bg-gray-50/60 rounded-t-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-[#0066CC]">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                {progressPercentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#0066CC] h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {apiError && (
            <div className="mx-5 sm:mx-6 md:mx-8 mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          <div className="p-5 sm:p-6 md:p-8">
            {/* ─── WORKSHOP FLOW ─── */}
            {isWorkshopFlow && currentStep === 1 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-2 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  Workshop Date
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Which workshop date are you applying for?
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Workshop Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="workshopDate"
                    value={formData.workshopDate}
                    onChange={handleInputChange}
                    className={`${inputClass(errors.workshopDate)} cursor-pointer`}
                  />
                  {formData.workshopDate ? (
                    <p className="text-xs text-[#0066CC] font-medium mt-2">
                      Selected: {formatWorkshopDateLabel(formData.workshopDate)}
                    </p>
                  ) : null}
                  {errors.workshopDate && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.workshopDate}
                    </p>
                  )}
                </div>
              </div>
            )}

            {isWorkshopFlow && currentStep === 2 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <User className="w-5 h-5" />
                  </div>
                  Participant Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ananya Sharma"
                      className={inputClass(errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      className={inputClass(errors.mobile)}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@school.edu"
                      className={inputClass(errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {isWorkshopFlow && currentStep === 3 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <School className="w-5 h-5" />
                  </div>
                  School Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      placeholder="e.g. Delhi Public School"
                      className={inputClass(errors.schoolName)}
                    />
                    {errors.schoolName && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.schoolName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      School City / Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai"
                      className={inputClass(errors.city)}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {isWorkshopFlow && currentStep === 4 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  Your Role
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What best describes your current role?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 p-4 sm:p-5 rounded-lg border transition-colors ${errors.role
                      ? "bg-red-50 border-red-300"
                      : "bg-gray-50 border-gray-200"
                    }`}
                >
                  {[
                    "School Counsellor",
                    "Special Educator",
                    "Counsellor & Special Educator",
                    "Wellness Coordinator",
                    "Teacher",
                    "School Leader / Principal",
                    "Other",
                  ].map((roleOpt) => (
                    <label
                      key={roleOpt}
                      className={`flex items-center gap-3 cursor-pointer group ${roleOpt === "Counsellor & Special Educator"
                          ? "sm:col-span-2"
                          : ""
                        }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={roleOpt}
                        checked={formData.role === roleOpt}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0066CC] transition-colors">
                        {roleOpt === "Counsellor & Special Educator"
                          ? "Counsellor & Special Educator (Dual Role)"
                          : roleOpt === "Other"
                            ? "Other (Please specify)"
                            : roleOpt}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.role}
                  </p>
                )}
                {formData.role === "Other" && (
                  <div className="mt-4 transition-all duration-300">
                    <input
                      type="text"
                      name="roleOtherSpec"
                      value={formData.roleOtherSpec}
                      onChange={handleInputChange}
                      placeholder="Please specify your role"
                      className={inputClass(errors.roleOtherSpec)}
                    />
                    {errors.roleOtherSpec && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.roleOtherSpec}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {isWorkshopFlow && currentStep === 5 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  School Profile
                </h2>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Which curriculum does your school follow?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {["CBSE", "ICSE", "IB", "Cambridge", "State Board", "Other"].map(
                        (currOpt) => (
                          <label
                            key={currOpt}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name="curriculum"
                              value={currOpt}
                              checked={formData.curriculum.includes(currOpt)}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {currOpt}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                    {formData.curriculum.includes("Other") && (
                      <div className="mt-4 transition-all duration-300">
                        <input
                          type="text"
                          name="curriculumOtherSpec"
                          value={formData.curriculumOtherSpec}
                          onChange={handleInputChange}
                          placeholder="Please specify curriculum"
                          className={inputClass(errors.curriculumOtherSpec)}
                        />
                        {errors.curriculumOtherSpec && (
                          <p className="text-red-500 text-xs mt-1 font-medium">
                            {errors.curriculumOtherSpec}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Approximate Student Strength{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="strength"
                      value={formData.strength}
                      onChange={handleInputChange}
                      className={`${inputClass(errors.strength)} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select student strength
                      </option>
                      <option value="Less than 500">Less than 500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-2000">1000-2000</option>
                      <option value="Above 2000">Above 2000</option>
                    </select>
                    {errors.strength && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.strength}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {isWorkshopFlow && currentStep === 6 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <ClipboardList className="w-5 h-5" />
                  </div>
                  Workshop Registration Type
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How are you registering for this workshop?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div
                  className={`space-y-3 p-4 sm:p-5 rounded-lg border transition-colors ${
                    errors.workshopRegistrationType
                      ? "bg-red-50 border-red-300"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {WORKSHOP_REGISTRATION_TYPES.map((typeOpt) => (
                    <label
                      key={typeOpt}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="workshopRegistrationType"
                        value={typeOpt}
                        checked={formData.workshopRegistrationType === typeOpt}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0066CC] transition-colors">
                        {typeOpt}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.workshopRegistrationType && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.workshopRegistrationType}
                  </p>
                )}
              </div>
            )}

            {isWorkshopFlow && currentStep === 7 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  Consent
                </h2>
                <label
                  className={`flex items-start gap-3 p-4 sm:p-5 rounded-lg cursor-pointer transition-colors shadow-sm border ${
                    errors.consentAccepted
                      ? "bg-red-50 border-red-300"
                      : "bg-blue-50 border-blue-200 hover:border-[#0066CC]"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="consentAccepted"
                    checked={formData.consentAccepted}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed font-medium">
                    I agree to receive workshop updates, product information, and
                    training communication on my registered email address and mobile
                    number. <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.consentAccepted && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.consentAccepted}
                  </p>
                )}
              </div>
            )}

            {/* ─── NORMAL WEBSITE FLOW (unchanged) ─── */}
            {!isWorkshopFlow && currentStep === 1 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <User className="w-5 h-5" />
                  </div>
                  Participant Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      1. Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ananya Sharma"
                      className={inputClass(errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      2. Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="10-digit number"
                      className={inputClass(errors.mobile)}
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      3. Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@school.edu"
                      className={inputClass(errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!isWorkshopFlow && currentStep === 2 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <School className="w-5 h-5" />
                  </div>
                  School Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      4. School Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      placeholder="e.g. Delhi Public School"
                      className={inputClass(errors.schoolName)}
                    />
                    {errors.schoolName && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.schoolName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      5. School City / Location{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai"
                      className={inputClass(errors.city)}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!isWorkshopFlow && currentStep === 3 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  Your Role
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  6. What best describes your current role?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 p-4 sm:p-5 rounded-lg border transition-colors ${errors.role
                      ? "bg-red-50 border-red-300"
                      : "bg-gray-50 border-gray-200"
                    }`}
                >
                  {[
                    "School Counsellor",
                    "Special Educator",
                    "Counsellor & Special Educator",
                    "Wellness Coordinator",
                    "Teacher",
                    "School Leader / Principal",
                    "Other",
                  ].map((roleOpt) => (
                    <label
                      key={roleOpt}
                      className={`flex items-center gap-3 cursor-pointer group ${roleOpt === "Counsellor & Special Educator"
                          ? "sm:col-span-2"
                          : ""
                        }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={roleOpt}
                        checked={formData.role === roleOpt}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#0066CC] transition-colors">
                        {roleOpt === "Counsellor & Special Educator"
                          ? "Counsellor & Special Educator (Dual Role)"
                          : roleOpt === "Other"
                            ? "Other (Please specify)"
                            : roleOpt}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.role && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.role}
                  </p>
                )}
                {formData.role === "Other" && (
                  <div className="mt-4 transition-all duration-300">
                    <input
                      type="text"
                      name="roleOtherSpec"
                      value={formData.roleOtherSpec}
                      onChange={handleInputChange}
                      placeholder="Please specify your role"
                      className={inputClass(errors.roleOtherSpec)}
                    />
                    {errors.roleOtherSpec && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.roleOtherSpec}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {!isWorkshopFlow && currentStep === 4 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  School Profile
                </h2>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      7. Which curriculum does your school follow?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {["CBSE", "ICSE", "IB", "Cambridge", "State Board", "Other"].map(
                        (currOpt) => (
                          <label
                            key={currOpt}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              name="curriculum"
                              value={currOpt}
                              checked={formData.curriculum.includes(currOpt)}
                              onChange={handleInputChange}
                              className="w-4 h-4 rounded text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {currOpt}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                    {formData.curriculum.includes("Other") && (
                      <div className="mt-4 transition-all duration-300">
                        <input
                          type="text"
                          name="curriculumOtherSpec"
                          value={formData.curriculumOtherSpec}
                          onChange={handleInputChange}
                          placeholder="Please specify curriculum"
                          className={inputClass(errors.curriculumOtherSpec)}
                        />
                        {errors.curriculumOtherSpec && (
                          <p className="text-red-500 text-xs mt-1 font-medium">
                            {errors.curriculumOtherSpec}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      8. Approximate Student Strength{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="strength"
                      value={formData.strength}
                      onChange={handleInputChange}
                      className={`${inputClass(errors.strength)} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select student strength
                      </option>
                      <option value="Less than 500">Less than 500</option>
                      <option value="500-1000">500-1000</option>
                      <option value="1000-2000">1000-2000</option>
                      <option value="Above 2000">Above 2000</option>
                    </select>
                    {errors.strength && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.strength}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!isWorkshopFlow && currentStep === 5 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <MonitorSmartphone className="w-5 h-5" />
                  </div>
                  Digital Platform
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  9. Are you currently using any digital platform for counselling
                  or student support? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="usePlatform"
                      value="yes"
                      checked={formData.usePlatform === "yes"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="usePlatform"
                      value="no"
                      checked={formData.usePlatform === "no"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">No</span>
                  </label>
                </div>
                {errors.usePlatform && (
                  <p className="text-red-500 text-xs mt-1 font-medium mb-4">
                    {errors.usePlatform}
                  </p>
                )}
                {formData.usePlatform === "yes" && (
                  <div className="transition-all duration-300 mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      If Yes, please mention the platform:
                    </label>
                    <input
                      type="text"
                      name="platformName"
                      value={formData.platformName}
                      onChange={handleInputChange}
                      placeholder="Type platform name here"
                      className={inputClass(errors.platformName)}
                    />
                    {errors.platformName && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.platformName}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {!isWorkshopFlow && currentStep === 6 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  Complimentary Platform Access
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  10. Would you like to receive complimentary access to the
                  MyPeegu platform? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8 mb-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="access"
                      value="yes"
                      checked={formData.access === "yes"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="access"
                      value="no"
                      checked={formData.access === "no"}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">No</span>
                  </label>
                </div>
                {errors.access && (
                  <p className="text-red-500 text-xs mt-1 font-medium">
                    {errors.access}
                  </p>
                )}
              </div>
            )}

            {!isWorkshopFlow && currentStep === 7 && (
              <div className="animate-[fadeIn_0.4s_ease-in-out]">
                <h2 className="text-lg sm:text-xl font-bold text-[#1A233A] mb-6 flex items-center gap-2">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-[#0066CC]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  Consent
                </h2>
                <label
                  className={`flex items-start gap-3 p-4 sm:p-5 rounded-lg cursor-pointer transition-colors shadow-sm border ${errors.consentAccepted
                      ? "bg-red-50 border-red-300"
                      : "bg-blue-50 border-blue-200 hover:border-[#0066CC]"
                    }`}
                >
                  <input
                    type="checkbox"
                    name="consentAccepted"
                    checked={formData.consentAccepted}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded text-[#0066CC] border-gray-300 focus:ring-[#0066CC] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed font-medium">
                    I agree to receive my complimentary MyPeegu platform activation
                    link, product updates, and training communication on my
                    registered email address and mobile number.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.consentAccepted && (
                  <p className="text-red-500 text-xs mt-2 font-medium">
                    {errors.consentAccepted}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200 bg-white/95 backdrop-blur rounded-b-xl flex gap-3">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="flex-1 sm:flex-none px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}

            <div className="hidden sm:block flex-grow"></div>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0066CC] hover:bg-[#0052A3] text-white text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#0066CC] flex items-center justify-center gap-2"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-[#F97316] hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#F97316] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Submitting...
                  </>
                ) : (
                  <span>Submit Details</span>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyPeeguActivationForm;
