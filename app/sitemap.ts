import { MetadataRoute } from "next";
import { webUrl } from "./[locale]/context";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: webUrl,
      lastModified: new Date(),
    },
  ];
}
