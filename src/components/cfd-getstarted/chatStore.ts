import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, UserData, ChatState } from './types';

interface ChatStore extends ChatState {
  addMessage: (message: Message) => void;
  setCurrentStep: (step: number) => void;
  updateUserData: (data: Partial<UserData>) => void;
  resetChat: () => void;
  initializeChat: () => void;
  proceedToStep: (step: number) => void;
  updateFormField: (messageId: string, fieldId: string, value: string) => void;
  submitUserForm: (messageId: string) => void;
  setProcessing: (processing: boolean) => void;
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
      currentStep: 0,
      userData: initialUserData,
      isProcessing: false,

      addMessage: (message: Message) => {
        set((state) => ({
          messages: [...state.messages, message]
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
          currentStep: 0,
          userData: initialUserData,
          isProcessing: false,
        });
      },

      initializeChat: () => {
        // Reset first to ensure clean state
        get().resetChat();
        
        const welcomeMessages: Message[] = [
          {
            id: 'welcome-1',
            content: '안녕하세요! AI 자동투자 체험을 도와드릴게요 😊',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          },
          {
            id: 'welcome-2',
            content: '지금부터 단 10분이면 데모계좌를 개설하고 AI 투자를 체험하실 수 있어요.',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          }
        ];

        // Add welcome messages immediately
        set({ messages: welcomeMessages });
        
        // Add step 1 message after a brief delay
        setTimeout(() => {
          get().proceedToStep(1);
        }, 2000);
      },

      proceedToStep: (step: number) => {
        const { isProcessing } = get();
        
        // Prevent multiple simultaneous calls
        if (isProcessing) return;
        
        set({ isProcessing: true });

        switch (step) {
          case 1:
            get().addMessage({
              id: 'step-1',
              content: '1단계: ICMarkets 브로커 회원가입',
              sender: 'ai',
              type: 'info_box',
              timestamp: new Date(),
              animate: true,
              buttons: [
                {
                  label: 'ICMarkets 회원가입 홈페이지 열기',
                  type: 'link',
                  action: () => {
                    window.open('https://www.icmarkets.com/global/ko/open-trading-account/demo/?camp=83293', '_blank');
                  }
                },
                {
                  label: '회원가입 페이지를 열었어요',
                  type: 'primary',
                  action: () => {
                    get().addMessage({
                      id: `user-response-${Date.now()}`,
                      content: '회원가입 페이지를 열었어요',
                      sender: 'user',
                      type: 'text',
                      timestamp: new Date(),
                      animate: false
                    });
                    
                    setTimeout(() => {
                      get().proceedToStep(2);
                    }, 1000);
                  }
                }
              ]
            });
            set({ currentStep: 1, isProcessing: false });
            break;

          case 2:
            get().addMessage({
              id: 'step-2-1',
              content: '좋습니다! 이제 2단계로 넘어가겠습니다.',
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: true,
            });
            
            setTimeout(() => {
              get().addMessage({
                id: 'step-2-2',
                content: 'ICMarkets에서 데모계좌 회원가입을 완료하신 후, 받으신 계정 정보를 입력해주세요.',
                sender: 'ai',
                type: 'text',
                timestamp: new Date(),
                animate: true,
              });
              
              setTimeout(() => {
                get().proceedToStep(3);
              }, 2000);
            }, 1500);
            
            set({ currentStep: 2, isProcessing: false });
            break;

          case 3:
            get().addMessage({
              id: 'step-3',
              content: '3단계: 회원정보 입력',
              sender: 'ai',
              type: 'form',
              timestamp: new Date(),
              animate: true,
              formFields: [
                {
                  id: 'firstName',
                  label: '이름',
                  type: 'text',
                  placeholder: '이름을 입력하세요',
                  required: true,
                  value: ''
                },
                {
                  id: 'lastName',
                  label: '성',
                  type: 'text',
                  placeholder: '성을 입력하세요',
                  required: true,
                  value: ''
                },
                {
                  id: 'email',
                  label: '이메일',
                  type: 'email',
                  placeholder: 'example@email.com',
                  required: true,
                  value: ''
                },
                {
                  id: 'phone',
                  label: '전화번호',
                  type: 'tel',
                  placeholder: '010-1234-5678',
                  required: true,
                  value: ''
                }
              ],
              buttons: [
                {
                  label: '입력 완료',
                  type: 'primary',
                  action: () => {
                    get().submitUserForm('step-3');
                  }
                }
              ]
            });
            set({ currentStep: 3, isProcessing: false });
            break;

          case 4:
            get().addMessage({
              id: 'step-4',
              content: '4단계: ICMarkets 계정 정보 입력',
              sender: 'ai',
              type: 'form',
              timestamp: new Date(),
              animate: true,
              formFields: [
                {
                  id: 'accountId',
                  label: '계정 ID (Login)',
                  type: 'text',
                  placeholder: 'ICMarkets에서 받은 계정 ID',
                  required: true,
                  value: ''
                },
                {
                  id: 'password',
                  label: '비밀번호',
                  type: 'text',
                  placeholder: 'ICMarkets 계정 비밀번호',
                  required: true,
                  value: ''
                },
                {
                  id: 'server',
                  label: '서버',
                  type: 'text',
                  placeholder: 'ICMarkets-Demo02 (예시)',
                  required: true,
                  value: ''
                }
              ],
              buttons: [
                {
                  label: '계정 연결하기',
                  type: 'primary',
                  action: () => {
                    get().submitUserForm('step-4');
                  }
                }
              ]
            });
            set({ currentStep: 4, isProcessing: false });
            break;

          case 5:
            get().addMessage({
              id: 'step-5-1',
              content: '🎉 축하합니다! 모든 설정이 완료되었습니다.',
              sender: 'ai',
              type: 'success_box',
              timestamp: new Date(),
              animate: true,
            });
            
            setTimeout(() => {
              get().addMessage({
                id: 'step-5-2',
                content: '이제 DF717 AI가 자동으로 투자를 시작합니다. 실시간 수익 현황을 확인해보세요!',
                sender: 'ai',
                type: 'text',
                timestamp: new Date(),
                animate: true,
              });
              
              setTimeout(() => {
                get().addMessage({
                  id: 'step-5-final',
                  content: 'AI 투자 모니터링 시작',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: true,
                  buttons: [
                    {
                      label: '실시간 수익 확인하기',
                      type: 'primary',
                      action: () => {
                        window.open('/df717', '_blank');
                      }
                    },
                    {
                      label: '새로운 체험 시작',
                      type: 'secondary',
                      action: () => {
                        get().resetChat();
                        get().initializeChat();
                      }
                    }
                  ]
                });
              }, 1500);
            }, 1500);
            
            set({ currentStep: 5, isProcessing: false });
            break;

          default:
            set({ isProcessing: false });
        }
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
        
        // Prevent multiple submissions
        if (isProcessing) return;
        
        set({ isProcessing: true });
        
        const formMessage = messages.find(m => m.id === messageId);
        
        if (formMessage && formMessage.formFields) {
          const formData: any = {};
          formMessage.formFields.forEach(field => {
            formData[field.id] = field.value;
          });

          // Validation
          const requiredFields = formMessage.formFields.filter(f => f.required);
          const missingFields = requiredFields.filter(f => !f.value.trim());
          
          if (missingFields.length > 0) {
            get().addMessage({
              id: `warning-${Date.now()}`,
              content: '모든 필수 항목을 입력해주세요.',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: true
            });
            set({ isProcessing: false });
            return;
          }

          // Update user data
          get().updateUserData(formData);
          
          // Success message
          get().addMessage({
            id: `success-${Date.now()}`,
            content: '정보가 성공적으로 저장되었습니다! 다음 단계로 진행하겠습니다.',
            sender: 'ai',
            type: 'success_box',
            timestamp: new Date(),
            animate: true
          });

          setTimeout(() => {
            if (messageId === 'step-3') {
              get().proceedToStep(4);
            } else if (messageId === 'step-4') {
              get().proceedToStep(5);
            } else {
              set({ isProcessing: false });
            }
          }, 2000);
        } else {
          set({ isProcessing: false });
        }
      },
    }),
    {
      name: 'cfd-chat-storage',
      partialize: (state) => ({
        messages: state.messages,
        currentStep: state.currentStep,
        userData: state.userData,
      }),
    }
  )
);