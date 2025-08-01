import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { useChatStore } from "./chatStore";

const MessageList: React.FC = () => {
  const { messages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto bg-gray-50">
      {/* Messages container with proper padding for mobile */}
      <div className="px-4 py-6 space-y-4 min-h-full">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;