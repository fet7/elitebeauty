import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

/**
 * Bottom call-to-action section.
 * * Reimagined as a "Final Invitation" with high-contrast luxury styling.
 */
export default function BottomCTA() {
  return (
    <section className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture/glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-500px bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center space-y-10">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium">
            Your Journey Awaits
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
            Ready to Experience <br />
            <span className="italic font-normal">Pure Refinement?</span>
          </h2>

          <p className="mt-6 max-w-lg mx-auto text-zinc-400 font-light text-sm md:text-base leading-relaxed">
            Step into a sanctuary where every detail is crafted for your comfort
            and every treatment is a celebration of you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          {/* Primary CTA */}
          <Button
            size="lg"
            asChild
            className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-14 text-xs uppercase tracking-widest transition-all shadow-2xl shadow-primary/20"
          >
            <Link to="/booking">Reserve Your Appointment</Link>
          </Button>

          {/* Secondary CTA - White/Zinc Ghost Button */}
          <Button
            size="lg"
            variant="outline"
            className="rounded-none border-zinc-800 text-zinc-300 hover:bg-white hover:text-black hover:border-white px-10 h-14 text-xs uppercase tracking-widest transition-all"
            asChild
          >
            <Link to="/services">View Treatment Menu</Link>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="pt-12 flex justify-center opacity-20">
          <div className="h-px w-24 bg-linear-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
