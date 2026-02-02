import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * ChatInput
 *
 * Handles user text input and submission.
 */
export default function ChatInput({
  onSend,
}: {
  onSend: (message: string) => void;
}) {
  const [value, setValue] = useState('');

  function submit() {
    if (!value.trim()) return;
    onSend(value);
    setValue('');
  }

  return (
    <div className="border-t p-3 flex gap-2">
      <Input
        placeholder="Ask about services or booking..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') submit();
        }}
      />

      <Button onClick={submit}>Send</Button>
    </div>
  );
}
