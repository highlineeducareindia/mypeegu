import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

const ChatMessages = ({ messages, status, loading }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, status]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
      {messages
        .filter((message) => message.text)
        .map((message) => (
          <ChatMessage key={message.id} role={message.role} text={message.text} />
        ))}
      {loading ? <TypingIndicator status={status} /> : null}
      <div ref={endRef} />
    </div>
  );
};

export default ChatMessages;
