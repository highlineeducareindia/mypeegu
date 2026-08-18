import {
  API_ENDPOINTS,
  studentSupportEndSession,
  studentSupportSessionById,
} from "../../config/api";

const VISITOR_KEY = "mypeegu_visitor_id";

let sessionToken = null;
let visitorId = null;

export class SupportApiError extends Error {
  constructor(status, message, validationErrors = []) {
    super(message);
    this.name = "SupportApiError";
    this.status = status;
    this.validationErrors = validationErrors;
  }
}

const timeoutFetch = async (url, options = {}, ms = 20000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
};

const supportHeaders = (useAuth) => {
  const headers = { "Content-Type": "application/json" };
  if (useAuth && sessionToken) headers["x-support-session-token"] = sessionToken;
  const storedVisitor = visitorId || localStorage.getItem(VISITOR_KEY);
  if (storedVisitor) headers["x-support-visitor-id"] = storedVisitor;
  return headers;
};

const parseJson = async (res) => {
  try {
    return await res.json();
  } catch {
    return {};
  }
};

const unwrapMessage = (json) => json?.message || json?.data?.message || json || {};

const formatValidation = (errors) => {
  if (!errors) return "";
  if (Array.isArray(errors)) {
    return errors
      .map((item) => (typeof item === "string" ? item : item?.message || item?.msg || ""))
      .filter(Boolean)
      .join(" ");
  }
  if (typeof errors === "object") {
    return Object.values(errors).flat().join(" ");
  }
  return String(errors);
};

const requestJson = async (url, { method = "POST", body, useAuth = false } = {}) => {
  const res = await timeoutFetch(url, {
    method,
    headers: supportHeaders(useAuth),
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const json = await parseJson(res);
  const payload = unwrapMessage(json);

  if (!res.ok) {
    const validationErrors =
      json.validationErrors || payload.validationErrors || json.errors || [];
    const message =
      formatValidation(validationErrors) ||
      payload.error ||
      json.error ||
      (typeof json.message === "string" ? json.message : "") ||
      "Something went wrong. Please try again.";
    throw new SupportApiError(res.status, message, validationErrors);
  }

  return payload;
};

const mapTopics = (topics = []) =>
  topics.map((t) => ({
    id: t.id,
    title: t.label || t.title || t.id,
    subtitle: t.category || "",
  }));

const extractBotText = (payload) => {
  const fromReply = (payload.reply || "").trim();
  if (fromReply) return fromReply;

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  const bot = [...messages]
    .reverse()
    .find(
      (m) =>
        m.senderType === "mypeegu" ||
        m.senderType === "system" ||
        m.role === "mypeegu",
    );
  return (bot?.message || bot?.text || "").trim();
};

const isSafety = (payload) => {
  const level = String(payload.risk?.level || "").toUpperCase();
  return Boolean(payload.safetyEscalated) || level === "HIGH" || level === "CRITICAL";
};

const shouldShowCounsellor = (payload) =>
  Boolean(payload.counsellor?.showCTA || payload.suggestCounsellor);

export const getSessionToken = () => sessionToken;

export const createSupportSession = async ({ continueMode = "anonymous", age, extras = {} }) => {
  const body = { continueMode, age };
  const storedVisitor = localStorage.getItem(VISITOR_KEY);
  if (storedVisitor) body.visitorId = storedVisitor;

  Object.entries(extras).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      body[key] = value;
    }
  });

  const payload = await requestJson(API_ENDPOINTS.STUDENT_SUPPORT_SESSION, { body });

  if (payload.sessionToken) sessionToken = payload.sessionToken;
  const session = payload.session || {};
  visitorId = session.visitorId || payload.visitorId || storedVisitor;
  if (visitorId) localStorage.setItem(VISITOR_KEY, visitorId);

  const location = payload.approximateLocation || {};
  const city = location.city || "";
  const hideLocation =
    !city || /unavailable/i.test(location.label || "") || /unavailable/i.test(city);

  return {
    sessionId: session.id || session.sessionId || "",
    continueMode: session.continueMode || continueMode,
    suggestedTopics: mapTopics(session.suggestedTopics),
    approximateLocation: hideLocation ? null : location,
  };
};

export const submitProfile = async (profileData) => {
  const payload = await requestJson(API_ENDPOINTS.STUDENT_SUPPORT_PROFILE, {
    body: profileData,
    useAuth: true,
  });
  const session = payload.session || {};
  return {
    profileId: payload.profileId || "",
    suggestedTopics: mapTopics(session.suggestedTopics),
  };
};

export const sendSupportMessage = async ({ message, topicId } = {}) => {
  const body = {};
  if (message) body.message = message;
  if (topicId) body.topicId = topicId;

  const payload = await requestJson(API_ENDPOINTS.STUDENT_SUPPORT_MESSAGE, {
    body,
    useAuth: true,
  });

  const botText = extractBotText(payload);
  const botMessage = Array.isArray(payload.messages)
    ? [...payload.messages].reverse().find((m) => m.senderType === "mypeegu" || m.senderType === "system")
    : null;

  return {
    text: botText,
    messageId: botMessage?.id || "",
    safetyEscalated: isSafety(payload),
    counsellorRecommended: shouldShowCounsellor(payload),
    counsellorPrompt: payload.counsellor?.prompt || payload.counsellorPrompt || "",
  };
};

export const loadExistingSession = async (sessionId) => {
  const payload = await requestJson(studentSupportSessionById(sessionId), {
    method: "GET",
    useAuth: true,
  });
  const session = payload.session || {};
  const messages = Array.isArray(payload.messages)
    ? payload.messages
        .map((item) => ({
          id: item.id,
          role: item.senderType === "student" ? "student" : "mypeegu",
          text: item.message || item.text || "",
        }))
        .filter((item) => item.text)
    : [];

  return {
    sessionId: session.id || sessionId,
    suggestedTopics: mapTopics(session.suggestedTopics),
    messages,
    safetyEscalated: isSafety(payload) || Boolean(session.safetyEscalated),
    counsellorRecommended: shouldShowCounsellor(payload) || Boolean(session.counsellorRequested),
  };
};

export const requestCounsellor = async (body = {}) => {
  const payload = await requestJson(API_ENDPOINTS.STUDENT_SUPPORT_COUNSELLOR, {
    body,
    useAuth: true,
  });
  return {
    ok: true,
    alreadySubmitted: Boolean(
      payload.alreadySubmitted ||
        payload.requestCreated === false ||
        payload.status === "existing",
    ),
    requestId: payload.requestId || payload.id || "",
    status: payload.status || "pending",
  };
};

export const sendSupportFeedback = async ({ rating, feedback }) => {
  await requestJson(API_ENDPOINTS.STUDENT_SUPPORT_FEEDBACK, {
    body: { rating, feedback },
    useAuth: true,
  });
  return true;
};

export const endSupportSession = async (sessionId) => {
  if (sessionId) {
    try {
      await requestJson(studentSupportEndSession(sessionId), {
        body: {},
        useAuth: true,
      });
    } catch {
      /* session may already be closed */
    }
  }
  sessionToken = null;
};
