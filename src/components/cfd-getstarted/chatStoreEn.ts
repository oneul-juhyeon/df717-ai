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
  countryCode: '+82',
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
      locale: 'en',

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
          locale: 'en',
        });
      },

      initializeChat: () => {
        const state = get();
        
        // Locale mismatch check - reset if wrong locale persisted
        if (state.locale !== 'en' && state.messages.length > 0) {
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
          locale: 'en'
        }));
        
        setTimeout(() => {
          get().addMessage({
            id: 'welcome-1',
            content: 'Hello there! Welcome to DF717 😊',
            sender: 'ai',
            type: 'text',
            timestamp: new Date(),
            animate: false,
          });
          
          setTimeout(() => {
            get().addMessage({
              id: 'welcome-2',
              content: 'You can start your AI automated investing in just 3 minutes.',
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
          content: 'How would you like to begin your AI investment journey today?',
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
                label: '📊 Try Demo',
                description: "Experience safe and risk-free AI investing with a free demo account.",
                type: 'card',
                action: () => {
                  get().selectAccountType('demo');
                }
              },
              {
                label: '💰 Start Live',
                description: 'Begin live trading instantly with real funds.',
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

        const typeText = type === 'demo' ? '📊 Try Demo' : '💰 Start Live';
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
            content: "Could you share a few basic details? I'll use them to guide you personally and notify you when the program begins.",
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
              label: 'Name',
              type: 'text',
              placeholder: 'Enter your name',
              required: true,
              value: ''
            },
            {
              id: 'email',
              label: 'Email',
              type: 'email',
              placeholder: 'Enter your email',
              required: true,
              value: ''
            },
            {
              id: 'phone',
              label: 'Phone',
              type: 'tel',
              placeholder: 'Enter your phone number',
              required: true,
              value: ''
            },
            {
              id: 'referrerName',
              label: 'Referred by (Optional)',
              type: 'text',
              placeholder: 'Enter referral name',
              required: false,
              value: ''
            }
          ],
          buttons: [
            {
              label: 'Get Started',
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
              firstName: 'Developer',
              email: 'dev@test.com',
              phone: '010-0000-0000',
              referrerName: '',
              sessionId: crypto.getRandomValues(new Uint32Array(1))[0].toString(36)
            };
            
            get().updateUserData(dummyPersonalData);
            
            get().addMessage({
              id: `personalized-greeting-${Date.now()}`,
              content: `Your personalized guide is ready, ${dummyPersonalData.firstName}`,
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
                content: `First, let\'s open an account with ${brokerName}.`,
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
              content: '⚠️ **Please enter your name.**',
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
              content: '⚠️ **Please enter your email.**',
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
              content: '⚠️ **Please enter a valid email format.**',
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
              content: '⚠️ **Please enter your phone number.**',
              sender: 'ai',
              type: 'warning_box',
              timestamp: new Date(),
              animate: false
            });
            set({ isProcessing: false });
            return;
          }

          // Validate phone: only digits allowed (country code is separate)
          const phoneRegex = /^[0-9]{6,15}$/;
          if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
            get().addMessage({
              id: `validation-error-${Date.now()}`,
              content: '⚠️ **Please enter a valid phone number (digits only).**',
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
              content: `Your personalized guide is ready, ${userName}`,
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
                content: `First, let\'s open an account with ${brokerName}.`,
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
          content: 'I already have an account',
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
              content: 'Please enter your account details to start the AI automated investing program',
              sender: 'ai',
              type: 'text',
              timestamp: new Date(),
              animate: false,
            },
            {
              id: 'skip-step-6-account-info',
              content: '📋 **Information to enter:**\n\n• **Account Number**\n• **Password**\n• **Server**',
              sender: 'ai',
              type: 'info_box',
              timestamp: new Date(),
              animate: false,
            },
            {
              id: 'skip-step-6-security',
              content: '🔒 **Rest assured!**\nYour broker login credentials and trading account details are completely separate.\nThese account details are used only for AI program integration.',
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
                  label: 'Account Number',
                  type: 'text',
                  placeholder: 'Enter account number',
                  required: true,
                  value: ''
                },
                {
                  id: 'password',
                  label: 'Password',
                  type: 'text',
                  placeholder: 'Enter account password',
                  required: true,
                  value: ''
                },
                {
                  id: 'server',
                  label: 'Server',
                  type: 'text',
                  placeholder: 'Enter server name',
                  required: true,
                  value: ''
                }
              ],
              buttons: [
                {
                  label: 'Request Program Activation',
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
              const brokerName = isDemo ? 'ICMarkets' : 'Vantage';
              const accountTypeText = isDemo ? 'Demo' : 'Live';
              const brokerUrl = isDemo 
                ? 'https://www.icmarkets.com/global/en/open-trading-account/demo/?camp=83293'
                : 'https://www.vantagemarkets.com/en/open-live-account/?affid=MjA3OTUxMjQ=';

              get().addMessageGroup([
                {
                  id: 'step-1-title',
                  content: 'Step 1: Open Your Account',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-info',
                  content: `**💡 What is a Broker?**\nTo trade assets like stocks or crypto, you use a platform that connects you to the market.\nCFD trading works the same way — it requires a regulated broker that provides access to global markets.\nAmong them, **${brokerName}** is recognized worldwide as a trusted **Tier-1 broker** by traders of all levels.`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-1-critical-warning',
                  content: "⚠️ **Please note:**\nEnter your name in **English (Latin) characters only**.\nExample: First Name: **John**, Last Name: **Smith**",
                  sender: 'ai',
                  type: 'warning_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-1-action',
                  content: 'Please ensure all information provided in your account application is accurate.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: `Open ${brokerName} ${accountTypeText} Account →`,
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
                      label: "I've completed my account application",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've completed my account application",
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
              const { userData } = get();
              const isDemo = userData.accountType === 'demo';
              const brokerName = isDemo ? 'ICMarkets' : 'Vantage';
              const clientAreaText = isDemo ? 'Secure Client Area' : 'Set Password';

              get().addMessageGroup([
                {
                  id: 'step-2-title',
                  content: 'Step 2: Verify Email & Set Password',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-intro',
                  content: 'Great! Now please check your email.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-email',
                  content: `📧 Click the **"Secure Client Area"** link in the email to proceed to the password setup page.\nOnce your password is set, your account creation will be complete!`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: true,
                },
                {
                  id: 'step-2-tip',
                  content: `💡 **Tip!**\nCan\'t find the email?\nCheck your **spam folder**. **${brokerName}** emails may occasionally be filtered as spam.`,
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
                      label: "I've set my password",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've set my password",
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
              const { userData } = get();
              const isDemo = userData.accountType === 'demo';
              const brokerName = isDemo ? 'ICMarkets' : 'Vantage';
              const loginUrl = isDemo 
                ? 'https://secure.icmarkets.com/Account/LogOn'
                : 'https://trader.vantagemarkets.com/';

              get().addMessageGroup([
                {
                  id: 'step-3-title',
                  content: 'Step 3: Log In',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-3-intro',
                  content: `Perfect! Now let's log in to ${brokerName}.`,
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                  buttons: [
                    {
                      label: `Go to ${brokerName} Login →`,
                      type: 'link',
                      action: () => {
                        window.open(loginUrl, '_blank');
                      }
                    }
                  ]
                },
                {
                  id: 'step-3-info',
                  content: '🔐 Please log in with the email and password you just created.',
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
                      label: "I've logged in",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've logged in",
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
              const { userData } = get();
              const isDemo = userData.accountType === 'demo';
              const accountTypeTitle = isDemo ? 'Demo Account' : 'Live Account';
              const accountTypeText = isDemo ? 'demo' : 'live';
              const buttonText = isDemo ? "I've clicked the Demo Account button" : "I've clicked the Live Account button";
              const stepIntro = isDemo 
                ? 'Now let\'s create a demo account to experience AI investing!'
                : 'Now let\'s create a live account to start real investing!';
              const stepInstructions = isDemo
                ? '📌 **After logging in, follow these steps:**\nClick **Account** tab → **Demo Account** → **"Open New Demo Account"** button'
                : '📌 **After logging in, follow these steps:**\nClick **Account** tab → **Live Account** → **"Open New Live Account"** button';
              const safetyMessage = isDemo
                ? '💰 No worries!\nA demo account uses virtual funds for practice trading. No real money is involved, so feel free to explore with confidence.'
                : '💰 Important!\nA live account uses real funds for actual trading. Please ensure you understand the risks involved.';

              get().addMessageGroup([
                {
                  id: 'step-4-title',
                  content: `Step 4: Open ${accountTypeTitle}`,
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-intro',
                  content: stepIntro,
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-steps',
                  content: stepInstructions,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-4-safety',
                  content: safetyMessage,
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
                      label: buttonText,
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: buttonText,
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
              const { userData } = get();
              const accountType = userData.accountType || 'demo';
              
              get().addMessageGroup([
                {
                  id: 'step-5-title',
                  content: 'Step 5: Configure Account Settings',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-5-intro',
                  content: 'Please set up your account exactly as shown below.',
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
                  accountType: accountType,
                  countryCode: userData.countryCode || '+82',
                },
                {
                  id: 'step-5-warning',
                  content: '⚠️ Warning\nThe AI program will not function properly if the settings differ.\nPlease make sure to apply the exact settings as shown above.',
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
                      label: "I've configured the account",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've configured the account",
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
              const { userData } = get();
              const isDemo = userData.accountType === 'demo';
              const celebrationText = isDemo 
                ? 'Congratulations! Your demo account is ready 🎉'
                : 'Congratulations! Your live account is ready 🎉';

              get().addMessageGroup([
                {
                  id: 'step-6-title',
                  content: 'Step 6: Request Program Activation',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-celebration',
                  content: celebrationText,
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-intro',
                  content: 'Please enter your account details to start the AI automated investing program',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-account-info',
                  content: '📋 You can find the following information on the Account page:\n• Account Number\n• Password\n• Server',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-6-security',
                  content: '🔒 Rest assured!\nYour broker login credentials and trading account details are completely separate.\nThese account details are used only for AI program integration.',
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
                      label: 'Account Number',
                      type: 'text',
                      placeholder: 'Enter account number',
                      required: true,
                      value: ''
                    },
                    {
                      id: 'password',
                      label: 'Password',
                      type: 'text',
                      placeholder: 'Enter account password',
                      required: true,
                      value: ''
                    },
                    {
                      id: 'server',
                      label: 'Server',
                      type: 'text',
                      placeholder: 'Enter server name',
                      required: true,
                      value: ''
                    }
                  ],
                  buttons: [
                    {
                      label: 'Request Program Activation',
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
            }

            case 7:
              get().addMessageGroup([
                {
                  id: 'step-7-title',
                  content: 'Step 7: Install MetaTrader 4 App',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-intro',
                  content: 'Meanwhile, let\'s install the app to monitor your investment results in real-time!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-7-info',
                  content: '💡 **What is MetaTrader 4?**\nMetaTrader 4 is like PayPal or Revolut — a single platform where you can connect multiple broker accounts, monitor your balances, and execute trades in one place.',
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
                      label: 'Download Android App →',
                      type: 'link',
                      action: () => {
                        window.open('https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4', '_blank');
                      }
                    },
                    {
                      label: 'Download iPhone App →',
                      type: 'link',
                      action: () => {
                        window.open('https://apps.apple.com/us/app/metatrader-4/id496212596', '_blank');
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
                      label: "I've installed the app",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've installed the app",
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

            case 8:
              const { userData } = get();
              const isLiveAccount = userData.accountType === 'live';
              const serverSearchTerm = isLiveAccount ? 'Vantage International' : 'ICMarkets';
              
              get().addMessageGroup([
                {
                  id: 'step-8-title',
                  content: 'Step 8: Log in to MetaTrader 4',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-intro',
                  content: 'Now let us log in to the MetaTrader 4 app using the account you just created.',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-instructions',
                  content: '📱 **How to log in on MetaTrader 4:**\n\n1. Click ⚙️ **Settings** (bottom right)\n2. Click **New Account**\n3. Click **Log in to existing account**\n4. Search and select your server\n5. Enter login and password, then click **Login**',
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-userdata',
                  content: `📋 **Information to enter** (from your account):\n\n• **Server:** ${userData.server || '[No server info]'}\n• **Login (Account ID):** ${userData.accountId || '[No account ID]'}\n• **Password:** ${userData.password || '[No password]'}`,
                  sender: 'ai',
                  type: 'info_box',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-8-tip',
                  content: `💡 **Tip!**\nIf you cannot see the exact server name, try searching for **"${serverSearchTerm}"** in the search bar.\n\n⚠️ If login fails, account activation may take **a few minutes**.`,
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
                      label: "I've logged in",
                      type: 'primary',
                      action: () => {
                        get().addMessage({
                          id: `user-response-${Date.now()}`,
                          content: "I've logged in",
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

            case 9:
              const step9UserData = get().userData;
              const isLiveAccountStep9 = step9UserData.accountType === 'live';
              const accountTypeText = isLiveAccountStep9 ? 'Live account created' : 'Demo account created';
              
              get().addMessageGroup([
                {
                  id: 'step-9-title',
                  content: '✨ Start Monitoring!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                },
                {
                  id: 'step-9-success',
                   content: `✅ **Setup complete!**\n\n• **${accountTypeText}**\n• **AI program activation requested**\n• **Monitoring app installed**`,
                   sender: 'ai',
                   type: 'success_box',
                   timestamp: new Date(),
                   animate: false,
                 },
                {
                  id: 'step-9-intro',
                  content: 'Congratulations! You can now monitor your trading history and returns in real-time.\nOur manager will notify you when the program starts running!',
                  sender: 'ai',
                  type: 'text',
                  timestamp: new Date(),
                  animate: false,
                }
                ]);
                
                setTimeout(() => {
                  set(state => ({
                    messages: [...state.messages, {
                      id: 'step-9-additional-info',
                      content: 'You can learn more through the buttons below.',
                      sender: 'ai',
                      type: 'text',
                      timestamp: new Date(),
                      animate: true,
                    }]
                  }));
                  
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
                            label: '🏠 About DF717',
                            description: 'Learn who we are',
                            type: 'card',
                            action: () => {
                              window.open('https://www.df717.ai/', '_blank');
                            }
                          },
                          {
                            label: '📊 Live Returns',
                            description: '8.3 years verified live account',
                            type: 'card',
                            action: () => {
                              window.open('https://aiwow.notion.site/DF717-LIVE-ACCOUNT-20dc67e3da6880dfbc4cefa57ae38bf7', '_blank');
                            }
                          },
                          {
                            label: '📈 Backtest Results',
                            description: '20 years verified, 65.9% return',
                            type: 'card',
                            action: () => {
                              window.open('https://aiwow.notion.site/DF717-Backtest-20fc67e3da68809780c0f8302bfc12bf', '_blank');
                            }
                          },
                          {
                            label: '🔄 Start Over',
                            description: 'Return to beginning',
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
              content: '✅ **Program activation request received!**\n\nOur Program Manager shall start your AI automated investing soon.',
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
              content: '⚠️ **Please fill in all required fields.**',
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
            content: '✅ **Program activation request received!**\n\nOur Program Manager shall start your AI automated investing soon.',
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
      name: 'cfd_chat_en_v2',
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
