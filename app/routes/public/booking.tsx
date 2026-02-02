import { useState, useEffect } from 'react';
import {
  type ActionFunctionArgs,
  useFetcher,
  redirect,
  useSearchParams,
  Link,
} from 'react-router';
import { toast } from 'sonner';
import { Check, ArrowRight } from 'lucide-react';

import ServiceSelector from '@/components/booking/ServiceSelector';
import StaffSelector from '@/components/booking/StaffSelector';
import DateSelector from '@/components/booking/DateSelector';
import TimeSlotSelector from '@/components/booking/TimeSlotSelector';
import ReviewSubmit from '@/components/booking/ReviewSubmit';
import { Button } from '@/components/ui/button';

import {
  bookingGuestSchema,
  type BookingGuestData,
} from '@/features/booking/booking.schema';
import ChatWidget from '@/components/chatbot/ChatWidget';

/**
 * Server action for booking submission.
 *
 * Validates booking payload and handles redirect on success.
 * Persistence logic (DB) should be injected here.
 */
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const payload = {
    serviceId: formData.get('serviceId'),
    staffId: formData.get('staffId'),
    date: formData.get('date'),
    time: formData.get('time'),
    name: formData.get('name'),
    phone: formData.get('phone'),
  };

  const parsedGuest = bookingGuestSchema.safeParse({
    name: payload.name,
    phone: payload.phone,
  });

  if (!parsedGuest.success) {
    return {
      ok: false,
      errors: parsedGuest.error.flatten().fieldErrors,
    };
  }

  if (!payload.serviceId || !payload.date || !payload.time) {
    return {
      ok: false,
      message: 'Missing booking information.',
    };
  }

  // If you had a DB call, you'd await it here.
  // We return a redirect to refresh the page state into Success mode.
  return redirect('/booking?success=true');
}

/**
 * Booking page.
 *
 * Hosts the multi-step booking flow with a refined, concierge-style layout.
 * Automatically switches to a success view upon completion.
 */
type BookingStep = 'select' | 'review';

export default function BookingPage() {
  const fetcher = useFetcher<{ ok: boolean; message?: string; errors?: any }>();
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';

  const [serviceId, setServiceId] = useState<string | null>(null);
  const [staffId, setStaffId] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState<BookingStep>('select');

  const isReadyToReview = Boolean(serviceId && date && time);

  // Handle server-side validation errors if redirect didn't happen
  useEffect(() => {
    if (fetcher.data && !fetcher.data.ok && fetcher.data.errors) {
      toast.error('Please check the highlighted fields.');
    } else if (fetcher.data && !fetcher.data.ok && fetcher.data.message) {
      toast.error(fetcher.data.message);
    }
  }, [fetcher.data]);

  // SUCCESS VIEW
  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center animate-in fade-in zoom-in-95 duration-1000">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <Check className="text-primary w-10 h-10 stroke-[1.5]" />
        </div>
        <h1 className="text-4xl font-serif mb-4 tracking-tight">
          Reservation Confirmed
        </h1>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto font-light leading-relaxed mb-10">
          Thank you for choosing EliteBeauty. Your specialist has been notified
          and is preparing for your arrival. We look forward to seeing you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="rounded-none px-10 h-14 uppercase tracking-widest text-[10px] bg-primary"
          >
            <Link to="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-none px-10 h-14 uppercase tracking-widest text-[10px]"
          >
            <Link to="/services">Explore More Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 1. Compact Page Intro */}
      <section className="w-full bg-muted/20 border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6 py-10 md:py-12 text-center space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
            Reservations
          </span>
          <h1 className="text-3xl md:text-4xl font-serif tracking-tight">
            Book Your <span className="italic">Experience</span>
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-sm mx-auto font-light">
            Refined treatments tailored to your unique beauty.
          </p>
        </div>
      </section>

      {/* 2. Booking Steps */}
      <section className="w-full">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16 space-y-16">
          {step === 'select' && (
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <ServiceSelector value={serviceId} onChange={setServiceId} />

              <StaffSelector
                value={staffId}
                onChange={setStaffId}
                disabled={!serviceId}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start border-t border-border/40 pt-16">
                <DateSelector
                  value={date}
                  onChange={setDate}
                  disabled={!serviceId}
                />

                <div className="space-y-10">
                  <TimeSlotSelector
                    value={time}
                    onChange={setTime}
                    disabled={!date}
                  />

                  {isReadyToReview && (
                    <div className="pt-4 animate-in zoom-in-95 duration-300">
                      <Button
                        onClick={() => setStep('review')}
                        className="w-full h-14 rounded-none uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all hover:gap-4 bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                      >
                        Review Details <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 'review' && serviceId && date && time && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <ReviewSubmit
                serviceId={serviceId}
                staffId={staffId}
                date={date}
                time={time}
                onBack={() => setStep('select')}
                onSubmit={(guestData: BookingGuestData) => {
                  const submission = new FormData();
                  submission.set('serviceId', serviceId);
                  if (staffId) submission.set('staffId', staffId);
                  submission.set('date', date.toISOString());
                  submission.set('time', time);
                  submission.set('name', guestData.name);
                  submission.set('phone', guestData.phone);

                  toast.promise(
                    fetcher.submit(submission, { method: 'post' }),
                    {
                      loading: 'Processing your reservation...',
                      success: 'Reservation confirmed.',
                      error:
                        'Reservation failed. Please check your connection.',
                    },
                  );
                }}
              />
            </div>
          )}
        </div>
      </section>

      <ChatWidget
        bookingContext={{
          serviceId: serviceId ?? undefined,
          date: date ? date.toISOString() : undefined,
          time: time ?? undefined,
        }}
      />
    </>
  );
}
