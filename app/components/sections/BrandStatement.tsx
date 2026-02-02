/**
 * BrandStatement
 * * An editorial section featuring a full-bleed image that breaks the
 * traditional container grid for a high-fashion, high-impact aesthetic.
 */
export function BrandStatement() {
  return (
    <section className="w-full py-24 md:py-40  overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Full-Bleed Image Container */}
          <div className="relative w-full h-125 lg:h-175 lg:-ml-[calc((100vw-1280px)/2)] lg:w-[calc(100%+((100vw-1280px)/2))]">
            <div className="absolute inset-0 bg-zinc-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                alt="Elite Beauty Salon Sanctuary"
              />
              {/* Subtle overlay for luxury feel */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute bottom-12 right-0 bg-primary/95 text-primary-foreground p-8 md:p-12 shadow-2xl translate-x-1/4 hidden lg:block">
              <p className="text-3xl font-serif leading-tight">
                Crafting Beauty <br />
                <span className="text-sm uppercase tracking-[0.3em] opacity-80 font-sans italic">
                  Since 2012
                </span>
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="px-6 lg:px-0 space-y-10">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1]">
                A commitment to the{' '}
                <span className="italic font-normal text-primary">
                  extraordinary
                </span>
                .
              </h2>
            </div>

            <p className="text-zinc-600 font-light leading-relaxed max-w-md text-sm md:text-base">
              At EliteBeauty, we believe that beauty is not a service, but a
              sanctuary. Our specialists combine decades of expertise with the
              world's most refined organic treatments to deliver a bespoke
              experience that honors your individuality.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-6 border-t border-zinc-100">
              <div className="space-y-2">
                <p className="text-3xl font-serif">12k+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Satisfied Guests
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif">14</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Master Stylists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
