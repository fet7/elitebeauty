import TeamMemberCard from '@/components/team/TeamMemberCard';

export default function TeamPage() {
  const team = [
    {
      name: 'Amina Hassan',
      role: 'Senior Hair Stylist',
      image:
        'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop',
      bio: 'Master of editorial styling and color transformation with 8+ years of industry expertise.',
    },
    {
      name: 'Daniel Mekonnen',
      role: 'Skincare Specialist',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      bio: 'Expert in advanced dermabrasion and holistic skin health solutions.',
    },
    {
      name: 'Sara Tesfaye',
      role: 'Nail Artist',
      image:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
      bio: 'Precision-focused technician specializing in luxury nail art and restorative care.',
    },
    {
      name: 'Liya Bekele',
      role: 'Wellness Therapist',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
      bio: 'Dedicated to restorative bodywork and meditative wellness experiences.',
    },
  ];

  return (
    <>
      <section className="w-full bg-muted/20 border-b border-border/40">
        <div className="mx-auto max-w-3xl px-6 py-12 md:py-20 text-center space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
            The Artistry
          </span>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight">
            Meet Our{' '}
            <span className="italic font-normal text-primary">Specialists</span>
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            Our team of dedicated artists brings together years of global
            experience to provide a sanctuary of beauty and refinement.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {team.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
