import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ChatLauncher
 *
 * Floating button that opens/closes the chat widget.
 */
export default function ChatLauncher({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      onClick={onToggle}
      className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg"
      aria-label="Open booking assistant"
    >
      <MessageCircle />
    </Button>
  );
}
