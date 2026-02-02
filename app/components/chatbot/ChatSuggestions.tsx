/**
 * ChatSuggestions
 *
 * Quick intent shortcuts to guide users.
 */
export default function ChatSuggestions({
  onSelect,
}: {
  onSelect: (text: string) => void;
}) {
  const suggestions = [
    'Which service is right for me?',
    'How long does a facial take?',
    'I want to book an appointment',
  ];

  return (
    <div className="px-3 py-2 border-t flex gap-2 overflow-x-auto">
      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="whitespace-nowrap rounded-full bg-muted px-3 py-1 text-xs hover:bg-accent"
        >
          {s}
        </button>
      ))}
    </div>
  );
}
