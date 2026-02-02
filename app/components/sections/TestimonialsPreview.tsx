import { Twitter } from 'lucide-react';

/**
 * Testimonials preview section.
 *
 * Builds trust by showcasing customer feedback
 * on public-facing pages.
 */
export default function TestimonialsPreview() {
  const testimonials = [
    {
      handle: '@sarahm_beauty',
      quote:
        'Absolutely amazing experience. The staff were professional and attentive, and I felt truly taken care of.',
      name: 'Sarah M.',
      date: 'Feb 1',
    },
    {
      handle: '@dan_k_wellness',
      quote:
        'From the moment I walked in, everything felt premium. My results exceeded expectations. Best skin prep I’ve had in years.',
      name: 'Daniel K.',
      date: 'Jan 28',
    },
    {
      handle: '@amina_style',
      quote:
        'EliteBeauty Studio is my go-to place for relaxation and self-care. Highly recommended. Their signature blow-dry is next level.',
      name: 'Amina R.',
      date: 'Jan 15',
    },
  ];

  return (
    <section className="w-full py-24 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
            Community
          </span>
          <h2 className="text-3xl md:text-4xl font-serif">
            Kind Words from Our Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className=" p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Subtle Twitter-style Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                  <span className="text-xs font-serif font-bold text-zinc-300">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold leading-none">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground leading-none mt-1">
                    {t.handle}
                  </p>
                </div>
                <Twitter
                  size={14}
                  className="text-[#1DA1F2] opacity-20 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <p className="text-sm leading-relaxed text-zinc-700 font-light italic">
                “{t.quote}”
              </p>

              <div className="mt-4 pt-4 border-t border-zinc-50 flex justify-between items-center text-[9px] uppercase tracking-widest text-muted-foreground">
                <span>{t.date}</span>
                <span className="text-primary/50">Verified Visit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
