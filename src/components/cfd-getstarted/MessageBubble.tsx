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
    <div className="space-y-3 w-full">
      <div className="bg-blue-50 rounded-lg px-4 py-3 my-2">
        <div className="text-blue-800 text-sm leading-relaxed">
          {message.content}
        </div>
      </div>
      
      <div className="space-y-3">
        {message.formFields.map((field) => (
          <div key={field.id} className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => updateFormField(message.id, field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
  const [isVisible, setIsVisible] = useState(false);

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
    // Start animation immediately
    setIsVisible(true);
    setDisplayedText(message.content);
    setIsTyping(false);
  }, [message]);

  const isAI = message.sender === "ai";
  
  return (
    <div className={`flex w-full ${isAI ? 'justify-start' : 'justify-end'} transform transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="max-w-[90%]">
        
        {/* WhatsApp-style chat bubble - AI left, User right */}
        <div className={`px-4 py-3 rounded-2xl transition-all duration-300 ${
          isAI 
            ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md hover:shadow-md" 
            : "bg-blue-500 text-white rounded-br-md"
        }`}>
          
          {/* Message content with enhanced typography */}
          <div className="text-left leading-relaxed">
            {message.type === "text" && (
              <div className="whitespace-pre-wrap">
                {/* Enhanced typography for step titles */}
                {displayedText.includes('단계:') ? (
                  <div className="text-base font-bold text-blue-600 mb-1">
                    {displayedText}
                  </div>
                ) : (
                  <div className="text-sm">
                    {displayedText}
                  </div>
                )}
              </div>
            )}
            
            {message.type === "info_box" && (
              <div className="bg-blue-50 rounded-lg px-4 py-3 my-2 border-l-4 border-blue-400">
                <div className="text-blue-800 text-sm leading-relaxed">
                  <strong className="font-semibold">
                    {displayedText.split('?')[0]}?
                  </strong>
                  {displayedText.includes('?') && (
                    <span className="ml-1">
                      {displayedText.split('?')[1]}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            {message.type === "warning_box" && (
              <div className="bg-orange-50 rounded-lg px-4 py-3 my-2 border-l-4 border-orange-400">
                <div className="text-orange-800 text-sm leading-relaxed font-medium whitespace-pre-wrap">
                  {displayedText}
                </div>
              </div>
            )}
            
            {message.type === "success_box" && (
              <div className="bg-green-50 rounded-lg px-4 py-3 my-2 border-l-4 border-green-400">
                <div className="text-green-800 text-sm leading-relaxed font-medium">
                  {displayedText}
                </div>
              </div>
            )}

            {message.type === "form" && (
              <FormSection message={message} />
            )}
          </div>
          
          {/* Enhanced buttons with better styling */}
          {message.buttons && message.buttons.length > 0 && (
            <div className="mt-4 space-y-2">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  disabled={isButtonDisabled}
                  className={`w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    button.type === "primary" 
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md"
                      : button.type === "link"
                      ? "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 hover:border-blue-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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