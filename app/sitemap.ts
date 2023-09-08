import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.bobbyho.dev/en-UK',
            lastModified: new Date(),
        },
        {
            url: 'https://www.bobbyho.dev/zh-HK',
            lastModified: new Date(),
        },
    ]
}
