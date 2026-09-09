import type { MetadataRoute } from 'next'

const siteUrl = 'https://shreekamdhenugaushala.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '#about',
    '#our-cows',
    '#cow-care',
    '#medical-care',
    '#donate',
    '#sponsor-a-cow',
    '#visit',
    '#volunteer',
    '#team',
    '#gallery',
    '#faq',
    '#contact',
    '#gaushala-in-surat',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/donate' || route === '/visit'
          ? 0.9
          : 0.7,
  }))
}