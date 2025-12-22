export interface Message {
  id: string;
  content: string;
  sender: "ai" | "user";
  type: "text" | "info_box" | "warning_box" | "success_box" | "form" | "action_button" | "account_settings" | "final_cards";
  timestamp: Date;
  animate?: boolean;
  buttons?: MessageButton[];
  formFields?: FormField[];
  groupId?: string; // For grouping messages that should appear together
  accountType?: 'demo' | 'live'; // For differentiating account-specific settings
  countryCode?: string; // For conditional initial deposit based on country
}

export interface MessageGroup {
  id: string;
  messages: Message[];
  timestamp: Date;
}

export interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel";
  placeholder: string;
  required: boolean;
  value: string;
}

export interface MessageButton {
  label: string;
  description?: string;
  type: "primary" | "secondary" | "link" | "card";
  action: () => void;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode?: string;
  accountId: string;
  password: string;
  server: string;
  sessionId?: string;
  referrerName?: string;
  accountType?: 'demo' | 'live';
  accountSubType?: 'cent' | 'regular';
}

export interface ChatState {
  messages: Message[];
  messageGroups: MessageGroup[];
  currentStep: number;
  userData: UserData;
  isProcessing: boolean;
}