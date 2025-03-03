import { getDynamicPage } from '@/actions/strapi';
import DonatePage from '@/components/donate-page';
import { GalleryPage } from '@/components/gallery-page';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';

export default async function Dynamic({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  if (slug === 'gallery') {
    return <GalleryPage />;
  }

  if (slug === 'donate') {
    return <DonatePage />;
  }

  const { data } = await getDynamicPage(slug);

  if (!data) return null;

  return (
    <>
      {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))}
    </>
  );
}
