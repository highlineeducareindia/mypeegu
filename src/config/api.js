// const BASE_URL = "http://localhost:3004/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://app.mypeegu.com/api";

export const studentSupportSessionById = (sessionId) =>
  `${BASE_URL}/student-support/session/${sessionId}`;

export const studentSupportEndSession = (sessionId) =>
  `${BASE_URL}/student-support/session/${sessionId}/end`;

export const API_ENDPOINTS = {
  CONTACT_SUBMIT: `${BASE_URL}/contact`,
  CAREER_SUBMIT: `${BASE_URL}/careers`,
  ADMIN_INQUIRIES: `${BASE_URL}/admin/inquiries`,
  STUDENT_SUPPORT_SESSION: `${BASE_URL}/student-support/session`,
  STUDENT_SUPPORT_PROFILE: `${BASE_URL}/student-support/profile`,
  STUDENT_SUPPORT_MESSAGE: `${BASE_URL}/student-support/message`,
  STUDENT_SUPPORT_COUNSELLOR: `${BASE_URL}/student-support/counsellor-request`,
  STUDENT_SUPPORT_FEEDBACK: `${BASE_URL}/student-support/feedback`,
};
