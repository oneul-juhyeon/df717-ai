import React, { useState, useEffect, useCallback } from "react";
import { Message } from "./types";
import { useChatStore } from "./chatStore";

interface MessageBubbleProps {
  message: Message;
}

const FormSection: React.FC<{ message: Message }> = ({ message }) => {
  const { updateFormField } = useChatStore();
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

  const handleInputChange = (fieldId: string, value: string) => {
    // Check if this is the Account ID field (assuming it has 'account' in the id or label)
    const field = message.formFields?.find(f => f.id === fieldId);
    if (field && (field.id.toLowerCase().includes('account') || field.label.toLowerCase().includes('account id'))) {
      // Only allow numbers for Account ID field
      const numericValue = value.replace(/\D/g, '');
      updateFormField(message.id, fieldId, numericValue);
    } else {
      updateFormField(message.id, fieldId, value);
    }
  };

  if (!message.formFields) return null;

  return (
    <div className="space-y-4 w-full">
      <div className="space-y-3">
        {message.formFields.map((field) => (
          <div key={field.id} className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required={field.required}
            />
          </div>
        ))}
      </div>

      {/* Form buttons */}
      {message.buttons && message.buttons.length > 0 && (
        <div className="space-y-2">
          {message.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button.action)}
              disabled={isButtonDisabled}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                button.type === "primary" 
                  ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md"
                  : button.type === "link"
                  ? "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 hover:border-blue-300"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif'
              }}
            >
              <span className="text-center leading-6 break-keep" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>{button.label}</span>
            </button>
          ))}
        </div>
      )}
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
  
  // Step titles should be rendered completely outside chat bubbles
  if (message.type === "text" && displayedText.match(/\d+단계/)) {
    const stepNumber = displayedText.match(/(\d+)단계/)?.[1];
    const stepText = displayedText.replace(/\d+단계:\s*/, '');
    
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full">
          <div className="bg-blue-50 rounded-lg px-4 py-4 mx-2 mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {stepNumber}
              </div>
              <div className="text-blue-800 font-semibold text-left flex-1 leading-6 break-keep word-break-keep" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
                {stepText}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Info boxes (파란색) - 채팅 버블 밖으로 완전히 분리
  if (message.type === "info_box") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          <div className="bg-blue-50 rounded-lg px-4 py-4 my-2 border-l-4 border-blue-400">
            <div className="text-blue-800 text-sm leading-7 text-left break-keep word-break-keep whitespace-pre-wrap" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {displayedText.split('**').map((part, index) => 
                index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Warning boxes (주황색) - 채팅 버블 밖으로 완전히 분리
  if (message.type === "warning_box") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          <div className="bg-orange-50 rounded-lg px-4 py-4 my-2 border-l-4 border-orange-400">
            <div className="text-orange-800 text-sm leading-7 font-medium text-left break-keep word-break-keep whitespace-pre-wrap" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {displayedText.split('**').map((part, index) => 
                index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Action buttons - 완전히 독립적인 버튼 (채팅 버블과 분리)
  if (message.type === "action_button") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          {message.buttons && message.buttons.length > 0 && (
            <div className="space-y-3">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  disabled={isButtonDisabled}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    button.type === "primary" 
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md"
                      : button.type === "link"
                      ? "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 hover:border-blue-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif'
                  }}
                >
                  <span className="text-center leading-6 break-keep" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>{button.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Success boxes (초록색) - 채팅 버블 밖으로 완전히 분리
  if (message.type === "success_box") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          <div className="bg-green-50 rounded-lg px-4 py-3 my-2 border-l-4 border-green-400">
            <div className="text-green-800 text-sm leading-relaxed font-medium text-left break-keep word-break-keep whitespace-pre-wrap" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>
              {displayedText.split('**').map((part, index) => 
                index % 2 === 1 ? <strong key={index} className="font-semibold">{part}</strong> : part
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Account settings table - 계좌 설정 테이블
  if (message.type === "account_settings") {
    const settings = [
      { label: "Platform", value: "MetaTrader 4" },
      { label: "Account Type", value: "Raw Spread" },
      { label: "Currency", value: "USD" },
      { label: "Leverage", value: "1:1000" },
      { label: "Initial Deposit", value: "25000" }
    ];

    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden my-2 shadow-sm">
            <div className="bg-blue-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-blue-800 font-semibold text-sm">계좌 설정</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {settings.map((setting, index) => (
                <div key={index} className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 text-sm font-medium">{setting.label}</span>
                  <span className="text-gray-900 text-sm font-semibold">{setting.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Final cards layout - 2x2 grid of card buttons
  if (message.type === "final_cards") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mt-12">
          {message.buttons && message.buttons.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  disabled={isButtonDisabled}
                  className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-300"
                >
                  <div className="flex flex-col items-start text-left space-y-2">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors font-din">
                      {button.label}
                    </div>
                    {button.description && (
                      <div className="text-xs text-gray-600 leading-relaxed font-din">
                        {button.description}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Form messages - 채팅 버블 밖으로 완전히 분리
  if (message.type === "form") {
    return (
      <div className={`flex w-full justify-start transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="w-full mx-2">
          <FormSection message={message} />
        </div>
      </div>
    );
  }
  
  return (
    <div className={`flex w-full ${isAI ? 'justify-start' : 'justify-end'} transform transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="max-w-[90%]">
        
        {/* WhatsApp-style chat bubble - AI left, User right with improved mobile spacing */}
        <div className={`px-4 py-4 sm:py-3 rounded-2xl transition-all duration-300 ${
          isAI 
            ? "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md hover:shadow-md" 
            : "bg-blue-500 text-white rounded-br-md"
        }`}>
          
          {/* Message content with enhanced typography and better mobile text size */}
          <div className="text-left leading-relaxed">
            {message.type === "text" && (
              <div className="whitespace-pre-wrap">
                <div className="text-sm sm:text-sm text-left leading-6">
                  {displayedText}
                </div>
              </div>
            )}
          </div>
          
          {/* Enhanced buttons with better styling */}
          {message.buttons && message.buttons.length > 0 && (
            <div className="mt-4 space-y-3">
              {message.buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(button.action)}
                  disabled={isButtonDisabled}
                  className={`w-full flex items-center justify-center px-4 py-4 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                    button.type === "primary" 
                      ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md"
                      : button.type === "link"
                      ? "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 hover:border-blue-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard", "Noto Sans KR", sans-serif'
                  }}
                >
                  <span className="text-center leading-6 break-keep" style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}>{button.label}</span>
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