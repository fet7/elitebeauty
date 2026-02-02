import { SERVICE_CATEGORIES } from '@/features/services/services.data';

/**
 * Flattened, authoritative list of allowed services.
 * Used to restrict chatbot explanations.
 */
export const ALLOWED_SERVICES = SERVICE_CATEGORIES.flatMap(
  (category) =>
    category.services.map((service) => ({
      id: service.id,
      name: service.name,
      category: category.title,
    })),
);

/**
 * Human-readable block injected into system prompt.
 */
export function formatAllowedServicesForPrompt(): string {
  return (
    'AVAILABLE SERVICES (AUTHORITATIVE):\n' +
    SERVICE_CATEGORIES.map(
      (category) =>
        `\n${category.title}:\n` +
        category.services.map((s) => `- ${s.name}`).join('\n'),
    ).join('\n')
  );
}

/**
 * Check whether a service name appears in the allowlist.
 * Very strict by design.
 */
export function isServiceAllowed(text: string): boolean {
  const normalized = text.toLowerCase();

  return ALLOWED_SERVICES.some((service) =>
    normalized.includes(service.name.toLowerCase()),
  );
}
