import GalleryItem from '@/components/gallery/GalleryItem';

/**
 * Public gallery page.
 * Redesigned using CSS Columns for a true masonry effect that
 * eliminates gaps and overlapping section content.
 */
export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200',
      cat: 'Artistry',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200',
      cat: 'The Sanctuary',
    },
    {
      src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200',
      cat: 'Atmosphere',
    },
    {
      src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200',
      cat: 'Skin Ritual',
    },
    {
      src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200',
      cat: 'Details',
    },
    {
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1200',
      cat: 'Wellness',
    },
    {
      src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200',
      cat: 'Styling',
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Editorial Header */}
      <section className="w-full border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium">
            Visual Story
          </span>
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight">
            The <span className="italic">Portfolio</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            A curated look at the craftsmanship, the tranquility, and the
            refined transformations within our studio.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Grid - Full Bleed */}
      <section className="w-full overflow-hidden">
        {/* Using columns instead of grid to prevent overlapping footer links */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 space-y-0">
          {galleryImages.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <GalleryItem src={item.src} category={item.cat} />
            </div>
          ))}
        </div>
      </section>

      {/* Subtle Footer Invitation */}
      <section className="py-32 text-center border-t border-border/20 relative z-10 bg-background">
        <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
          Experience it yourself
        </p>
        <button className="text-sm font-serif italic border-b border-primary/40 pb-1 hover:border-primary transition-all">
          View more on Instagram
        </button>
      </section>
    </div>
  );
}
