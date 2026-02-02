import ServiceCategorySection from '@/components/services/ServiceCategorySection';
import BottomCTA from '@/components/sections/BottomCTA';

/**
 * Public services page.
 *
 * Presents service offerings and pricing,
 * and drives users toward booking.
 */
export default function ServicesPage() {
  return (
    <>
      {/* 1. Page Header */}
      <section className="w-full bg-muted/20 border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
            The Menu
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Curated <span className="italic">Treatments</span>
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            A selection of signature experiences designed to restore balance,
            enhance natural beauty, and provide a sanctuary for the senses.
          </p>
        </div>
      </section>

      {/* 2. Service Categories */}
      <div className="space-y-12 py-12 md:py-20">
        <ServiceCategorySection
          title="Hair Styling"
          description="Master artistry for modern movement and timeless color."
          services={[
            {
              name: 'Women’s Haircut & Finish',
              description:
                'A bespoke cutting experience including a ritual wash and editorial styling.',
              price: '40',
            },
            {
              name: 'Dimensional Coloring',
              description:
                'Hand-painted highlights or full-color transitions using ammonia-free infusions.',
              price: '80',
            },
            {
              name: 'Signature Blow-Dry',
              description: 'Volume and shine treatments for lasting elegance.',
              price: '45',
            },
          ]}
        />

        <ServiceCategorySection
          title="Skincare"
          description="Scientific precision meets holistic skin health."
          services={[
            {
              name: 'Signature Radiance Facial',
              description:
                'Deep ultrasonic cleansing followed by a cold-pressed botanical infusion.',
              price: '60',
            },
            {
              name: 'Advanced Sculpting Facial',
              description:
                'Targeted micro-current therapy and manual lifting techniques.',
              price: '95',
            },
          ]}
        />

        <ServiceCategorySection
          title="Nail Artistry"
          description="Precision care and luxury finishes for hands and feet."
          services={[
            {
              name: 'The Modern Manicure',
              description:
                'Classic shaping with detailed cuticle work and long-wear pigment.',
              price: '25',
            },
            {
              name: 'Restorative Pedicure',
              description:
                'A soaking ritual with volcanic minerals and deep hydration.',
              price: '40',
            },
          ]}
        />
      </div>

      <BottomCTA />
    </>
  );
}
