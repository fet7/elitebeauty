import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import ChatLauncher from './ChatLauncher';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatSuggestions from './ChatSuggestions';
import ChatIntentActions from '@/features/chatbot/IntentActions';
import type { ChatMessage as ChatMessageType } from '@/features/chatbot/chatbot.types';
import type { BookingContext } from '@/features/chatbot/utils/booking-context';

/**
 * ChatWidget
 * * Reimagined as a "Digital Concierge."
 * Uses glassmorphism and refined transitions to match the EliteBeauty brand.
 */
export default function ChatWidget({
  bookingContext,
}: {
  bookingContext?: BookingContext;
}) {
  const [open, setOpen] = useState(false);
  const [lastIntent, setLastIntent] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      role: 'assistant',
      content:
        'Welcome back. I am your personal concierge. How may I assist with your reservation today?',
    },
  ]);

  function handleBookNow() {
    setOpen(false);
    navigate('/booking');
  }

  function handleViewServices() {
    setOpen(false);
    navigate('/services');
  }

  async function handleSend(message: string) {
    const nextMessages: ChatMessageType[] = [
      ...messages,
      { role: 'user', content: message },
    ];

    setMessages(nextMessages);

    try {
      const response = await fetch('/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages, bookingContext }),
      });

      if (!response.ok) throw new Error();

      const data: { message: ChatMessageType; intent: string } =
        await response.json();
      setMessages((prev) => [...prev, data.message]);
      setLastIntent(data.intent);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'I apologize, I am having trouble connecting. Please try again shortly.',
        },
      ]);
    }
  }

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  return (
    <div className="relative">
      <ChatLauncher open={open} onToggle={() => setOpen(!open)} />

      {open && (
        <div
          className="fixed bottom-24 right-4 md:right-8 z-50 w-95 max-w-[calc(100vw-2rem)] h-600px max-h-[80vh]
                     flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500
                     bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50
                     shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl"
        >
          {/* Header with glass effect blur */}
          <ChatHeader onClose={() => setOpen(false)} />

          {/* Message Area */}
          <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 space-y-6 scrollbar-none">
            {messages.map((m, i) => (
              <ChatMessage key={i} role={m.role} content={m.content} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input & Actions Area */}
          <div className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-t border-border/40 p-4 space-y-4">
            <ChatSuggestions onSelect={(text) => handleSend(text)} />

            <ChatIntentActions
              intent={lastIntent}
              onBook={handleBookNow}
              onViewServices={handleViewServices}
            />

            <ChatInput onSend={handleSend} />

            <p className="text-[9px] text-center text-muted-foreground uppercase tracking-widest opacity-50">
              Elite Concierge AI
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
