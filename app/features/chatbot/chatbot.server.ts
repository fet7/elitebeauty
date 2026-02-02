import type { ChatbotRequest, ChatMessage } from './chatbot.types';
import { SYSTEM_PROMPT } from './prompts/system';
import { formatBookingContext } from './utils/booking-context';
import { GroqChatProvider } from './groq.provider';
import { classifyIntent } from './utils/classify-intent';
import { formatAllowedServicesForPrompt, isServiceAllowed } from './utils/service-allowlist';

/**
 * Single AI provider instance.
 * Swappable later (HF, Azure, etc).
 */
const provider = new GroqChatProvider();

/**
 * Chatbot action.
 *
 * Receives conversation messages from the client,
 * sends them to the AI provider, and returns the response.
 */
export async function action({ request }: { request: Request }) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const body = (await request.json()) as ChatbotRequest;
  const { messages, bookingContext } = body;

  const contextBlock = bookingContext
    ? formatBookingContext(bookingContext)
    : '';

  const effectiveSystemPrompt = [
    SYSTEM_PROMPT,
    formatAllowedServicesForPrompt(),
    contextBlock,
  ]
    .filter(Boolean)
    .join('\n\n');

  try {
    const assistantReply = await provider.generateResponse({
        systemPrompt: effectiveSystemPrompt,
        messages,
    });

    /**
     * HARD SERVICE GUARDRAIL
     * If the user asked about a service that is not allowed,
     * override the model response.
     */
    const lastUserMessage =
        messages[messages.length - 1]?.content ?? '';

    if (
        lastUserMessage &&
        !isServiceAllowed(lastUserMessage) &&
        lastUserMessage.match(/facial|bath|massage|laser|spa/i)
        ) {
        return {
            message: {
            role: 'assistant',
            content:
                'That service is not available at Elite Beauty Studio. I can help you with the services we currently offer or guide you to our services page.',
            },
            intent: 'unsupported_service',
        };
    }

    const intent = classifyIntent(assistantReply);

    return {
        message: {
            role: 'assistant',
            content: assistantReply,
        },
        intent,
    };
  } catch (error) {
    console.error('[Chatbot Error]', error);

    return new Response(
      JSON.stringify({
        role: 'assistant',
        content:
          'I’m having trouble right now. Please try again shortly.',
      }),
      { status: 500 }
    );
  }
}
