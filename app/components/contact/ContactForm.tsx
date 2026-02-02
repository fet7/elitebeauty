import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(6, 'Phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm() {
  const form = useForm({
    defaultValues: { name: '', phone: '', message: '' },
    validators: {
      onChange: contactSchema,
      onBlur: contactSchema,
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      await toast.promise(new Promise((r) => setTimeout(r, 800)), {
        loading: 'Sending...',
        success: 'Message sent.',
        error: 'Error.',
      });
      formApi.reset();
    },
  });

  return (
    <form
      className="space-y-4 md:space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form.Field name="name">
          {(field) => (
            <Field
              data-invalid={
                field.state.meta.isTouched && !field.state.meta.isValid
              }
            >
              <FieldLabel className="text-[10px] uppercase tracking-widest opacity-70">
                Name
              </FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Your name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </FieldContent>
              <FieldError
                className="text-[10px]"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        </form.Field>

        <form.Field name="phone">
          {(field) => (
            <Field
              data-invalid={
                field.state.meta.isTouched && !field.state.meta.isValid
              }
            >
              <FieldLabel className="text-[10px] uppercase tracking-widest opacity-70">
                Phone
              </FieldLabel>
              <FieldContent>
                <Input
                  placeholder="+251..."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all"
                />
              </FieldContent>
              <FieldError
                className="text-[10px]"
                errors={field.state.meta.errors}
              />
            </Field>
          )}
        </form.Field>
      </div>

      <form.Field name="message">
        {(field) => (
          <Field
            data-invalid={
              field.state.meta.isTouched && !field.state.meta.isValid
            }
          >
            <FieldLabel className="text-[10px] uppercase tracking-widest opacity-70">
              Message
            </FieldLabel>
            <FieldContent>
              <Textarea
                rows={3} // Compact for mobile
                placeholder="How can we help?"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="bg-transparent border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-all resize-none"
              />
            </FieldContent>
            <FieldError
              className="text-[10px]"
              errors={field.state.meta.errors}
            />
          </Field>
        )}
      </form.Field>

      <Button
        type="submit"
        className="w-full md:w-auto px-12 rounded-none text-[10px] uppercase tracking-[0.2em]"
        disabled={!form.state.canSubmit}
      >
        Send Message
      </Button>
    </form>
  );
}
