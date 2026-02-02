import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

/**
 * Preview section for core services.
 *
 * Used on the home page to introduce key offerings
 * and drive users to the full services page.
 */
export default function ServicesPreview() {
  const services = [
    {
      title: 'Hair Styling',
      image:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
      description: 'Artisanal cuts and bespoke color.',
    },
    {
      title: 'Skincare',
      image:
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop',
      description: 'Advanced clinical rejuvenation.',
    },
    {
      title: 'Nail Art',
      image:
        'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=1000&auto=format&fit=crop',
      description: 'Precision manicures and luxury finishes.',
    },
    {
      title: 'Wellness',
      image:
        'https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1000&auto=format&fit=crop',
      description: 'Restorative rituals for mind and body.',
    },
  ];

  return (
    <section className="w-full py-24 md:py-32">
      {/* 1. Constrained Header */}
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
              The Menu
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight">
              Exceptional <span className="italic">Treatments</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[10px] uppercase tracking-[0.2em] font-medium border-b border-primary/30 pb-1 hover:border-primary transition-all inline-flex items-center gap-2"
          >
            View All Services <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* 2. Full-Width Grid (No Container) */}
      <div className="w-full px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-0">
          {services.map((service, i) => (
            <Link
              key={i}
              to="/services"
              className="group relative aspect-4/5 md:aspect-3/4 overflow-hidden bg-zinc-100"
            >
              <img
                src={service.image}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                alt={service.title}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 font-medium">
                  {service.title}
                </p>
                <p className="text-white text-sm md:text-base font-light leading-relaxed max-w-50">
                  {service.description}
                </p>

                {/* Subtle "Explore" reveal */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="text-[9px] uppercase tracking-widest text-white/60 border-b border-white/20 pb-1">
                    Explore Treatment
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
