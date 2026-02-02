import Groq from 'groq-sdk';
import type { ChatMessage } from './chatbot.types';

/**
 * GroqChatProvider
 *
 * Production LLM provider using Groq's ultra-fast inference.
 * Free-tier friendly and OpenAI-compatible message format.
 */
export class GroqChatProvider {
  private client = new Groq({
    apiKey: process.env.GROQ_API_KEY!,
  });

  async generateResponse({
    systemPrompt,
    messages,
  }: {
    systemPrompt: string;
    messages: ChatMessage[];
  }): Promise<string> {
    const completion = await this.client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.6,
      max_tokens: 300,
    });

    return (
      completion.choices[0]?.message?.content ??
      'Sorry, I could not generate a response.'
    );
  }
}
