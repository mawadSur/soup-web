import Gallery from '@/components/gallery';
import About from '@/components/about';
import GetInvolved from '@/components/get-involved';
import Hero from '@/components/hero';
import TopHero from '@/components/top-hero';
import LatestDonations from '@/components/latest-donations';

export default function Home() {
  return (
    <>
      <TopHero />
      <GetInvolved />
      <Hero />
      <About />
      <LatestDonations />
      <Gallery />
    </>
  );
}
