import { STATES_LIST } from '@/lib/states-data'
import { CONTENT_UPDATES } from '@/lib/seo-config'

export async function GET() {
    const baseUrl = 'https://www.zunoenergy.com'
    const lastMod = CONTENT_UPDATES.core

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

    const urls = staticRoutes.map(route => {
        return `
        <url>
            <loc>${baseUrl}/en${route}</loc>
            <lastmod>${lastMod}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>${route === '' ? '1.0' : '0.8'}</priority>
        </url>`
    }).join('')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</urlset>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        },
    })
}
