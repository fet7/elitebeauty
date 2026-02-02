import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

/**
 * ChatMessage
 *
 * Renders a single chat message bubble.
 * Supports safe markdown for lists and paragraphs.
 */
export default function ChatMessage({
  role,
  content,
}: {
  role: 'user' | 'assistant';
  content: string;
}) {
  const isUser = role === 'user';

  return (
    <div
      className={cn(
        'max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap',
        isUser
          ? 'ml-auto bg-primary text-primary-foreground'
          : 'mr-auto bg-muted text-foreground',
      )}
    >
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
          ul: ({ children }) => (
            <ul className="list-disc pl-5 space-y-1 mb-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-1 mb-2">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
