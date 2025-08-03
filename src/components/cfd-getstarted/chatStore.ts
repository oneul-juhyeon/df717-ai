import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/integrations/supabase/client';
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
        
        console.log(`Attempting to proceed to step ${step}, isProcessing: ${isProcessing}, isStepExecuted: ${isStepExecuted(step)}`);
        
        // Prevent multiple simultaneous calls or re-execution of same step
        if (isProcessing || isStepExecuted(step)) {
          console.log(`Step ${step} blocked - isProcessing: ${isProcessing}, isStepExecuted: ${isStepExecuted(step)}`);
          return;
        }
        
        set({ isProcessing: true });
        get().markStepExecuted(step);
        
        console.log(`Proceeding to step ${step}`);

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
                  content: '**브로커란?**\n\n주식거래를 하기 위해 증권사에 계좌를 개설하거나, 코인거래를 하기 위해 거래소에 가입하는 것처럼, CFD거래를 위해서도 이런 중개 플랫폼이 필요해요.\n\n그 중에서도 **ICMarkets**은 전 세계 트레이더들에게 신뢰받고 있는 **Tier-1 브로커** 중 하나예요.',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-critical-warning',
                  content: "⚠️ **중요!**\n\n이름과 성은 꼭 **영어로** 작성해주세요.\n예시) 김자동 → First Name: **Jadong**, Last Name: **Kim**",
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
                  content: '📧 메일에서 **"Secure Client Area"** 버튼을 클릭하면\n비밀번호 설정 페이지로 이동해요.\n\n비밀번호를 설정하시면 **계좌 신청이 완료**됩니다!',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-tip',
                  content: '💡 **Tip!**\n메일이 안 보이나요?\n\n**스팸함**도 확인해보세요. **ICMarkets** 메일이 가끔 스팸으로 분류될 수 있어요.',
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
                  content: '🔐 방금 가입하신 **이메일과 비밀번호**로 로그인해주세요.',
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
                  content: '📌 **로그인 후 다음 순서로 진행해주세요:**\n\n**Account** 탭 → **Demo Account** → **"Open New Demo Account"** 버튼 클릭',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-safety',
                  content: '💰 **안심하세요!**\n\n**데모계좌**는 가상의 돈으로 거래하는 연습계좌예요. 실제 돈이 들어가지 않으니 부담없이 체험하실 수 있어요.',
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
                  content: '⚠️ **주의!**\n\n계좌설정이 다르면 **AI 프로그램이 작동하지 않아요**.\n꼭 위의 설정대로 만들어주세요!',
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

            // STEP 6: Account Information Form (이전 Step 7을 Step 6으로 변경)
            case 6:
              get().addMessageGroup([
                {
                  id: 'step-6-title',
                  content: '6단계: 프로그램 시작 요청하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-celebration',
                  content: '축하해요! 데모계좌 개설이 완료되었어요🎉',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-intro',
                  content: 'AI 자동투자 프로그램 시작을 위해 계좌 정보를 입력해주세요',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-account-info',
                  content: '📋 **Account 페이지에서 다음 정보를 확인할 수 있어요:**\n\n• **Account ID** (계좌번호)\n• **Password** (비밀번호)\n• **Server** (서버명)',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-security',
                  content: '🔒 **안심하세요!**\n\n브로커 홈페이지 로그인 정보와 거래 계좌 정보는 **완전히 다른 거**예요.\n\n계좌 정보는 **AI 프로그램 연동에만** 사용됩니다.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-form',
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
                        get().submitUserForm('step-6-form');
                      }
                    }
                  ]
                }
              ]);
              
              set({ currentStep: 6, isProcessing: false });
              break;

            // STEP 7: MetaTrader 4 App Installation (이전 Step 8을 Step 7로 변경)
            case 7:
              get().addMessageGroup([
                {
                  id: 'step-7-title',
                  content: '7단계: MetaTrader 4 앱 설치하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-intro',
                  content: '그동안 투자 결과를 실시간으로 확인할 수 있는 앱을 설치해볼게요!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-info',
                  content: '💡 **MetaTrader 4란?**\n\n쉽게 말해서 **토스**라고 보면 돼요. 하나의 앱에 모든 은행 계좌를 연결하고 한 곳에서 볼 수 있는 것처럼, **MetaTrader 4**는 여러 브로커의 거래 계좌를 한 앱에서 관리하고 실시간으로 확인할 수 있어요.',
                  sender: 'ai',
                  type: 'info_box',
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
                      label: '안드로이드 앱 다운로드 →',
                      type: 'link',
                      action: () => {
                        window.open('https://play.google.com/store/search?q=metatrader%204&c=apps&hl=ko', '_blank');
                      }
                    },
                    {
                      label: '아이폰 앱 다운로드 →',
                      type: 'link',
                      action: () => {
                        window.open('https://apps.apple.com/kr/app/metatrader-4/id496212596', '_blank');
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

            // STEP 8: MetaTrader 4 Login (이전 Step 9를 Step 8로 변경)
            case 8:
              const { userData } = get();
              get().addMessageGroup([
                {
                  id: 'step-8-title',
                  content: '8단계: MetaTrader 4 로그인하기',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-intro',
                  content: '설치한 MetaTrader 4 앱에 방금 생성한 계좌로 로그인해볼게요.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-instructions',
                  content: '📱 **MetaTrader 4 앱에서 로그인 방법:**\n\n1. 우측 하단 ⚙️ **세팅** 클릭\n2. **새 계좌** 클릭\n3. **기존 계좌로 로그인** 클릭\n4. 서버 검색해서 선택\n5. 로그인, 비밀번호 입력 후 **로그인** 클릭',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-userdata',
                  content: `📋 **입력할 정보** (앞서 생성한 계좌 정보):\n\n• **서버:** ${userData.server || '[서버 정보 없음]'}\n• **로그인 (계좌번호):** ${userData.accountId || '[계좌번호 없음]'}\n• **비밀번호:** ${userData.password || '[비밀번호 없음]'}`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-tip',
                  content: '💡 **Tip!**\n서버 이름이 정확히 보이지 않으면 검색창에 **"ICMarkets"**라고 입력해서 찾아보세요.\n\n⚠️ 로그인이 안 된다면 계좌 활성화까지 **몇 분 정도 걸릴 수 있어요**.',
                  sender: 'ai',
                  type: 'warning_box',
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
                      label: '로그인을 완료했어요',
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: '로그인을 완료했어요',
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

            // STEP 9: Final Monitoring (이전 Step 10을 Step 9로 변경)
            case 9:
              get().addMessageGroup([
                {
                  id: 'step-9-title',
                  content: '✨ 모니터링 시작!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-success',
                   content: '✅ **모든 설정이 완료되었습니다!**\n\n• **데모계좌 개설** 완료\n• **AI 프로그램 연동 신청** 완료\n• **모니터링 앱 설치** 완료',
                   sender: 'ai',
                   type: 'success_box',
                   timestamp: new Date(),
                   animate: false,
                 },
                {
                  id: 'step-9-intro',
                  content: '축하합니다! 이제 실시간으로 거래 내역과 수익률을 확인하실 수 있어요.\n프로그램 운용이 시작되면 매니저를 통해 전달해드릴게요!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                }
                ]);
                
                // 800ms 지연 후 두 번째 메시지 추가
                setTimeout(() => {
                  set(state => ({
                    messages: [...state.messages, {
                      id: 'step-9-additional-info',
                      content: '더 자세한 정보는 아래 버튼을 통해 확인하실 수 있어요.',
                      sender: 'ai',
                      type: 'text',
                      timestamp: new Date(),
                      animate: true,
                    }]
                  }));
                  
                  // 추가 지연 후 버튼 표시
                  setTimeout(() => {
                    set(state => ({
                      messages: [...state.messages, {
                        id: 'final-buttons',
                        content: '',
                        sender: 'ai',
                        type: 'final_cards',
                        timestamp: new Date(),
                        animate: false,
                        buttons: [
                          {
                            label: '🏠 DF717 소개',
                            description: '우리가 누구인지 알아보기',
                            type: 'card',
                            action: () => {
                              window.open('https://www.df717.ai/', '_blank');
                            }
                          },
                          {
                            label: '📊 실시간 수익률',
                            description: '8.3년 검증된 실계좌',
                            type: 'card',
                            action: () => {
                              window.open('https://aiwow.notion.site/DF717-LIVE-ACCOUNT-20dc67e3da6880dfbc4cefa57ae38bf7', '_blank');
                            }
                          },
                          {
                            label: '📈 백테스트 결과',
                            description: '20년 검증, 65.9% 수익률',
                            type: 'card',
                            action: () => {
                              window.open('https://aiwow.notion.site/DF717-Backtest-20fc67e3da68809780c0f8302bfc12bf', '_blank');
                            }
                          },
                          {
                            label: '🔄 처음으로',
                            description: '첫 화면으로 돌아가기',
                            type: 'card',
                            action: () => {
                              get().resetChat();
                              get().initializeChat();
                            }
                          }
                        ]
                      }]
                    }));
                  }, 400);
                }, 800);
                
                set({ currentStep: 9, isProcessing: false });
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
              content: '⚠️ **모든 필수 항목을 입력해주세요.**',
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
          
          // Save to database if this is the step 6 form
          const saveToDatabase = async () => {
            if (messageId === 'step-6-form') {
              try {
                const sessionId = crypto.getRandomValues(new Uint32Array(1))[0].toString(36);
                
                const { error } = await supabase
                  .from('user_accounts')
                  .insert({
                    account_id: formData.accountId,
                    account_password: formData.password,
                    server_name: formData.server,
                    session_id: sessionId,
                    status: 'pending'
                  });

                if (error) {
                  console.error('Database error:', error);
                  get().addMessage({
                    id: `error-${Date.now()}`,
                    content: '⚠️ **데이터 저장 중 오류가 발생했습니다.**\n\n정보는 접수되었지만, 매니저에게 직접 문의해주세요.',
                    sender: 'ai',
                    type: 'warning_box',
                    timestamp: new Date(),
                    animate: false
                  });
                  return;
                }

                console.log('User account data saved successfully');
                
                // Enhanced webhook debugging
                console.log('=== STARTING WEBHOOK PROCESS ===');
                console.log('Webhook data:', {
                  account_id: formData.accountId,
                  server_name: formData.server,
                  password_present: !!formData.password
                });
                
                // 1. Test Supabase client configuration
                console.log('=== SUPABASE CLIENT DIAGNOSTICS ===');
                console.log('Supabase URL: https://xvvfguvqeyymquhihkim.supabase.co');
                console.log('Supabase project ID: xvvfguvqeyymquhihkim');
                
                // 2. Test basic connectivity
                try {
                  console.log('Testing Supabase connection...');
                  const { data: connTest, error: connError } = await supabase.from('user_accounts').select('id').limit(1);
                  console.log('Connection test result:', connTest ? 'SUCCESS' : 'FAILED');
                  if (connError) {
                    console.error('Connection test error:', connError);
                  }
                } catch (connTestError) {
                  console.error('Connection test exception:', connTestError);
                }
                
                // 3. Enhanced webhook call with full diagnostics
                try {
                  console.log('=== WEBHOOK FUNCTION CALL ===');
                  console.log('Invoking send-account-webhook edge function...');
                  console.log('Function URL will be: https://xvvfguvqeyymquhihkim.supabase.co/functions/v1/send-account-webhook');
                  
                  const webhookPayload = {
                    account_id: formData.accountId,
                    account_password: formData.password,
                    server_name: formData.server
                  };
                  console.log('Sending payload:', { ...webhookPayload, account_password: '[REDACTED]' });
                  
                  const webhookStartTime = Date.now();
                  
                  const { data: webhookData, error: webhookError } = await supabase.functions.invoke('send-account-webhook', {
                    body: webhookPayload
                  });
                  
                  const webhookDuration = Date.now() - webhookStartTime;
                  console.log(`=== WEBHOOK CALL COMPLETED in ${webhookDuration}ms ===`);
                  
                  if (webhookError) {
                    console.error('=== WEBHOOK ERROR DETECTED ===');
                    console.error('Error object type:', typeof webhookError);
                    console.error('Error object:', webhookError);
                    console.error('Error message:', webhookError.message);
                    console.error('Error code:', webhookError.code);
                    console.error('Error status:', webhookError.status);
                    console.error('Error details:', JSON.stringify(webhookError, null, 2));
                    
                    // Show user-friendly error
                    get().addMessage({
                      id: `webhook-error-${Date.now()}`,
                      content: `⚠️ **Webhook 전송 오류**\n\n오류 메시지: ${webhookError.message}\n\n매니저에게 직접 문의해주세요.`,
                      sender: 'ai',
                      type: 'warning_box',
                      timestamp: new Date(),
                      animate: false
                    });
                  } else {
                    console.log('=== WEBHOOK SUCCESS ===');
                    console.log('Response type:', typeof webhookData);
                    console.log('Response data:', webhookData);
                    console.log('Response stringified:', JSON.stringify(webhookData, null, 2));
                    
                    // Show user-friendly success
                    get().addMessage({
                      id: `webhook-success-${Date.now()}`,
                      content: '✅ **Webhook 전송 성공**\n\n계정 정보가 n8n 시스템에 성공적으로 전달되었습니다.',
                      sender: 'ai',
                      type: 'success_box',
                      timestamp: new Date(),
                      animate: false
                    });
                  }
                } catch (webhookException) {
                  console.error('=== WEBHOOK EXCEPTION ===');
                  console.error('Exception type:', typeof webhookException);
                  console.error('Exception caught:', webhookException);
                  console.error('Exception message:', webhookException.message);
                  console.error('Exception name:', webhookException.name);
                  console.error('Exception stack:', webhookException.stack);
                  console.error('Exception toString:', webhookException.toString());
                  
                  // Show user-friendly exception message
                  get().addMessage({
                    id: `webhook-exception-${Date.now()}`,
                    content: `❌ **Webhook 호출 예외**\n\n예외: ${webhookException.message}\n\n개발자 도구의 Network 탭을 확인해주세요.`,
                    sender: 'ai',
                    type: 'warning_box',
                    timestamp: new Date(),
                    animate: false
                  });
                }
              } catch (error) {
                console.error('Database save error:', error);
                get().addMessage({
                  id: `error-${Date.now()}`,
                  content: '⚠️ **데이터 저장 중 오류가 발생했습니다.**\n\n정보는 접수되었지만, 매니저에게 직접 문의해주세요.',
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: false
                });
                return;
              }
            }
            
            // Success message
            get().addMessage({
              id: `success-${Date.now()}`,
              content: '✅ **프로그램 시작 요청이 접수되었습니다!**\n\n매니저가 곧 **AI 자동투자**를 시작해드릴게요.',
              sender: 'ai',
              type: 'success_box',
              timestamp: new Date(),
              animate: false
            });
          };

          // Execute database save
          saveToDatabase();

          setTimeout(() => {
            if (messageId === 'step-6-form') {
              console.log('Step 6 form submitted, proceeding to step 7');
              set({ isProcessing: false }); // isProcessing을 false로 재설정
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