import { z } from 'zod';

/**
 * Schema for guest booking submission.
 *
 * Used by TanStack Form and later by server actions.
 */
export const bookingGuestSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(6, 'Phone number is required'),
});

export type BookingGuestData = z.infer<
  typeof bookingGuestSchema
>;
