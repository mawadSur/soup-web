import { fetchLandingPage } from '@/api';
import LatestDonations from '@/components/latest-donations';
import { SectionRenderer } from '@/components/section-renderer';
import Volunteer from '@/components/volunteer';
import { SectionData } from '@/types';

export default async function Home() {
  const { data } = await fetchLandingPage();

  return (
    <>
      {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))}
      <LatestDonations />
      <Volunteer />
    </>
  );
}
