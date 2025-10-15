import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { useChatStore as defaultUseChatStore } from "./chatStore";
import { Message } from "./types";

interface MessageListProps {
  useChatStore?: any;
}

const MessageList: React.FC<MessageListProps> = ({ useChatStore }) => {
  const useStore = useChatStore || defaultUseChatStore;
  const { messages } = useStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto bg-gray-50 px-4">
      {/* Messages container with better spacing and mobile vertical centering */}
      <div className="py-6 space-y-4 min-h-full flex flex-col justify-start">
        {messages.reduce((groups, message, index) => {
          // Group messages that appear together (same groupId or consecutive AI messages)
          const prevMessage = messages[index - 1];
          const shouldStartNewGroup = !prevMessage || 
            message.sender !== prevMessage.sender ||
            (message.groupId && message.groupId !== prevMessage.groupId) ||
            (!message.groupId && !prevMessage.groupId && message.sender === 'ai' && prevMessage.sender === 'ai');

          if (shouldStartNewGroup) {
            groups.push([message]);
          } else {
            groups[groups.length - 1].push(message);
          }
          return groups;
        }, [] as Message[][]).map((messageGroup, groupIndex) => (
          <div 
            key={`group-${groupIndex}`} 
            className="animate-fade-in space-y-2"
            style={{
              animationDelay: `${groupIndex * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            {messageGroup.map((message) => (
              <MessageBubble key={message.id} message={message} useChatStore={useStore} />
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;