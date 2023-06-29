import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bobbyho.vercel.app/en-UK',
            lastModified: new Date(),
        },
        {
            url: 'https://bobbyho.vercel.app/zh-HK',
            lastModified: new Date(),
        },
    ]
}
