import { CONTENT_UPDATES } from '@/lib/seo-config'

export async function GET() {
    const baseUrl = 'https://www.zunoenergy.com'
    const lastMod = CONTENT_UPDATES.core

    const sitemaps = [
        'sitemap-core.xml',
        'sitemap-states-en.xml',
    ]

    const urls = sitemaps.map(sitemap => {
        return `
        <sitemap>
            <loc>${baseUrl}/${sitemap}</loc>
            <lastmod>${lastMod}</lastmod>
        </sitemap>`
    }).join('')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
</sitemapindex>`

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        },
    })
}
