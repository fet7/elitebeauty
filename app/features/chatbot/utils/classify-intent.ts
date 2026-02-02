import type { ChatIntent } from '../chatbot.types';

/**
 * Classifies user intent based on assistant reply.
 * Keeps logic deterministic and auditable.
 */
export function classifyIntent(text: string): ChatIntent {
  const t = text.toLowerCase();

  if (t.includes('book') || t.includes('appointment')) {
    return 'booking_request';
  }

  if (t.includes('how long') || t.includes('duration')) {
    return 'duration_question';
  }

  if (t.includes('price') || t.includes('cost')) {
    return 'pricing_question';
  }

  if (t.includes('service') || t.includes('treatment')) {
    return 'service_selection';
  }

  return 'general_inquiry';
}
