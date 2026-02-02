/**
 * ChatbotProvider
 *
 * Abstract interface for any AI provider (OpenAI, HF, etc).
 */
export interface ChatbotProvider {
  generateResponse(input: {
    systemPrompt: string;
    messages: { role: 'user' | 'assistant'; content: string }[];
  }): Promise<string>;
}
