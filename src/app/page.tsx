import { fetchLandingPage } from '@/api';
import HelpSection from '@/components/help-section';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';

export default async function Home() {
  const { data } = await fetchLandingPage();

  return (
    <>
      {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))}
    </>
  );
}
