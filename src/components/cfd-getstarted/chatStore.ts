import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, MessageGroup, UserData, ChatState } from './types';

interface ChatStore extends ChatState {
  addMessage: (message: Message) => void;
  addMessageGroup: (messages: Message[]) => void;
  setCurrentStep: (step: number) => void;
  updateUserData: (data: Partial<UserData>) => void;
  resetChat: () => void;
  initializeChat: () => void;
  proceedToStep: (step: number) => void;
  updateFormField: (messageId: string, fieldId: string, value: string) => void;
  submitUserForm: (messageId: string) => void;
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

      addMessage: (message: Message) => {
        set((state) => {
          // Check for duplicate messages by ID to prevent duplication
          const messageExists = state.messages.some(m => m.id === message.id);
          if (messageExists) {
            return state; // Don't add if already exists
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
        });
      },

      initializeChat: () => {
        // Reset first to ensure clean state
        get().resetChat();
        
        // Add first welcome message after 800ms
        setTimeout(() => {
          get().addMessage({
            id: 'welcome-1',
            content: '안녕하세요! AI 자동투자 체험을 도와드릴게요 😊',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: false,
          });
          
          // Add second welcome message after 800ms
          setTimeout(() => {
            get().addMessage({
              id: 'welcome-2',
              content: '지금부터 단 10분이면 데모계좌를 개설하고 AI 투자를 체험하실 수 있어요.',
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false,
            });
            
            // Start step 1 after 1000ms
            setTimeout(() => {
              get().proceedToStep(1);
            }, 1000);
          }, 800);
        }, 800);
      },

      proceedToStep: (step: number) => {
        const { isProcessing, isStepExecuted } = get();
        
        // Prevent multiple simultaneous calls or re-execution of same step
        if (isProcessing || isStepExecuted(step)) return;
        
        set({ isProcessing: true });
        get().markStepExecuted(step);

        // Wait 800ms before showing step content
        setTimeout(() => {
          switch (step) {
            // STEP 1: 계좌 신청하기
            case 1:
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
                  id: 'step-1-intro',
                  content: '첫 번째로, ICMarkets에서 계좌 신청을 해볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-info',
                  content: '브로커란? 우리나라에서 주식거래를 하기 위해 증권사에 계좌를 개설하거나, 코인거래를 하기 위해 거래소에 가입하는 것과 같아요. 그중에서도 ICMarkets는 글로벌 1위로 가장 신뢰할 수 있는 Tier-1 브로커예요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-critical-warning',
                  content: "⚠️ 중요! 이름과 성은 꼭 영어로 작성해주세요.\n\n예시) 김자동 → First Name: Jadong, Last Name: Kim",
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-1-action',
                  content: '계좌 신청 페이지에서 필요한 정보를 정확히 입력하고 완료해주세요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'ICMarkets 계좌 신청 홈페이지 열기 →',
                      type: 'link',
                      action: () => {
                        window.open('https://www.icmarkets.com/global/ko/open-trading-account/demo/?camp=83293', '_blank');
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

            // STEP 2: 이메일 인증 및 비밀번호 설정
            case 2:
              get().addMessageGroup([
                {
                  id: 'step-2-title',
                  content: '2단계: 이메일 인증 및 비밀번호 설정',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-intro',
                  content: '잘하셨어요! 이제 이메일을 확인해주세요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-email',
                  content: '📧 메일에서 "Secure Client Area" 버튼을 클릭하면 비밀번호 설정 페이지로 이동해요.\n비밀번호를 설정하시면 계좌 신청이 완료됩니다!',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-tip',
                  content: '💡 Tip! 메일이 안 보이나요?\n스팸함도 확인해보세요. ICMarkets 메일이 가끔 스팸으로 분류될 수 있어요.',
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
                      label: '비밀번호 설정을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '비밀번호 설정을 완료했어요',
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

            case 3:
              get().addMessageGroup([
                {
                  id: 'step-3-title',
                  content: '3단계: 로그인하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-intro',
                  content: '좋아요! 이제 다시 ICMarkets에 로그인해볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'ICMarkets 로그인 페이지로 이동 →',
                      type: 'link',
                      action: () => {
                        window.open('https://secure.icmarkets.com/Account/LogOn', '_blank');
                      }
                    }
                  ]
                },
                {
                  id: 'step-3-info',
                  content: '🔐 방금 가입하신 이메일과 비밀번호로 로그인해주세요.',
                  sender: 'ai',
                  type: 'info_box',
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
                          get().proceedToStep(4);
                        }, 800);
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 3, isProcessing: false });
              break;

            // STEP 4: 계좌 설정하기
            case 4:
              get().addMessageGroup([
                {
                  id: 'step-4-title',
                  content: '4단계: 데모계좌 개설하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-intro',
                  content: '이제 AI 투자를 체험할 데모계좌를 만들어볼게요!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-steps',
                  content: '📌 로그인 후 다음 순서로 진행해주세요: Account 탭 → Demo Account → \'Open New Demo Account\' 버튼 클릭',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-safety',
                  content: '💰 안심하세요! 데모계좌는 가상의 돈으로 거래하는 연습계좌예요. 실제 돈이 들어가지 않으니 부담없이 체험하실 수 있어요.',
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
                      label: '데모계좌 개설 버튼을 눌렀어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '데모계좌 개설 버튼을 눌렀어요',
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

            // STEP 5: 계좌 개설 완료
            case 5:
              get().addMessageGroup([
                {
                  id: 'step-5-title',
                  content: '5단계: 계좌 설정하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-intro',
                  content: '아래 설정과 정확히 동일하게 계좌를 개설해주세요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-settings',
                  content: '',
                  sender: 'ai',
                  type: 'account_settings',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-warning',
                  content: '⚠️ 주의! 계좌설정이 다르면 AI 프로그램이 작동하지 않아요. 꼭 위의 설정대로 만들어주세요!',
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
                      label: '설정대로 계좌를 개설했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '설정대로 계좌를 개설했어요',
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

            // STEP 6: 계좌 정보 입력
            case 6:
              get().addMessageGroup([
                {
                  id: 'step-6-title',
                  content: '6단계: 완료!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-congrats',
                  content: '축하해요! 데모계좌 개설이 완료되었어요 🎉',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-ready',
                  content: '✅ AI 자동투자를 체험할 준비가 모두 끝났어요!',
                  sender: 'ai',
                  type: 'success_box',
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
                      label: '프로그램 시작 요청하기',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '프로그램 시작 요청하기',
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

            // STEP 7: FINAL FORM
            case 7:
              get().addMessageGroup([
                {
                  id: 'step-7-title',
                  content: '7단계: 프로그램 시작 요청',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-intro',
                  content: 'AI 자동투자 프로그램 시작을 위해 계좌 정보를 입력해주세요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-account-info',
                  content: '📋 Account 페이지에서 다음 정보를 확인할 수 있어요.\n• Account ID (계좌번호)\n• Password (비밀번호)\n• Server (서버명)',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-security',
                  content: '🔒 **안심하세요!**\n브로커 홈페이지 로그인 정보와 거래 계좌 정보는 완전히 다른 거예요.\n계좌 정보는 **AI 프로그램 연동에만** 사용됩니다.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-form',
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
                         get().submitUserForm('step-7-form');
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 7, isProcessing: false });
              break;

            // FINAL COMPLETION
            case 8:
              get().addMessageGroup([
                {
                  id: 'final-celebration',
                  content: '🎊 프로그램 운용이 시작되면 매니저를 통해 전달해드릴게요! 시작해보아요!',
                  sender: 'ai',
                  type: 'success_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'final-info',
                  content: '이제 AI 자동투자의 놀라운 성과를 직접 체험해보세요. 더 자세한 정보는 아래 버튼을 통해 확인하실 수 있어요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'final-buttons',
                  content: 'AI 투자 체험 완료!',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: 'DF717 소개',
                      type: 'primary',
                      action: () => {
                        window.open('/df717', '_blank');
                      }
                    },
                    {
                      label: '실시간 수익률',
                      type: 'primary',
                      action: () => {
                        window.open('/df717', '_blank');
                      }
                    },
                    {
                      label: '백테스트 결과',
                      type: 'primary',
                      action: () => {
                        window.open('/df717', '_blank');
                      }
                    },
                    {
                      label: '처음으로',
                      type: 'secondary',
                      action: () => {
                        get().resetChat();
                        get().initializeChat();
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 8, isProcessing: false });
              break;

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
              animate: false
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
            animate: false
          });

          setTimeout(() => {
            if (messageId === 'step-7-form') {
              get().proceedToStep(8);
            } else {
              set({ isProcessing: false });
            }
          }, 800);
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
        executedSteps: Array.from(state.executedSteps), // Convert Set to Array for persistence
      }),
      onRehydrateStorage: () => (state) => {
        if (state && Array.isArray(state.executedSteps)) {
          // Convert Array back to Set after rehydration
          state.executedSteps = new Set(state.executedSteps);
        }
      },
    }
  )
);