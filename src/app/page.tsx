import Gallery from '@/components/gallery';
import About from '@/components/about';
import GetInvolved from '@/components/get-involved';
import Hero from '@/components/hero';
import TopHero from '@/components/top-hero';
import LatestDonations from '@/components/latest-donations';
import HelpSection from "@/components/help-section";

export default function Home() {
  return (
    <>
      <TopHero />
      <GetInvolved />
      <Hero />
      <About />
      <HelpSection />
      <LatestDonations />
      <Gallery />
    </>
  );
}
