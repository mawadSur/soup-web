import { HeroSection } from '@/types';
import { ColumnLayout } from './column-layout';
import { DONATION_URL } from '@/constant';

export default function Mission() {
  // { data }: { data: HeroSection }
  return (
    <ColumnLayout
      imageSrc="/gaza-kid.webp"
      imageAlt="Gaza humanitarian activity"
      title="Our Mission"
      description="Right now in Gaza, every bite is a story of resilience and hope. Your contribution extends far beyond nourishment—it’s a lifeline, a promise of better days. Stand with us in this mission of compassion and dignity. Your donation is their tomorrow. Act now."
      buttonText="Support Us"
      buttonLink={DONATION_URL}
      imagePosition="left"
    />
  );
}
