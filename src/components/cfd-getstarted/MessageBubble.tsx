import React, { useState, useEffect } from "react";
import { Message } from "./types";
import { useChatStore } from "./chatStore";

interface MessageBubbleProps {
  message: Message;
}

const FormSection: React.FC<{ message: Message }> = ({ message }) => {
  const { updateFormField } = useChatStore();

  if (!message.formFields) return null;

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <div className="flex items-start space-x-2">
          <span className="text-blue-500">📝</span>
          <div className="text-blue-800 text-sm font-medium">
            {message.content}
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        {message.formFields.map((field) => (
          <div key={field.id}>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => updateFormField(message.id, field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00B7FF] focus:border-transparent"
              required={field.required}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(message.sender === "ai" && message.animate);

  useEffect(() => {
    if (message.sender === "ai" && message.animate) {
      // Typing animation for AI messages
      let index = 0;
      setDisplayedText("");
      setIsTyping(true);
      
      const interval = setInterval(() => {
        if (index < message.content.length) {
          setDisplayedText(message.content.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    } else {
      setDisplayedText(message.content);
      setIsTyping(false);
    }
  }, [message]);

  const isAI = message.sender === "ai";
  
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${isAI ? "flex-row" : "flex-row-reverse space-x-reverse"}`}>
        
        {/* Avatar for AI messages */}
        {isAI && (
          <div className="w-8 h-8 bg-[#00B7FF] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-sm font-bold">AI</span>
          </div>
        )}
        
        {/* Message bubble */}
        <div className={`px-4 py-3 rounded-2xl ${
          isAI 
            ? "bg-white text-black shadow-md border border-gray-100" 
            : "bg-[#00B7FF] text-white"
        } ${isAI ? "rounded-tl-md" : "rounded-tr-md"}`}>
          
          {/* Message content */}
          <div className="text-sm leading-relaxed">
            {message.type === "text" && (
              <span>{displayedText}</span>
            )}
            
            {message.type === "info_box" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500">💡</span>
                  <div className="text-blue-800 text-sm">
                    {displayedText}
                  </div>
                </div>
              </div>
            )}
            
            {message.type === "warning_box" && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-2">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500">⚠️</span>
                  <div className="text-orange-800 text-sm">
                    {displayedText}
                  </div>
                </div>
              </div>
            )}
            
            {message.type === "success_box" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                <div className="flex items-start space-x-2">
                  <span className="text-green-500">✅</span>
                  <div className="text-green-800 text-sm">
                    {displayedText}
                  </div>
                </div>
              </div>
            )}

            {message.type === "form" && (
              <FormSection message={message} />
            )}
          </div>
          
          {/* Buttons if any */}
          {message.buttons && message.buttons.length > 0 && (
            <div className="mt-3 space-y-2">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    button.type === "primary" 
                      ? "bg-[#00B7FF] text-white hover:bg-[#0066CC]"
                      : button.type === "link"
                      ? "bg-blue-50 text-[#00B7FF] hover:bg-blue-100 border border-blue-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex space-x-1 mt-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;