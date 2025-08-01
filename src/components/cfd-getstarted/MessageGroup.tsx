import React from "react";
import MessageBubble from "./MessageBubble";
import { Message } from "./types";

interface MessageGroupProps {
  messages: Message[];
}

const MessageGroup: React.FC<MessageGroupProps> = ({ messages }) => {
  return (
    <div className="animate-fade-in space-y-3">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageGroup;