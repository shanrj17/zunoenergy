import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.zunoenergy.com'

    // Base routes that exist in both languages
    const routes = [
        '',
        '/smart-energy-checkup',
        '/calculator',
        '/solar',
        '/learn/energy-tips',
        '/states',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms-and-conditions'
    ]

    const sitemapEntries: MetadataRoute.Sitemap = []

    routes.forEach(route => {
        // English version
        sitemapEntries.push({
            url: `${baseUrl}/en${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        })

        // Spanish version
        sitemapEntries.push({
            url: `${baseUrl}/es${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.8,
        })
    })

    return sitemapEntries
}
