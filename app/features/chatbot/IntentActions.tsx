import { Button } from '@/components/ui/button';

/**
 * ChatIntentActions
 *
 * Renders contextual actions based on the latest detected user intent.
 */
export default function ChatIntentActions({
  intent,
  onBook,
  onViewServices,
}: {
  intent: string | null;
  onBook: () => void;
  onViewServices: () => void;
}) {
  if (!intent) return null;

  switch (intent) {
    case 'booking_request':
      return (
        <div className="border-t p-3 bg-muted/30">
          <Button className="w-full" onClick={onBook}>
            Book an Appointment
          </Button>
        </div>
      );

    case 'service_selection':
      return (
        <div className="border-t p-3 bg-muted/30">
          <Button variant="outline" className="w-full" onClick={onViewServices}>
            View Services
          </Button>
        </div>
      );

    default:
      return null;
  }
}
