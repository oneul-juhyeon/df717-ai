import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, UserData, ChatState } from './types';

interface ChatStore extends ChatState {
  addMessage: (message: Message) => void;
  setCurrentStep: (step: number) => void;
  updateUserData: (data: Partial<UserData>) => void;
  setShowChat: (show: boolean) => void;
  resetChat: () => void;
  initializeChat: () => void;
  startStep1: () => void;
  startStep2: () => void;
  startStep3: () => void;
  startStep4: () => void;
  startStep5: () => void;
  updateFormField: (messageId: string, fieldId: string, value: string) => void;
  submitUserForm: (messageId: string) => void;
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
      showChat: false,

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

      setShowChat: (show: boolean) => {
        set({ showChat: show });
      },

      resetChat: () => {
        set({
          messages: initialMessages,
          currentStep: 0,
          userData: initialUserData,
          showChat: false,
        });
      },

      initializeChat: () => {
        const welcomeMessages: Message[] = [
          {
            id: '1',
            content: '안녕하세요! AI 자동투자 체험을 도와드릴게요 😊',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          },
          {
            id: '2',
            content: '지금부터 단 10분이면 데모계좌를 개설하고 AI 투자를 체험하실 수 있어요.',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          }
        ];

        // Add messages with delay for better UX
        welcomeMessages.forEach((message, index) => {
          setTimeout(() => {
            set((state) => ({
              messages: [...state.messages, message]
            }));
          }, index * 1500);
        });

        // Add step 1 message after welcome messages
        setTimeout(() => {
          get().startStep1();
        }, welcomeMessages.length * 1500 + 1000);
      },

      startStep1: () => {
        const step1Message: Message = {
          id: 'step1',
          content: '1단계 ICMarkets 브로커 회원가입',
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
                  id: Date.now().toString(),
                  content: '회원가입 페이지를 열었어요',
                  sender: 'user',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false
                });
                setTimeout(() => {
                  get().startStep2();
                }, 500);
              }
            }
          ]
        };

        set((state) => ({
          messages: [...state.messages, step1Message],
          currentStep: 1
        }));
      },

      startStep2: () => {
        const step2Messages: Message[] = [
          {
            id: 'step2-1',
            content: '좋습니다! 이제 2단계로 넘어가겠습니다.',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          },
          {
            id: 'step2-2',
            content: 'ICMarkets에서 데모계좌 회원가입을 완료하신 후, 받으신 계정 정보를 입력해주세요.',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          }
        ];

        step2Messages.forEach((message, index) => {
          setTimeout(() => {
            set((state) => ({
              messages: [...state.messages, message]
            }));
          }, index * 1500);
        });

        setTimeout(() => {
          get().startStep3();
        }, step2Messages.length * 1500 + 1000);

        set({ currentStep: 2 });
      },

      startStep3: () => {
        const step3Message: Message = {
          id: 'step3',
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
                get().submitUserForm('step3');
              }
            }
          ]
        };

        set((state) => ({
          messages: [...state.messages, step3Message],
          currentStep: 3
        }));
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
        const { messages, userData } = get();
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
              id: Date.now().toString(),
              content: '모든 필수 항목을 입력해주세요.',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: true
            });
            return;
          }

          // Update user data
          get().updateUserData(formData);
          
          // Success message
          get().addMessage({
            id: Date.now().toString(),
            content: '정보가 성공적으로 저장되었습니다! 다음 단계로 진행하겠습니다.',
            sender: 'ai',
            type: 'success_box',
            timestamp: new Date(),
            animate: true
          });

          setTimeout(() => {
            if (messageId === 'step3') {
              get().startStep4();
            } else if (messageId === 'step4') {
              get().startStep5();
            }
          }, 1500);
        }
      },

      startStep4: () => {
        const step4Message: Message = {
          id: 'step4',
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
                get().submitUserForm('step4');
              }
            }
          ]
        };

        set((state) => ({
          messages: [...state.messages, step4Message],
          currentStep: 4
        }));
      },

      startStep5: () => {
        const step5Messages: Message[] = [
          {
            id: 'step5-1',
            content: '🎉 축하합니다! 모든 설정이 완료되었습니다.',
            sender: 'ai',
            type: 'success_box',
            timestamp: new Date(),
            animate: true,
          },
          {
            id: 'step5-2',
            content: '이제 DF717 AI가 자동으로 투자를 시작합니다. 실시간 수익 현황을 확인해보세요!',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: true,
          }
        ];

        step5Messages.forEach((message, index) => {
          setTimeout(() => {
            set((state) => ({
              messages: [...state.messages, message]
            }));
          }, index * 1500);
        });

        // Add final button after messages
        setTimeout(() => {
          const finalMessage: Message = {
            id: 'step5-final',
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
                  // Here you would navigate to the monitoring dashboard
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
          };

          set((state) => ({
            messages: [...state.messages, finalMessage],
            currentStep: 5
          }));
        }, step5Messages.length * 1500 + 1000);

        set({ currentStep: 5 });
      },
    }),
    {
      name: 'cfd-chat-storage',
      partialize: (state) => ({
        messages: state.messages,
        currentStep: state.currentStep,
        userData: state.userData,
        showChat: state.showChat,
      }),
    }
  )
);