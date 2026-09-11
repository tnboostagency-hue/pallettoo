import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/site";
import { Locale, copy } from "@/lib/content";
import assets from "@/lib/assets.json";
const jost = localFont({
  src: "../../fonts/jost.woff2",
  variable: "--font-jost",
  display: "swap",
});
const changa = localFont({
  src: "../../fonts/changa-arabic.woff2",
  variable: "--font-changa",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://pallettoo.com"),
  title: {
    default: "Pallettoo | Sustainable Presswood Pallets",
    template: "%s | Pallettoo",
  },
  description:
    "Engineered presswood pallets, proudly manufactured in Saudi Arabia.",
  icons: { icon: assets.favicon, apple: assets.favicon },
};
export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "ar") notFound();
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`${jost.variable} ${changa.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          {lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
        </a>
        <Header lang={lang as Locale} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pallettoo",
              url: "https://pallettoo.com",
              logo: "https://pallettoo.com" + assets.logo,
              email: "info@pallettoo.com",
              telephone: "+966500880597",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2nd Industrial City, Induscom",
                addressLocality: "Dammam",
                postalCode: "34521",
                addressCountry: "SA",
              },
              description: copy[lang].intro,
            }),
          }}
        />
      </body>
    </html>
  );
}
