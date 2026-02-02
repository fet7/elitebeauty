import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ChatHeader
 *
 * Displays assistant title and close action.
 */
export default function ChatHeader({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <div>
        <p className="font-medium">Booking Assistant</p>
        <p className="text-xs text-muted-foreground">Elite Beauty Studio</p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        aria-label="Close chat"
      >
        <X />
      </Button>
    </div>
  );
}
