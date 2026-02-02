import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

/**
 * Hero section for public-facing landing pages.
 *
 * Used to communicate brand value and drive primary actions.
 */
export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Width/Height */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        {/* The "Veil": Darker on bottom and left for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12">
        <div className="max-w-3xl space-y-8">
          {/* Section Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary-foreground/90">
              Est. 2024 • Elite Studio
            </span>
          </div>

          {/* Headline - Balanced Serif */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
            Rediscover Your <br />
            <span className="italic font-normal text-primary">
              Natural Radiance
            </span>
          </h1>

          {/* Description - Not jumbo, just legible */}
          <p className="max-w-lg text-sm md:text-base text-white/80 font-light leading-relaxed tracking-wide">
            Experience a sanctuary of elegance where master stylists and
            skincare experts craft a personalized journey for your unique
            beauty.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start gap-5 pt-4">
            <Button
              size="lg"
              asChild
              className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-14 text-xs uppercase tracking-widest transition-all"
            >
              <Link to="/booking">Reserve an Appointment</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-none border-white/30 bg-transparent px-10 h-14 text-xs uppercase tracking-widest backdrop-blur-sm"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}
