export interface Message {
  id: string;
  content: string;
  sender: "ai" | "user";
  type: "text" | "info_box" | "warning_box" | "success_box" | "form";
  timestamp: Date;
  animate?: boolean;
  buttons?: MessageButton[];
  formFields?: FormField[];
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
  type: "primary" | "secondary" | "link";
  action: () => void;
}

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accountId: string;
  password: string;
  server: string;
}

export interface ChatState {
  messages: Message[];
  currentStep: number;
  userData: UserData;
  showChat: boolean;
}