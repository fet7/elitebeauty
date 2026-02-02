import BottomCTA from '@/components/sections/BottomCTA';
import { BrandStatement } from '@/components/sections/BrandStatement';
import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import TestimonialsPreview from '@/components/sections/TestimonialsPreview';

/**
 * Public home page.
 *
 * Acts as the primary marketing entry point.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <BrandStatement />
      <TestimonialsPreview />
      <BottomCTA />
    </>
  );
}
