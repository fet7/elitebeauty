import { format, isValid } from 'date-fns';
import { useForm } from '@tanstack/react-form';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import {
  bookingGuestSchema,
  type BookingGuestData,
} from '@/features/booking/booking.schema';

/**
 * Review & submit step for a booking.
 * * Includes selected specialist details in the concierge summary.
 */
export default function ReviewSubmit({
  serviceId,
  staffId,
  date,
  time,
  onBack,
  onSubmit,
}: {
  serviceId: string;
  staffId: string | null;
  date: Date;
  time: string;
  onBack: () => void;
  onSubmit: (data: BookingGuestData) => void;
}) {
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  // Data mapping for display
  const serviceLabel = serviceId.charAt(0).toUpperCase() + serviceId.slice(1);

  const staffMembers: Record<string, string> = {
    amina: 'Amina Hassan',
    daniel: 'Daniel Mekonnen',
    sara: 'Sara Tesfaye',
    liya: 'Liya Bekele',
    any: 'Any Available Specialist',
  };

  const staffLabel = staffId
    ? staffMembers[staffId] || 'Not Selected'
    : 'Any Available Specialist';

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      {/* 1. Elegant Summary Card */}
      <div className="bg-muted/30 border border-border/50 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <CheckCircle2 size={120} />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">
              Summary
            </span>
            <h2 className="text-2xl font-serif">Appointment Details</h2>
          </div>

          {/* Extended Grid for Staff */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border/50">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Service
              </p>
              <p className="text-xs font-medium">{serviceLabel}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Specialist
              </p>
              <p className="text-xs font-medium">{staffLabel}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Date
              </p>
              <p className="text-xs font-medium">
                {isValid(date) ? format(date, 'MMM d, yyyy') : '—'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Time
              </p>
              <p className="text-xs font-medium">{time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Guest Details Form */}
      <div className="space-y-8">
        <div className="space-y-1">
          <h3 className="text-lg font-serif">Guest Information</h3>
          <p className="text-xs text-muted-foreground font-light">
            Please provide your contact details to secure the reservation.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <form.Field
              name="name"
              validators={{ onChange: bookingGuestSchema.shape.name }}
            >
              {(field) => {
                const invalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={invalid} className="space-y-2">
                    <FieldLabel className="text-[10px] uppercase tracking-widest">
                      Full Name
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        placeholder="e.g. Julianne Moore"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className="rounded-none border-x-0 border-t-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors h-10"
                      />
                    </FieldContent>
                    <FieldError
                      className="text-[10px]"
                      errors={field.state.meta.errors}
                    />
                  </Field>
                );
              }}
            </form.Field>

            <form.Field
              name="phone"
              validators={{ onChange: bookingGuestSchema.shape.phone }}
            >
              {(field) => {
                const invalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={invalid} className="space-y-2">
                    <FieldLabel className="text-[10px] uppercase tracking-widest">
                      Phone Number
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        placeholder="+1 (555) 000-0000"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className="rounded-none border-x-0 border-t-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors h-10"
                      />
                    </FieldContent>
                    <FieldError
                      className="text-[10px]"
                      errors={field.state.meta.errors}
                    />
                  </Field>
                );
              }}
            </form.Field>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-4 pt-8">
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className="rounded-none text-xs uppercase tracking-widest gap-2 h-14"
            >
              <ArrowLeft size={14} />
              Modify Details
            </Button>

            <Button
              type="submit"
              disabled={!form.state.canSubmit}
              className="flex-1 h-14 rounded-none bg-primary text-primary-foreground uppercase tracking-[0.2em] text-xs shadow-lg shadow-primary/10 transition-all hover:bg-primary/90"
            >
              Confirm Reservation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
