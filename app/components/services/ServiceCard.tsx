import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

/**
 * Individual service card.
 *
 * Displays service information and a booking CTA.
 */
export default function ServiceCard({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price?: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-lg font-medium">{name}</h3>

        <p className="mt-2 text-sm text-muted-foreground flex-1">
          {description}
        </p>

        {price && <p className="mt-4 text-sm font-medium">From {price}</p>}

        <div className="mt-6">
          <Button asChild>
            <Link to="/booking">Book now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
