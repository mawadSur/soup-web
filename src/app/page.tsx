import GetInvolved from '@/components/get-involved';

import Media from '@/components/media';
import About from '@/components/about';
import HelpSection from '@/components/help-section';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';
import MerchSection from '@/components/merch-section';
import Gallery from '@/components/gallery';
import GazaAid from '@/components/gaza-aid';
import Mission from '@/components/mission';

export default async function Home() {
  // const { data } = await fetchLandingPage();

  return (
    <>
      {/* {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))} */}
      <GetInvolved />
      <Mission />
      <Media />
      <About />
      <HelpSection />
      <GazaAid />
      <Gallery />
      <MerchSection />
    </>
  );
}
