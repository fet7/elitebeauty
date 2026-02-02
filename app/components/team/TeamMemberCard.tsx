import { Card } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamMemberCard({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="group space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-muted border border-border/10">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
            {role}
          </p>
          <h3 className="text-xl font-serif tracking-tight">{name}</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-3">
          {bio}
        </p>
      </div>
    </div>
  );
}
