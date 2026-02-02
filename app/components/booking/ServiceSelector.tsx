import { Card, CardContent } from '@/components/ui/card';

/**
 * Service selection step.
 */
// export default function ServiceSelector({
//   value,
//   onChange,
// }: {
//   value: string | null;
//   onChange: (value: string) => void;
// }) {
//   const services = [
//     { id: 'hair', label: 'Hair Styling' },
//     { id: 'skincare', label: 'Skincare' },
//     { id: 'nails', label: 'Nail Services' },
//     { id: 'wellness', label: 'Wellness' },
//   ];

//   return (
//     <div>
//       <h2 className="text-xl font-medium mb-4">Select a Service</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {services.map((service) => (
//           <Card
//             key={service.id}
//             onClick={() => onChange(service.id)}
//             className={`cursor-pointer transition ${
//               value === service.id ? 'ring-2 ring-primary' : 'hover:bg-muted'
//             }`}
//           >
//             <CardContent className="p-6">{service.label}</CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function ServiceSelector({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (v: string) => void;
}) {
  const services = [
    { id: 'hair', label: 'Hair Styling', duration: '60 min' },
    { id: 'skincare', label: 'Skincare', duration: '45 min' },
    { id: 'nails', label: 'Nail Services', duration: '30 min' },
    { id: 'wellness', label: 'Wellness', duration: '90 min' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-foreground/70">
        01. Select Treatment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
            className={`group relative flex flex-col items-start p-6 text-left transition-all border rounded-none ${
              value === s.id
                ? 'border-primary bg-primary/5 shadow-[0_0_20px_rgba(197,160,89,0.1)]'
                : 'border-border hover:border-primary/50 bg-card'
            }`}
          >
            <span
              className={`text-lg font-serif mb-1 ${value === s.id ? 'text-primary' : ''}`}
            >
              {s.label}
            </span>
            <span className="text-[10px] uppercase tracking-tighter opacity-60">
              Starts at {s.duration}
            </span>
            {value === s.id && (
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
