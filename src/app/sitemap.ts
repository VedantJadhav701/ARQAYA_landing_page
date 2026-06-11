import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dpulseai.com';

  const routes = [
    '',
    '/about',
    '/what-we-do',
    '/subsidiaries',
    '/subsidiaries/tenetx',
    '/subsidiaries/texflow',
    '/industries',
    '/careers',
    '/contact',
    '/insights',
    '/case-studies',
    '/security',
    '/privacy',
    '/compliance',
    '/governance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
