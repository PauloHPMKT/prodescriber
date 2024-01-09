import OpenAI from 'openai';

export interface ChatRequest {
  messages: OpenAI.Chat.ChatCompletionMessage[];
}

export interface ChatResponse {
  success: boolean;
  result: OpenAI.ChatCompletion.Choice;
}

export interface Message {
  role: string;
  content: string;
}

export interface OpenAIChat {
  message: Message;
  success: boolean;
  result: {
    message: Message;
  };
  created_at: Date;
  updated_at: Date;
}
