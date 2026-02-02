import { Calendar } from '@/components/ui/calendar';
import { isBefore, startOfDay } from 'date-fns';

/**
 * Date selection step.
 *
 * Allows users to pick a booking date.
 * Past dates are disabled.
 */
export default function DateSelector({
  value,
  onChange,
  disabled,
}: {
  value: Date | null;
  onChange: (date: Date) => void;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <div>
        <h2 className="text-xl font-medium mb-2">Select a Date</h2>
        <p className="text-sm text-muted-foreground">
          Please select a service first.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Select a Date</h2>

      <Calendar
        mode="single"
        selected={value ?? undefined}
        onSelect={(date) => date && onChange(date)}
        disabled={(date) => isBefore(startOfDay(date), startOfDay(new Date()))}
        className="rounded-md border"
      />
    </div>
  );
}
