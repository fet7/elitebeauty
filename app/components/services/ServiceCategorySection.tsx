import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  description: string;
  price?: string;
}

interface SectionProps {
  title: string;
  description?: string;
  services: Service[];
}

export default function ServiceCategorySection({
  title,
  description,
  services,
}: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: Category Info */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm">
              {description}
            </p>
          )}
          <div className="pt-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all"
            >
              Book from this category <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Right: Service List */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-border/40">
            {services.map((service, index) => (
              <div
                key={index}
                className="group py-8 first:pt-0 last:pb-0 flex justify-between items-start gap-8"
              >
                <div className="space-y-1 flex-1">
                  <h3 className="text-base font-medium group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light max-w-md leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {service.price && (
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-serif">${service.price}</span>
                    <span className="text-[9px] uppercase tracking-tighter text-muted-foreground">
                      Starting at
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
