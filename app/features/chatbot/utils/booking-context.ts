/**
 * BookingContext
 *
 * Contextual information about an in-progress booking,
 * injected into the chatbot to improve assistance.
 */
export type BookingContext = {
  serviceId?: string;
  date?: string; // ISO string
  time?: string;
};

/**
 * Normalize booking context into a readable string
 * suitable for AI system messages.
 */
export function formatBookingContext(
  context: BookingContext
): string {
  const parts: string[] = [];

  if (context.serviceId) {
    parts.push(`Selected service: ${context.serviceId}`);
  }

  if (context.date) {
    parts.push(`Selected date: ${context.date}`);
  }

  if (context.time) {
    parts.push(`Selected time: ${context.time}`);
  }

  if (!parts.length) {
    return '';
  }

  return `CURRENT BOOKING CONTEXT:\n${parts.map(p => `- ${p}`).join('\n')}`;
}
