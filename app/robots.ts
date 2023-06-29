import { MetadataRoute } from 'next'
import { webUrl } from './[locale]/context'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${webUrl}/sitemap.xml`,
    }
}