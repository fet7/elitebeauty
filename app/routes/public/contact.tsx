import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

/**
 * Public contact page.
 *
 * Provides alternative communication channels
 * outside of online booking.
 */
export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: Title & Info */}
          <div className="space-y-8 md:space-y-12">
            <header className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium">
                The Sanctuary
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-tight">
                Connect <br className="hidden md:block" />
                <span className="italic">with us</span>
              </h1>
              <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                Have a question or special request? We’d love to hear from you.
              </p>
            </header>

            <div className="hidden lg:block border-t border-border/40 pt-12">
              <ContactInfo />
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full">
            <ContactForm />
            {/* Show info below form on mobile only */}
            <div className="lg:hidden border-t border-border/40 mt-16 pt-12">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
