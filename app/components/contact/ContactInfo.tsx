/**
 * Displays business contact information.
 */
export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-12">
      <div className="space-y-2">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
          Location
        </h3>
        <p className="text-sm font-light leading-relaxed text-muted-foreground">
          Bole, Addis Ababa
          <br />
          Ethiopia
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
          Inquiries
        </h3>
        <p className="text-sm font-light text-muted-foreground">
          +251 900 000 000
        </p>
        <p className="text-sm font-light text-muted-foreground">
          hello@elitebeauty.com
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
          Hours
        </h3>
        <p className="text-sm font-light text-muted-foreground">
          Mon – Sat: 09:00 – 19:00
        </p>
      </div>
    </div>
  );
}
