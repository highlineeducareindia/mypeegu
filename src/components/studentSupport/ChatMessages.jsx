import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

const ChatMessages = ({ messages, status, loading, inactivityPrompt }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, status, inactivityPrompt]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages
        .filter((message) => message.text)
        .map((message) => (
          <ChatMessage key={message.id} role={message.role} text={message.text} />
        ))}
      {loading ? <TypingIndicator status={status} /> : null}
      {!loading && inactivityPrompt ? (
        <p className="text-center text-xs font-medium text-slate-400 py-1 opacity-80">
          {inactivityPrompt}
        </p>
      ) : null}
      <div ref={endRef} />
    </div>
  );
};

export default ChatMessages;
