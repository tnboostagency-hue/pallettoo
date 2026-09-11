import type { MetadataRoute } from "next";
import { products } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "ar"].flatMap((lang) =>
    [
      "",
      "about-us",
      "products",
      "contact-us",
      ...products.map((p) => "product/" + p.slug),
    ].map((route) => ({
      url: `https://pallettoo.com/${lang}${route ? "/" + route : ""}`,
      alternates: {
        languages: {
          en: `https://pallettoo.com/en${route ? "/" + route : ""}`,
          ar: `https://pallettoo.com/ar${route ? "/" + route : ""}`,
        },
      },
    })),
  );
}
