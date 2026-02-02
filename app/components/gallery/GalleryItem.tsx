/**
 * Single gallery item.
 * Set to h-auto to support the masonry stacking.
 */
export default function GalleryItem({
  src,
  category,
}: {
  src: string;
  category: string;
}) {
  return (
    <div className="group relative w-full overflow-hidden bg-muted border-[0.5px] border-background/20">
      <img
        src={src}
        alt={category}
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 block"
        loading="lazy"
      />

      {/* Editorial Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-background/90 via-background/20 to-transparent">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          {category}
        </p>
        <div className="h-px w-8 bg-primary mt-2 group-hover:w-12 transition-all duration-700" />
      </div>
    </div>
  );
}
