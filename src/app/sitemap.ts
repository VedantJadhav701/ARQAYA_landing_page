import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arqaya.com'
  
  const staticPages = [
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
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const insights = getAllPosts('insights').map(post => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const caseStudies = getAllPosts('case-studies').map(post => ({
    url: `${baseUrl}/case-studies/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...insights, ...caseStudies]
}
