/**
 * Time slot selection step.
 *
 * Displays available time slots for a selected date.
 */
export default function TimeSlotSelector({
  value,
  onChange,
  disabled,
}: {
  value: string | null;
  onChange: (time: string) => void;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <div>
        <h2 className="text-xl font-medium mb-2">Select a Time</h2>
        <p className="text-sm text-muted-foreground">
          Please select a date first.
        </p>
      </div>
    );
  }

  // Temporary static slots (backend will replace this)
  const timeSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Select a Time</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {timeSlots.map((slot) => {
          const isSelected = value === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onChange(slot)}
              className={`h-10 border transition-all text-xs tracking-wider ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary text-muted-foreground hover:text-primary'
              } rounded-none`}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </div>
  );
}
