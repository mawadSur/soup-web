// import { getDynamicPage } from '@/actions/strapi';
import AboutPage from '@/components/about-page';
import DonatePage from '@/components/donate-page';
import { GalleryPage } from '@/components/gallery-page';
import MediaPage from '@/components/media-page';
// import { SectionRenderer } from '@/components/section-renderer';
// import { SectionData } from '@/types';

export async function generateStaticParams() {
  return [{ slug: '/' }, { slug: 'about' }, { slug: 'gallery' }, { slug: 'media' }, { slug: 'donation' }];
}

export default async function Dynamic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'gallery') {
    return <GalleryPage />;
  }

  if (slug === 'donation') {
    return <DonatePage />;
  }

  if (slug === 'media') {
    return <MediaPage />;
  }

  if (slug === 'about') {
    return <AboutPage />;
  }

  // const { data } = await getDynamicPage(slug);

  // if (!data) return null;

  return (
    <>
      {/* {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))} */}
    </>
  );
}
