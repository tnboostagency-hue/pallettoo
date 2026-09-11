import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import {
  Home,
  About,
  Products,
  Contact,
  Action,
  ProductGrid,
} from "@/components/site";
import { Gallery } from "@/components/gallery";
import { copy, products, Locale, tr } from "@/lib/content";
import galleries from "@/lib/galleries.json";
const routes = [
  "",
  "about-us",
  "products",
  "contact-us",
  ...products.map((p) => "product/" + p.slug),
];
export function generateStaticParams() {
  return routes.map((route) => ({ slug: route ? route.split("/") : [] }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { lang, slug = [] } = await params;
  const locale = lang === "ar" ? "ar" : "en";
  const route = slug.join("/");
  const title =
    route === ""
      ? tr(locale, "Sustainable Presswood Pallets", "طبالي خشب مضغوط مستدامة")
      : route === "about-us"
        ? tr(locale, "About us", "من نحن")
        : route === "products"
          ? tr(locale, "Our products", "منتجاتنا")
          : route === "contact-us"
            ? tr(locale, "Contact us", "تواصل معنا")
            : products.find((p) => route === "product/" + p.slug)?.name ||
              "Pallettoo";
  return {
    title,
    description: copy[locale].intro,
    alternates: {
      canonical: `/${locale}${route ? "/" + route : ""}`,
      languages: {
        en: `/en${route ? "/" + route : ""}`,
        ar: `/ar${route ? "/" + route : ""}`,
      },
    },
    openGraph: {
      title,
      description: copy[locale].intro,
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { lang, slug = [] } = await params;
  if (lang !== "en" && lang !== "ar") notFound();
  const l: Locale = lang;
  const route = slug.join("/");
  if (!routes.includes(route)) notFound();
  if (!route) return <Home lang={l} />;
  if (route === "about-us") return <About lang={l} />;
  if (route === "products") return <Products lang={l} />;
  if (route === "contact-us") return <Contact lang={l} />;
  const product = products.find((p) => route === "product/" + p.slug);
  if (!product) notFound();
  const c = copy[l];
  const images = galleries[product.slug as keyof typeof galleries];
  return (
    <>
      <section className="section wrap product-detail">
        <Link className="text-link back-link" href={`/${l}/products`}>
          <ArrowLeft className="direction-icon" size={17} />
          {c.back}
        </Link>
        <div className="split">
          <Gallery
            images={images.length ? images : [product.image]}
            name={product.name}
            lang={l}
          />
          <div className="detail-copy">
            <p className="eyebrow">
              {tr(l, "ENGINEERED PRESSWOOD PALLET", "طبلية خشب مضغوط")}
            </p>
            <h1 dir="ltr">{product.name}</h1>
            <span className="certified">
              <ShieldCheck size={17} /> ISO CERTIFIED
            </span>
            <p className="body-copy">{c.description}</p>
            <h2>{c.specs}</h2>
            <dl className="spec-list">
              {[
                [c.dimension, `1000 × 1200 ${c.mm}`],
                [c.dynamic, `2 ${c.tons}`],
                [c.stack, `6 ${c.tons}`],
                [c.height, `135 ${c.mm}`],
                [c.weight, `20 ${c.kg}`],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <Action lang={l} href="contact-us">
              {c.quote}
            </Action>
            <p className="form-note">
              {tr(
                l,
                "Convenient entry points for easy handling and transportation.",
                "نقاط دخول عملية لسهولة المناولة والنقل.",
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="section wrap related">
        <p className="eyebrow">{c.range}</p>
        <h2>{tr(l, "Explore the collection.", "اكتشف المجموعة.")}</h2>
        <ProductGrid lang={l} />
      </section>
    </>
  );
}
