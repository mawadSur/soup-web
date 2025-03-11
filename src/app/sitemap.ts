import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const {
  //   data,
  // }: {
  //   data: {
  //     createdAt: string;
  //     updatedAt: string;
  //     navbar: Navbar;
  //   };
  // } = await fetchGlobalData();

  const LINKS = ['home', 'about', 'services', 'contact'];

  return LINKS.map((link) => ({
    url: `https://gazasoupkitchen.com/${link}`,
    lastModified: new Date(),
  }));
}
