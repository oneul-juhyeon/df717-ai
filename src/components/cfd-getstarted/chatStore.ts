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
                get().setCurrentStep(2);
                // Continue to step 2
              }
            }
          ]
        };

        set((state) => ({
          messages: [...state.messages, step1Message],
          currentStep: 1
        }));
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