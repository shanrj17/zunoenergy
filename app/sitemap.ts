import { MetadataRoute } from 'next'
import { STATES_LIST } from '@/lib/states-data'
import { CITIES_LIST } from '@/lib/cities-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.zunoenergy.com'

    // 1. Static Routes
    const staticRoutes = [
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

    // Helper to add a route for all languages
    const addRoute = (route: string, priority = 0.8) => {
        // English
        sitemapEntries.push({
            url: `${baseUrl}/en${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: priority,
        })
        // Spanish
        sitemapEntries.push({
            url: `${baseUrl}/es${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: priority,
        })
    }

    // Add Static Routes
    staticRoutes.forEach(route => addRoute(route, route === '' ? 1 : 0.8))

    // 2. Dynamic State Routes
    STATES_LIST.forEach(state => {
        addRoute(`/states/${state.slug}`, 0.9)

        // 3. Dynamic City Routes
        if (state.slug in CITIES_LIST) {
            CITIES_LIST[state.slug].forEach(city => {
                addRoute(`/states/${state.slug}/${city.slug}`, 0.8)
            })
        }
    })

    return sitemapEntries
}
