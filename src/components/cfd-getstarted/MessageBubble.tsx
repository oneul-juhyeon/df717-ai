import React, { useState, useEffect, useCallback } from "react";
import { Message } from "./types";
import { useChatStore } from "./chatStore";

interface MessageBubbleProps {
  message: Message;
}

const FormSection: React.FC<{ message: Message }> = ({ message }) => {
  const { updateFormField } = useChatStore();

  if (!message.formFields) return null;

  return (
    <div className="space-y-4 w-full">
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start space-x-3">
          <span className="text-blue-500 text-lg">📝</span>
          <div className="text-blue-800 text-sm font-medium leading-relaxed">
            {message.content}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {message.formFields.map((field) => (
          <div key={field.id} className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => updateFormField(message.id, field.id, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#00B7FF] focus:border-transparent transition-all"
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
  const [isTyping, setIsTyping] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = useCallback((action: () => void) => {
    if (isButtonDisabled) return;
    
    setIsButtonDisabled(true);
    action();
    
    // Re-enable button after delay to prevent spam
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 2000);
  }, [isButtonDisabled]);

  useEffect(() => {
    // No more typewriter animation - just show content immediately
    setDisplayedText(message.content);
    setIsTyping(false);
  }, [message]);

  const isAI = message.sender === "ai";
  
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} w-full`}>
      <div className={`w-full max-w-[95%] sm:max-w-[90%] ${
        isAI ? "" : "flex justify-end"
      }`}>
        
        {/* Message bubble - wider and more spacious */}
        <div className={`px-6 py-4 rounded-2xl shadow-sm ${
          isAI 
            ? "bg-white text-gray-800 border border-gray-100 w-full" 
            : "bg-[#00B7FF] text-white max-w-[80%]"
        } ${isAI ? "rounded-tl-md" : "rounded-tr-md"}`}>
          
          {/* Message content */}
          <div className="text-sm leading-relaxed">
            {message.type === "text" && (
              <div className="whitespace-pre-wrap">
                {displayedText}
              </div>
            )}
            
            {message.type === "info_box" && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-500 text-lg">💡</span>
                  <div className="text-blue-800 text-sm font-medium leading-relaxed">
                    {displayedText}
                  </div>
                </div>
              </div>
            )}
            
            {message.type === "warning_box" && (
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-lg">⚠️</span>
                  <div className="text-orange-800 text-sm font-medium leading-relaxed">
                    {displayedText}
                  </div>
                </div>
              </div>
            )}
            
            {message.type === "success_box" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-lg">✅</span>
                  <div className="text-green-800 text-sm font-medium leading-relaxed">
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
            <div className="mt-4 space-y-3">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  disabled={isButtonDisabled}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    button.type === "primary" 
                      ? "bg-[#00B7FF] text-white hover:bg-[#0066CC] shadow-md hover:shadow-lg"
                      : button.type === "link"
                      ? "bg-blue-50 text-[#00B7FF] hover:bg-blue-100 border border-blue-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;