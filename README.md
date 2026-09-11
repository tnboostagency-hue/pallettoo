# Pallettoo

Next.js App Router, React, TypeScript, Tailwind CSS and shadcn/ui. A modern bilingual reconstruction of the public Pallettoo WordPress website.

## Run

```sh
npm install
npm run dev
```

English: http://localhost:3000/en

Arabic: http://localhost:3000/ar

```sh
npm run build
npm start
npm run lint
npm run typecheck
```

## Pages and features

- Home, about, product catalogue, contact and three product detail pages in both languages.
- Server-rendered/static pages with locale-aware metadata, canonical URLs, hreflang, sitemap and robots.txt.
- Original logo, favicon, photographs and product galleries stored locally in `public/assets`.
- Locally hosted Jost and Changa fonts, including the Arabic character subset.
- Responsive navigation, accessible shadcn sheets, accordions, forms and product galleries.
- Enquiries prepare a message in WhatsApp for the visitor to review and send. No message is sent by the website itself. Telephone and email links use the original business contact details.
- Legacy WordPress main-page/product URLs redirect to corresponding English routes.

## Vercel

Import this repository into Vercel, select Next.js, and use the repository root. Build command: `npm run build`. No environment variables or database are required. Review the Vercel preview before attaching pallettoo.com. The existing GoDaddy website and domain have not been changed.

## Content and migration notes

Content was collected from https://pallettoo.com on 6 September 2026. English wording is edited for the new corporate design, and Arabic translations are provided. This is a modern reconstruction, not a pixel-identical WordPress theme port.

The public source lists the same specifications on all three product pages: 1000 × 1200 mm, 2 tonnes dynamic load, 6 tonnes stacking load, 135 mm height, 20 kg weight. These values are preserved rather than inferred from model names. Confirm model-specific values before launch.

Published production/certification/conservation claims are inherited from the source and should receive the business owner's final review. The source's mathematically unclear claim of a “300%” reduction in truck trips is expressed qualitatively in the new copy.

The old Google translator placeholder, failing contact form, nonfunctional social links, and WordPress review submission were not carried over. There is no cart, checkout, payment processing, CMS, or automatic email backend; the public source catalogue used enquiry/read-more flows. No WordPress credentials or private customer database is required.

Source content and asset provenance are retained in `source-site` locally (excluded from Git and Vercel). `scripts/collect.mjs` collects the public pages and assets, and `scripts/prepare.mjs` extracts an asset map and readable source content. These are migration utilities, not production runtime code.

Edit text in `src/lib/content.ts` and `src/components/site.tsx`, products in `src/lib/content.ts`, gallery paths in `src/lib/galleries.json`, and branding/layout styles in `src/app/site.css`.
