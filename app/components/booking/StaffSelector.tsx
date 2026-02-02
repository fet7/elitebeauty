export default function StaffSelector({
  value,
  onChange,
  disabled,
}: {
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  const staff = [
    {
      id: 'amina',
      name: 'Amina Hassan',
      role: 'Hair',
      image:
        'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=150&h=150&auto=format&fit=crop',
    },
    {
      id: 'daniel',
      name: 'Daniel Mekonnen',
      role: 'Skin',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
    },
    {
      id: 'sara',
      name: 'Sara Tesfaye',
      role: 'Nails',
      image:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'liya',
      name: 'Liya Bekele',
      role: 'Wellness',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop',
    },
  ];

  if (disabled) {
    return (
      <div className="opacity-40 select-none grayscale cursor-not-allowed">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-foreground/70 mb-6">
          02. Select Specialist
        </h2>
        <div className="p-10 border border-dashed text-center text-[10px] uppercase tracking-widest">
          Complete service selection to see available artists
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
          02. Select Specialist
        </h2>
        <button
          onClick={() => onChange('any')}
          className={`text-[10px] uppercase tracking-widest border-b transition-colors pb-1 ${
            value === 'any'
              ? 'text-primary border-primary'
              : 'text-muted-foreground border-transparent'
          }`}
        >
          Any Specialist
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {staff.map((member) => (
          <button
            key={member.id}
            onClick={() => onChange(member.id)}
            className={`group flex flex-col items-center gap-3 p-4 transition-all border rounded-none ${
              value === member.id
                ? 'border-primary bg-primary/5'
                : 'border-border/40 hover:border-primary/50'
            }`}
          >
            {/* The Actual Staff Picture */}
            <div
              className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-transform duration-300 group-hover:scale-105 ${
                value === member.id
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-border/20'
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover ${value === member.id ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'} transition-all`}
              />
            </div>

            <div className="text-center">
              <p
                className={`text-[11px] font-medium leading-tight ${value === member.id ? 'text-primary' : ''}`}
              >
                {member.name}
              </p>
              <p className="text-[9px] uppercase tracking-tighter text-muted-foreground">
                {member.role}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
