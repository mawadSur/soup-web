import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://gazasoupkitchen.com',
    sitemap: 'https://gazasoupkitchen.com/sitemap.xml',
  };
}
