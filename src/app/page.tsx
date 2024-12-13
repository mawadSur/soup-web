import About from '@/components/about';
import GetInvolved from '@/components/get-involved';
import Hero from '@/components/hero';
import LatestEvent from '@/components/latest-event';
import TopHero from '@/components/top-hero';
import Volunteer from '@/components/volunteer';
import HelpSection from "@/components/help-section";

export default function Home() {
  return (
    <>
      <TopHero />
      <GetInvolved />
      <Hero />
      <About />
      <HelpSection />
      <LatestEvent />
      <Volunteer />
    </>
  );
}
