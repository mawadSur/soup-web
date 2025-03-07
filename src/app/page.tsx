import GetInvolved from '@/components/get-involved';
import Hero from '@/components/hero';
import Latest from '@/components/latest';
import Media from '@/components/media';
import About from '@/components/about';
import HelpSection from '@/components/help-section';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';
import MerchSection from '@/components/merch-section';
import Gallery from '@/components/gallery';
import GazaAid from '@/components/gaza-aid';

export default async function Home() {
  // const { data } = await fetchLandingPage();

  return (
    <>
      {/* {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))} */}

      <Hero />
      <GetInvolved />
      <Latest />
      <Media />
      <About />
      <HelpSection />
      <GazaAid />
      <Gallery />
      <MerchSection />
    </>
  );
}
