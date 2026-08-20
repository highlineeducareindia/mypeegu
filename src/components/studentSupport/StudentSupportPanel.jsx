import { useEffect, useMemo, useRef, useState } from "react";
import { Send } from "lucide-react";
import StudentSupportHeader from "./StudentSupportHeader";
import StudentAgeStep from "./StudentAgeStep";
import StudentProfileChoice from "./StudentProfileChoice";
import StudentProfileForm from "./StudentProfileForm";
import TopicSuggestions from "./TopicSuggestions";
import ChatMessages from "./ChatMessages";
import CounsellorCTA from "./CounsellorCTA";
import ChatFeedback from "./ChatFeedback";
import SafetySupport from "./SafetySupport";
import {
  SupportApiError,
  createSupportSession,
  submitProfile,
  sendSupportMessage,
  requestCounsellor,
  sendSupportFeedback,
  endSupportSession,
} from "./studentSupportApi";

const nextId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

const StudentSupportPanel = ({ onClose, onMinimise }) => {
  const [view, setView] = useState("age");
  const [age, setAge] = useState(null);
  const [profile, setProfile] = useState(null);
  const [sessionId, setSessionId] = useState("");
  const [topics, setTopics] = useState([]);
  const [locationHint, setLocationHint] = useState("");
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [showCounsellor, setShowCounsellor] = useState(false);
  const [counsellorPrompt, setCounsellorPrompt] = useState("");
  const [counsellorConfirmed, setCounsellorConfirmed] = useState(false);
  const [counsellorAlready, setCounsellorAlready] = useState(false);
  const [counsellorBusy, setCounsellorBusy] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [safetyReply, setSafetyReply] = useState("");
  const [keyboardInset, setKeyboardInset] = useState(0);
  const failedPayload = useRef(null);
  const inputRef = useRef(null);
  const continueModeRef = useRef("anonymous");
  const sessionReadyRef = useRef(Promise.resolve());

  useEffect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return undefined;
    const sync = () => {
      const inset = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
      setKeyboardInset(inset > 80 ? inset : 0);
    };
    viewport.addEventListener("resize", sync);
    viewport.addEventListener("scroll", sync);
    return () => {
      viewport.removeEventListener("resize", sync);
      viewport.removeEventListener("scroll", sync);
    };
  }, []);

  const headerStatus = useMemo(() => {
    if (loading) return status;
    if (view === "safety") return "PIVA is here with you.";
    return "PIVA – MyPeegu Virtual Assistant";
  }, [loading, status, view]);

  const apiErrorText = (err) => {
    if (err instanceof SupportApiError) return err.message;
    return "Something went wrong. Please try again.";
  };

  const applySession = (session) => {
    setSessionId(session.sessionId);
    setTopics(session.suggestedTopics || []);
    setLocationHint(session.approximateLocation?.city || "");
  };

  const startSession = async (continueMode, extras = {}) => {
    continueModeRef.current = continueMode;
    return createSupportSession({ continueMode, age, extras });
  };

  const recoverIfExpired = async (err) => {
    if (!(err instanceof SupportApiError) || (err.status !== 409 && err.status !== 401)) {
      return false;
    }
    const session = await startSession(continueModeRef.current, profile || {});
    applySession(session);
    return true;
  };

  const handleAnonymous = () => {
    setView("topics");
    setTopicsLoading(true);
    setError("");

    sessionReadyRef.current = startSession("anonymous")
      .then((session) => {
        applySession(session);
        return session;
      })
      .catch((err) => {
        setError(apiErrorText(err));
        setView("choice");
        throw err;
      })
      .finally(() => {
        setTopicsLoading(false);
      });
  };

  const handlePersonalised = () => {
    setView("form");
    setError("");

    sessionReadyRef.current = startSession("personalised")
      .then((session) => {
        applySession(session);
        return session;
      })
      .catch((err) => {
        setError(apiErrorText(err));
        setView("choice");
        throw err;
      });
  };

  const handleFormSubmit = async (profileData) => {
    setProfile(profileData);
    setView("topics");
    setTopicsLoading(true);
    setError("");

    try {
      await sessionReadyRef.current;
      const result = await submitProfile(profileData);
      if (result.suggestedTopics?.length) setTopics(result.suggestedTopics);
    } catch (err) {
      if (await recoverIfExpired(err)) {
        try {
          const result = await submitProfile(profileData);
          if (result.suggestedTopics?.length) setTopics(result.suggestedTopics);
        } catch (retryErr) {
          setError(apiErrorText(retryErr));
          setView("form");
        }
      } else {
        setError(apiErrorText(err));
        setView("form");
      }
    } finally {
      setTopicsLoading(false);
    }
  };

  const applyReply = (reply) => {
    setLoading(false);
    if (reply.safetyEscalated) {
      setSafetyReply(reply.text || "");
      setView("safety");
      if (reply.counsellorRecommended) {
        setShowCounsellor(true);
        setCounsellorPrompt(reply.counsellorPrompt || "");
      }
      return;
    }

    if (!reply.text) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setMessages((prev) => [
      ...prev,
      { id: reply.messageId || nextId(), role: "mypeegu", text: reply.text },
    ]);
    if (reply.counsellorRecommended) {
      setShowCounsellor(true);
      setCounsellorPrompt(reply.counsellorPrompt || "");
    }
    setError("");
    failedPayload.current = null;
  };

  const postMessage = async (payload) => {
    try {
      const reply = await sendSupportMessage(payload);
      applyReply(reply);
    } catch (err) {
      if (await recoverIfExpired(err)) {
        try {
          const reply = await sendSupportMessage(payload);
          applyReply(reply);
          return;
        } catch (retryErr) {
          setLoading(false);
          setError(apiErrorText(retryErr));
          return;
        }
      }
      setLoading(false);
      setError(apiErrorText(err));
    }
  };

  const startChat = (topic) => {
    setView("chat");
    setMessages([{ id: nextId(), role: "student", text: topic.title }]);
    setLoading(true);
    setStatus("PIVA is listening...");
    failedPayload.current = { topicId: topic.id };
    postMessage({ topicId: topic.id });
    setTimeout(() => inputRef.current?.focus(), 250);
  };

  const sendMessage = async (rawText) => {
    const text = (rawText || "").trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { id: nextId(), role: "student", text }]);
    setInput("");
    setError("");
    setLoading(true);
    setStatus("PIVA is thinking...");
    failedPayload.current = { message: text };
    await postMessage({ message: text });
  };

  const retryLast = async () => {
    if (!failedPayload.current) return;
    setError("");
    setLoading(true);
    setStatus("PIVA is thinking...");
    await postMessage(failedPayload.current);
  };

  const handleCounsellorRequest = async (body = {}) => {
    setCounsellorBusy(true);
    setError("");
    try {
      const result = await requestCounsellor(body);
      if (result.alreadySubmitted) setCounsellorAlready(true);
      else setCounsellorConfirmed(true);
    } catch (err) {
      if (err instanceof SupportApiError && (err.status === 409 || /already/i.test(err.message))) {
        setCounsellorAlready(true);
      } else {
        setError(apiErrorText(err));
      }
    } finally {
      setCounsellorBusy(false);
    }
  };

  const handleClose = async () => {
    if (sessionId) endSupportSession(sessionId);
    onClose();
  };

  const disclaimer =
    "PIVA – MyPeegu Virtual Assistant is not a substitute for professional counselling. If you need immediate help, please contact a trusted adult, email sankalp@mypeegu.in, or chat on WhatsApp: +91 90355 24865.";

  const composer = view === "chat" && (
    <div
      className="shrink-0 border-t border-gray-100 bg-white px-3 pt-3"
      style={{ paddingBottom: `calc(12px + env(safe-area-inset-bottom) + ${keyboardInset}px)` }}
    >
      {error ? (
        <div className="mb-3 rounded-2xl bg-red-50 border border-red-100 p-3">
          <p className="text-sm font-semibold text-red-600 mb-2">{error}</p>
          <button type="button" onClick={retryLast} className="w-full py-2 rounded-full bg-[#0066cc] text-white text-sm font-bold">
            Try Again
          </button>
        </div>
      ) : null}
      <CounsellorCTA
        visible={showCounsellor}
        confirmed={counsellorConfirmed}
        alreadySubmitted={counsellorAlready}
        submitting={counsellorBusy}
        profile={profile}
        prompt={counsellorPrompt}
        onRequest={handleCounsellorRequest}
      />
      <ChatFeedback
        visible={showFeedback || counsellorConfirmed || counsellorAlready}
        submitted={feedbackSent}
        onSubmit={async (payload) => {
          await sendSupportFeedback(payload);
          setFeedbackSent(true);
        }}
      />
      <form
        className="flex items-end gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(input);
        }}
      >
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          disabled={loading}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              sendMessage(input);
            }
          }}
          placeholder="Share what's on your mind..."
          className="flex-1 max-h-28 resize-none px-4 py-3 rounded-2xl bg-slate-50 text-sm font-medium text-[#1a365d] outline-none focus:bg-white focus:ring-2 focus:ring-[#0066cc]/20"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send message"
          className="h-11 w-11 shrink-0 rounded-full bg-[#0066cc] text-white flex items-center justify-center shadow-sm shadow-blue-200 disabled:opacity-40"
        >
          <Send size={16} />
        </button>
      </form>
      {/* <p className="text-[10px] text-slate-400 font-medium text-center mt-2 pb-1">{disclaimer}</p> */}
    </div>
  );

  return (
    <section className="flex flex-col h-full bg-white overflow-hidden" aria-label="PIVA – MyPeegu Virtual Assistant">
      <StudentSupportHeader status={headerStatus} onClose={handleClose} onMinimise={onMinimise} />
      {error && view !== "chat" ? (
        <p className="mx-5 mt-3 text-sm font-semibold text-red-600">{error}</p>
      ) : null}
      {view === "age" ? (
        <div className="flex-1 overflow-y-auto">
          <StudentAgeStep
            onContinue={(value) => {
              setAge(value);
              setView("choice");
            }}
          />
        </div>
      ) : null}
      {view === "choice" ? (
        <div className="flex-1 overflow-y-auto">
          <StudentProfileChoice
            age={age}
            onAnonymous={handleAnonymous}
            onPersonalised={handlePersonalised}
          />
        </div>
      ) : null}
      {view === "form" ? (
        <div className="flex-1 overflow-y-auto">
          <StudentProfileForm
            age={age}
            onBack={() => setView("choice")}
            onSubmit={handleFormSubmit}
          />
        </div>
      ) : null}
      {view === "topics" ? (
        <div className="flex-1 overflow-y-auto">
          <TopicSuggestions
            topics={topics}
            loading={topicsLoading}
            locationHint={locationHint}
            onSelect={startChat}
          />
        </div>
      ) : null}
      {view === "safety" ? (
        <div className="flex-1 overflow-y-auto">
          <SafetySupport
            reply={safetyReply}
            showCounsellor={false}
            onCounsellor={() => {}}
          />
          <CounsellorCTA
            visible={showCounsellor}
            confirmed={counsellorConfirmed}
            alreadySubmitted={counsellorAlready}
            submitting={counsellorBusy}
            profile={profile}
            prompt={counsellorPrompt}
            onRequest={handleCounsellorRequest}
          />
        </div>
      ) : null}
      {view === "chat" ? (
        <>
          <ChatMessages messages={messages} loading={loading} status={status} />
          {composer}
        </>
      ) : null}
    </section>
  );
};

export default StudentSupportPanel;
