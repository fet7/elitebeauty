/**
 * Chat message exchanged between user and assistant.
 */
export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};
/**
 * Payload sent from client to chatbot action.
 */
export type ChatbotRequest = {
  messages: ChatMessage[];
  bookingContext?: {
    serviceId?: string;
    date?: string;
    time?: string;
  };
};

export type ChatIntent =
  | 'service_selection'
  | 'booking_request'
  | 'duration_question'
  | 'pricing_question'
  | 'general_inquiry';

export type ChatbotResponse = {
  message: ChatMessage;
  intent: ChatIntent;
};
