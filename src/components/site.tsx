import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Leaf,
  Recycle,
  ShieldCheck,
  Globe2,
  Truck,
  MapPin,
  Phone,
  Mail,
  Check,
  TreePine,
  PackageCheck,
  Shield,
  BadgeCheck,
  Handshake,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { copy, Locale, tr, products, nav, benefits } from "@/lib/content";
import assets from "@/lib/assets.json";
import { EnquiryForm } from "./enquiry-form";
export function Action({
  lang,
  href,
  children,
  outline = false,
}: {
  lang: Locale;
  href: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <Button asChild size="lg" variant={outline ? "outline" : "default"}>
      <Link href={`/${lang}/${href}`}>
        {children}
        <ArrowUpRight className="direction-icon" />
      </Link>
    </Button>
  );
}
export function ProductGrid({ lang }: { lang: Locale }) {
  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <Card key={p.slug} className="product-card">
          <Link
            href={`/${lang}/product/${p.slug}`}
            className="product-image"
            aria-label={`${copy[lang].view}: ${p.name}`}
          >
            <span className="product-number">
              0{i + 1} / {tr(lang, "PRESSWOOD", "خشب مضغوط")}
            </span>
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(max-width: 700px) 90vw, 30vw"
            />
          </Link>
          <CardContent className="product-body">
            <p className="eyebrow">
              {tr(lang, "ENGINEERED WOOD PALLET", "طبلية خشب مضغوط")}
            </p>
            <h3 dir="ltr">{p.name}</h3>
            <p className="product-meta" dir="ltr">
              1000 × 1200 {copy[lang].mm} <span>·</span> 2 {copy[lang].tons}
            </p>
            <Link className="text-link" href={`/${lang}/product/${p.slug}`}>
              {copy[lang].view}
              <ArrowUpRight className="direction-icon" size={19} />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export function Sustainability({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <section className="sustain-section">
      <div className="wrap split">
        <div className="sustain-visual">
          <Image
            src={assets.sustainabilityAi}
            alt={tr(
              lang,
              "Tree growing from a presswood pallet",
              "شجرة تنمو من طبلية خشب مضغوط",
            )}
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <span className="image-caption">
            <Leaf size={17} />
            {tr(lang, "Giving wood a second life.", "نمنح الخشب حياة ثانية.")}
          </span>
        </div>
        <div className="sustain-copy">
          <p className="eyebrow">{c.sustain}</p>
          <h2>{c.sustainTitle}</h2>
          <p>{c.sustainText}</p>
          <Accordion type="single" collapsible defaultValue="recycle">
            {[
              [
                "recycle",
                "Recyclability & circular economy",
                "إعادة التدوير والاقتصاد الدائري",
                "At the end of their lifespan, presswood pallets can be recycled, extending the life cycle of materials and minimising waste.",
                "يمكن إعادة تدوير طبالي الخشب المضغوط في نهاية عمرها، لإطالة دورة حياة المواد وتقليل النفايات.",
              ],
              [
                "carbon",
                "Reduced carbon footprint",
                "بصمة كربونية أقل",
                "Space-efficient stacking helps optimise transportation and reduces the resources needed across the supply chain.",
                "يساعد التكديس الموفر للمساحة على تحسين النقل وتقليل الموارد المستخدمة في سلسلة الإمداد.",
              ],
              [
                "waste",
                "Waste reduction",
                "تقليل النفايات",
                "We give wood waste that would otherwise end up in landfills a new purpose through presswood pallet production.",
                "نمنح مخلفات الخشب التي قد تنتهي في المكبات غرضاً جديداً من خلال تصنيع طبالي الخشب المضغوط.",
              ],
            ].map(([key, en, ar, text, arabic]) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>{tr(lang, en, ar)}</AccordionTrigger>
                <AccordionContent>{tr(lang, text, arabic)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function OriginalContentSections({ lang }: { lang: Locale }) {
  const originalObjectives = [
    ["WE INNOVATE", "نبتكر", "Innovating tomorrow's solutions for today's challenges.", "نبتكر حلول الغد لتحديات اليوم."],
    ["SAFETY", "السلامة", "A shield of assurance: your security, our priority.", "حماية موثوقة: سلامتك هي أولويتنا."],
    ["SUSTAINABILITY", "الاستدامة", "Cultivating a greener legacy for a vibrant and sustainable future.", "نصنع إرثاً أكثر اخضراراً لمستقبل نابض ومستدام."],
    ["COMMITMENT", "الالتزام", "Promise fulfilled: exceeding expectations with unwavering dedication.", "نفي بوعودنا ونتجاوز التوقعات بتفانٍ ثابت."],
    ["ISO CERTIFIED", "معتمدة وفق ISO", "Pinnacle of excellence: recognised and certified to international standards.", "ذروة التميز: معتمدة وفق المعايير الدولية."],
  ];
  const characteristics = [
    ["QUALITY", "الجودة", "Redefining standards with precision engineering and excellence in every pressed wood pallet.", "نُعيد تعريف المعايير بهندسة دقيقة وتميز في كل طبلية خشب مضغوط."],
    ["STERILE", "معقمة", "Pest-free, hygienic pallets crafted to ensure safe, clean, and sustainable product transport.", "طبالي صحية وخالية من الآفات لنقل آمن ونظيف ومستدام."],
    ["READY FOR EXPORT", "جاهزة للتصدير", "Compliant, heat-treated pallets designed for global markets—dependable and export-ready.", "طبالي متوافقة ومعالجة حرارياً ومصممة للأسواق العالمية."],
    ["COST EFFECTIVE", "فعالة من حيث التكلفة", "Eco-smart pallets reduce waste, cut logistics costs, and maximise long-term value for clients.", "طبالي ذكية بيئياً تقلل الهدر وتكاليف النقل وتزيد القيمة طويلة الأجل."],
    ["IPPC · ISPM 15", "IPPC · ISPM 15", "Globally certified pallets meeting ISPM 15 standards—safe, treated, and trade-compliant.", "طبالي معتمدة عالمياً وفق ISPM 15، آمنة ومعالجة ومتوافقة مع متطلبات التجارة."],
    ["RECOVERABLE & RECYCLABLE", "قابلة للاستعادة والتدوير", "Durable pallets built for reuse, easily recyclable for circular economy and zero-waste goals.", "طبالي متينة قابلة لإعادة الاستخدام والتدوير، تدعم الاقتصاد الدائري وأهداف تقليل الهدر."],
  ];
  const icons = [Sprout, Shield, Recycle, Handshake, BadgeCheck];
  const capabilityIcons = [BadgeCheck, ShieldCheck, Globe2, Truck, PackageCheck, Recycle];
  return (
    <>
      <section className="feature-story-section">
        <div className="wrap split">
          <div className="feature-story-visual">
            <Image src={assets.presswoodAi} alt={tr(lang, "Engineered presswood pallet", "طبلية خشب مضغوط مُهندسة")} fill sizes="(max-width: 800px) 100vw, 45vw" />
          </div>
          <div>
            <p className="eyebrow">{tr(lang, "PRESSWOOD PALLETS", "طبالي الخشب المضغوط")}</p>
            <h2>{tr(lang, "A product that fits your operational needs.", "منتج يلائم احتياجات عملياتك.")}</h2>
            <p className="body-copy">{tr(lang, "Our presswood pallets are designed to endure demanding environments, offering strength and trustworthiness for your logistical needs. We proudly manufacture eco-friendly pallets with stringent quality control and a focus on customer satisfaction.", "صُممت طبالي الخشب المضغوط لتتحمل البيئات الصعبة، وتوفر القوة والموثوقية لاحتياجاتك اللوجستية. نفخر بتصنيع طبالي صديقة للبيئة مع رقابة صارمة على الجودة وتركيز واضح على رضا العملاء.")}</p>
            <Action lang={lang} href="products" outline>{tr(lang, "Discover our products", "اكتشف منتجاتنا")}</Action>
          </div>
        </div>
      </section>
      <section className="objectives-section">
        <div className="wrap">
          <p className="eyebrow">{tr(lang, "OUR OBJECTIVE", "هدفنا")}</p>
          <div className="objectives-heading">
            <h2>{tr(lang, "Exceptional excellence for your every need.", "تميز استثنائي لكل احتياجاتك.")}</h2>
            <p>{tr(lang, "Discover Pallettoo: crafting excellence for superior-quality pallet solutions. We combine export-ready performance with a commitment to responsible manufacturing and minimal waste.", "اكتشف باليتو: نصنع التميز في حلول الطبالي عالية الجودة. نجمع بين الأداء الجاهز للتصدير والالتزام بالتصنيع المسؤول وتقليل الهدر.")}</p>
          </div>
          <div className="objective-grid">
            {originalObjectives.map(([en, ar, text, arabic], index) => {
              const Icon = icons[index];
              return (
                <Card key={en}>
                  <CardContent>
                    <Icon strokeWidth={1.4} />
                    <h3>{tr(lang, en, ar)}</h3>
                    <p>{tr(lang, text, arabic)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <Sustainability lang={lang} />
      <section className="factory-section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{tr(lang, "GET TO KNOW PALLETTOO", "تعرّف على باليتو")}</p>
            <h2>{tr(lang, "Where excellence meets dedication.", "حيث يلتقي التميز بالتفاني.")}</h2>
            <p className="body-copy">{tr(lang, "We are the first factory in the Middle East producing engineered presswood pallets in different sizes. With approximately 1,250 pallets produced each day, our zero-waste approach supports our ISO-certified operation.", "نحن أول مصنع في الشرق الأوسط ينتج طبالي الخشب المضغوط المُهندسة بمقاسات مختلفة. وبإنتاج يقارب ١٬٢٥٠ طبلية يومياً، يدعم نهجنا الخالي من الهدر عملياتنا المعتمدة وفق ISO.")}</p>
            <div className="factory-facts"><span><strong>1,250+</strong>{tr(lang, "pallets daily", "طبلية يومياً")}</span><span><strong>ISO</strong>{tr(lang, "certified", "معتمد")}</span><span><strong>0</strong>{tr(lang, "waste ambition", "طموح للهدر")}</span></div>
          </div>
          <div className="factory-photo"><Image src={assets.factoryAi} alt={tr(lang, "Pallettoo manufacturing equipment", "معدات التصنيع في باليتو")} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        </div>
      </section>
      <section className="capabilities-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{tr(lang, "PRODUCT FEATURES", "خصائص المنتج")}</p>
              <h2>{tr(lang, "Product features that fit your needs.", "خصائص مصممة لتلائم احتياجاتك.")}</h2>
            </div>
            <Image src={assets.excellenceMark} alt="Pallettoo" width={100} height={160} className="excellence-mark" />
          </div>
          <div className="capability-grid">
            {characteristics.map(([en, ar, text, arabic], index) => {
              const Icon = capabilityIcons[index];
              return <div key={en}><Icon strokeWidth={1.35} /><h3>{tr(lang, en, ar)}</h3><p>{tr(lang, text, arabic)}</p></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export function Home({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <>
      <section className="hero">
        <Image
          src={assets.heroAi}
          alt={tr(
            lang,
            "Pallettoo presswood pallets",
            "طبالي باليتو من الخشب المضغوط",
          )}
          fill
          priority
          sizes="100vw"
          className="hero-bg"
        />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" />
              {c.eyebrow}
            </p>
            <h1>{c.hero}</h1>
            <p className="hero-intro">{c.intro}</p>
            <div className="hero-actions">
              <Action lang={lang} href="products">
                {c.explore}
              </Action>
              <Link className="hero-story" href={`/${lang}/about-us`}>
                {c.story}
                <ArrowRight size={18} className="direction-icon" />
              </Link>
            </div>
            <div className="hero-proof">
              <ShieldCheck size={19} />
              <span>ISO CERTIFIED</span>
              <i />
              <span>IPPC · ISPM 15</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>
            01 / {tr(lang, "A BETTER WAY FORWARD", "خطوة نحو مستقبل أفضل")}
          </span>
          <span>{tr(lang, "SCROLL TO EXPLORE", "مرّر لاكتشاف المزيد")} ↓</span>
        </div>
      </section>
      <section className="stats">
        <div className="wrap stats-grid">
          {[
            [
              "1,250+",
              tr(lang, "Pallets manufactured daily", "طبلية تُصنّع يومياً"),
            ],
            [
              "150",
              tr(lang, "Trees conserved daily", "شجرة نحافظ عليها يومياً"),
            ],
            ["3", tr(lang, "Purpose-built pallet models", "طرازات من الطبالي")],
            [
              "100%",
              tr(lang, "Commitment to sustainability", "التزام بالاستدامة"),
            ],
          ].map(([value, label]) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="benefit-section">
        <div className="wrap benefits">
          {benefits.map(([icon, en, ar, text, arabic], i) => {
            const Icon = [Recycle, ShieldCheck, Globe2, Truck][i];
            return (
              <div key={icon}>
                <Icon strokeWidth={1.4} />
                <h3>{tr(lang, en, ar)}</h3>
                <p>{tr(lang, text, arabic)}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{c.range}</p>
            <h2>{c.rangeTitle}</h2>
          </div>
          <Link className="text-link" href={`/${lang}/products`}>
            {c.all}
            <ArrowUpRight size={20} className="direction-icon" />
          </Link>
        </div>
        <ProductGrid lang={lang} />
      </section>
      <OriginalContentSections lang={lang} />
    </>
  );
}
export function PageIntro({
  lang,
  title,
  eyebrow,
  text,
}: {
  lang: Locale;
  title: string;
  eyebrow: string;
  text?: string;
}) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <div className="breadcrumbs">
          <Link href={`/${lang}`}>{tr(lang, "Home", "الرئيسية")}</Link>
          <span>/</span>
          {eyebrow}
        </div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="intro-text">{text}</p>}
      </div>
    </section>
  );
}
export function Products({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <>
      <PageIntro
        lang={lang}
        eyebrow={c.range}
        title={c.rangeTitle}
        text={c.rangeText}
      />
      <div className="products-page-flow">
      <section className="section wrap products-listing">
        <ProductGrid lang={lang} />
        <div className="product-assurance">
          <ShieldCheck />
          <p>
            {tr(
              lang,
              "ISO-certified quality. Designed for heavy loads and efficient handling.",
              "جودة معتمدة وفق معايير ISO. مصممة للأحمال الثقيلة وسهولة المناولة.",
            )}
          </p>
        </div>
      </section>
      <section className="comparison section products-comparison">
        <div className="wrap split">
          <div>
            <p className="eyebrow">
              {tr(lang, "PRESSWOOD ADVANTAGE", "مزايا الخشب المضغوط")}
            </p>
            <h2>{c.compare}</h2>
            <p className="body-copy">{c.compareText}</p>
            <ul className="check-list">
              {[
                tr(
                  lang,
                  "Space-saving, nestable design",
                  "تصميم متداخل يوفر المساحة",
                ),
                tr(
                  lang,
                  "Easy handling and cost efficiency",
                  "سهولة المناولة وكفاءة التكلفة",
                ),
                tr(
                  lang,
                  "Recoverable and recyclable materials",
                  "مواد قابلة للاستعادة وإعادة التدوير",
                ),
              ].map((t) => (
                <li key={t}>
                  <Check size={18} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={assets.comparisonAi}
            alt={tr(
              lang,
              "Comparison of stacked presswood and conventional pallets",
              "مقارنة تكديس طبالي الخشب المضغوط والطبالي التقليدية",
            )}
            width={900}
            height={600}
          />
        </div>
        <div className="wrap comparison-table">
          <table>
            <caption>
              {tr(
                lang,
                "Conventional pallets and presswood pallets",
                "الطبالي التقليدية وطبالي الخشب المضغوط",
              )}
            </caption>
            <thead>
              <tr>
                <th>{tr(lang, "Feature", "الميزة")}</th>
                <th>{tr(lang, "Conventional pallet", "الطبلية التقليدية")}</th>
                <th>{tr(lang, "Presswood pallet", "طبلية الخشب المضغوط")}</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  tr(lang, "Storage", "التخزين"),
                  tr(lang, "Larger stacking footprint", "مساحة تكديس أكبر"),
                  tr(lang, "Compact, nestable stacking", "تكديس متداخل ومدمج"),
                ],
                [
                  tr(lang, "Handling", "المناولة"),
                  tr(lang, "Assembled wooden construction", "هيكل خشبي مُجمّع"),
                  tr(
                    lang,
                    "One-piece moulded design",
                    "تصميم مصبوب من قطعة واحدة",
                  ),
                ],
                [
                  tr(lang, "Materials", "المواد"),
                  tr(lang, "Conventional timber", "خشب تقليدي"),
                  tr(lang, "Recovered wood fibres", "ألياف خشبية مستعادة"),
                ],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </div>
    </>
  );
}
export function About({ lang }: { lang: Locale }) {
  const c = copy[lang];
  const values = [
    [
      "Trust & satisfaction",
      "الثقة والرضا",
      "We prioritise trust through transparency, integrity, and reliability. We listen to our clients and deliver personalised attention and exceptional value.",
      "نبني الثقة بالشفافية والنزاهة والموثوقية، ونستمع لعملائنا ونقدم لهم اهتماماً شخصياً وقيمة استثنائية.",
    ],
    [
      "Quality",
      "الجودة",
      "We are dedicated to high-quality products and services, supported by rigorous quality control and a commitment to customer satisfaction.",
      "نلتزم بمنتجات وخدمات عالية الجودة، تدعمها رقابة صارمة وحرص دائم على رضا العملاء.",
    ],
    [
      "Innovation",
      "الابتكار",
      "We explore new ideas and technologies to develop smart, sustainable solutions that drive the circular economy.",
      "نستكشف الأفكار والتقنيات الجديدة لتطوير حلول ذكية ومستدامة تدعم الاقتصاد الدائري.",
    ],
    [
      "Eco-responsibility",
      "المسؤولية البيئية",
      "We strive to minimise our ecological footprint, promote sustainable practices, and contribute to a greener future.",
      "نسعى لتقليل بصمتنا البيئية وتعزيز الممارسات المستدامة والمساهمة في مستقبل أكثر اخضراراً.",
    ],
  ];
  return (
    <>
      <PageIntro
        lang={lang}
        eyebrow={tr(lang, "ABOUT PALLETTOO", "عن باليتو")}
        title={c.aboutTitle}
        text={tr(
          lang,
          "Our journey, vision, and mission. A product aligned with your business demands.",
          "رحلتنا ورؤيتنا ورسالتنا. منتج يواكب متطلبات أعمالك.",
        )}
      />
      <section className="section wrap split">
        <div className="about-picture">
          <Image
            src={assets.aboutAi}
            alt={tr(
              lang,
              "Pallettoo manufacturing and pallets",
              "تصنيع الطبالي في باليتو",
            )}
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
          />
        </div>
        <div>
          <p className="eyebrow">{tr(lang, "WHO WE ARE", "من نحن")}</p>
          <h2>
            {tr(
              lang,
              "Industrial strength.\nResponsible by design.",
              "قوة صناعية.\nومسؤولية في التصميم.",
            )}
          </h2>
          <p className="body-copy">{c.aboutText}</p>
          <p className="body-copy">
            {tr(
              lang,
              "Our industrial-strength wood fibre pallets are a robust partner in your operations, with a focus on durability, safety, and cost efficiency. We offer three varieties of pallets in technically approved dimensions.",
              "طبالينا المصنوعة من الألياف الخشبية شريك متين لعملياتك، مع التركيز على المتانة والسلامة وكفاءة التكلفة. نقدم ثلاثة طرازات من الطبالي بأبعاد معتمدة فنياً.",
            )}
          </p>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading about-demand-heading">
          <div>
            <p className="eyebrow">
              {tr(lang, "A PRODUCT ALIGNED WITH YOUR BUSINESS DEMANDS", "منتج يواكب متطلبات أعمالك")}
            </p>
            <h2>
              {tr(
                lang,
                "Built for the demands of everyday operations.",
                "مصمم لمتطلبات العمليات اليومية.",
              )}
            </h2>
          </div>
        </div>
        <div className="capability-grid about-capability-grid">
          {[
            [
              Sprout,
              "Forest-friendly solutions",
              "حلول صديقة للغابات",
              "Made from recovered wood fibres to help protect natural resources and reduce pressure on forests.",
              "مصنوعة من ألياف خشبية مستعادة للمساعدة في حماية الموارد الطبيعية وتقليل الضغط على الغابات.",
            ],
            [
              PackageCheck,
              "Low-maintenance handling",
              "مناولة قليلة الصيانة",
              "A one-piece pressed design supports smooth handling and dependable daily use with less maintenance.",
              "يدعم التصميم المصبوب من قطعة واحدة مناولة سلسة واستخداماً يومياً موثوقاً مع صيانة أقل.",
            ],
            [
              ShieldCheck,
              "Unmatched durability",
              "متانة لا مثيل لها",
              "Industrial-strength wood fibre construction delivers sustained reliability in demanding logistics environments.",
              "يوفر تركيب الألياف الخشبية الصناعية موثوقية مستمرة في البيئات اللوجستية الصعبة.",
            ],
            [
              Shield,
              "Strength redefined",
              "إعادة تعريف القوة",
              "Engineered for stable loading, secure movement, and confident performance throughout your supply chain.",
              "مُهندسة للتحميل المستقر والحركة الآمنة والأداء الموثوق عبر سلسلة الإمداد.",
            ],
          ].map(([Icon, en, ar, text, arabic]) => {
            const BenefitIcon = Icon as typeof Sprout;
            return (
              <div key={en as string}>
                <BenefitIcon strokeWidth={1.35} />
                <h3>{tr(lang, en as string, ar as string)}</h3>
                <p>{tr(lang, text as string, arabic as string)}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="vision-section">
        <div className="wrap split">
          {[
            [
              c.vision,
              tr(
                lang,
                "Leading Saudi Arabia’s circular economy through sustainable practices, resource efficiency, and an environmentally responsible culture.",
                "ريادة الاقتصاد الدائري في المملكة من خلال الممارسات المستدامة وكفاءة الموارد وثقافة المسؤولية البيئية.",
              ),
            ],
            [
              c.mission,
              tr(
                lang,
                "Providing smart, innovative, environmentally friendly solutions that drive circular economy principles and the transformation towards sustainable practices in Saudi Arabia.",
                "توفير حلول ذكية ومبتكرة وصديقة للبيئة تدعم مبادئ الاقتصاد الدائري والتحول نحو الممارسات المستدامة في المملكة العربية السعودية.",
              ),
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="eyebrow">PALLETTOO</p>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section wrap">
        <p className="eyebrow">{tr(lang, "OUR VALUES", "قيمنا")}</p>
        <h2>{c.values}</h2>
        <div className="values-grid">
          {values.map(([en, ar, text, arabic], i) => (
            <Card key={en}>
              <CardContent>
                <span className="value-number">0{i + 1}</span>
                <h3>{tr(lang, en, ar)}</h3>
                <p>{tr(lang, text, arabic)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Sustainability lang={lang} />
      <section className="section wrap">
        <p className="eyebrow">
          {tr(lang, "GREENING SAUDI", "السعودية الخضراء")}
        </p>
        <h2>
          {tr(
            lang,
            "Part of a greener future.",
            "جزء من مستقبل أكثر اخضراراً.",
          )}
        </h2>
        <p className="body-copy narrow">
          {tr(
            lang,
            "Saudi Arabia’s vision to plant 10 billion trees represents a transformative journey towards a greener kingdom. Our commitment to responsible manufacturing and resource efficiency shares this ambition for a more sustainable future.",
            "تمثل رؤية المملكة لزراعة ١٠ مليارات شجرة رحلة تحول نحو مملكة أكثر اخضراراً. ويواكب التزامنا بالتصنيع المسؤول وكفاءة الموارد هذا الطموح لمستقبل أكثر استدامة.",
          )}
        </p>
        <div className="benefits">
          {[
            [
              "Sustainable factory",
              "مصنع مستدام",
              "Eco-friendly practices at the heart of pallet production.",
              "ممارسات صديقة للبيئة في صميم إنتاج الطبالي.",
            ],
            [
              "Project management",
              "إدارة المشاريع",
              "Responsible operations, from analysis and stock management to financial planning.",
              "عمليات مسؤولة من التحليل وإدارة المخزون إلى التخطيط المالي.",
            ],
            [
              "Reliable supply",
              "إمداد موثوق",
              "High-quality products, just-in-time delivery, and seamless global supply management.",
              "منتجات عالية الجودة وتسليم في الوقت المناسب وإدارة سلسة للإمداد العالمي.",
            ],
          ].map(([en, ar, text, arabic]) => (
            <div key={en}>
              <TreePine />
              <h3>{tr(lang, en, ar)}</h3>
              <p>{tr(lang, text, arabic)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export function Contact({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <>
      <PageIntro
        lang={lang}
        eyebrow={tr(lang, "CONTACT US", "تواصل معنا")}
        title={c.contactTitle}
        text={c.contactText}
      />
      <section className="section wrap contact-grid">
        <div>
          <p className="eyebrow">
            {tr(lang, "GET IN TOUCH", "نحن هنا لمساعدتك")}
          </p>
          <h2>{tr(lang, "Closer to your business.", "أقرب إلى أعمالك.")}</h2>
          <div className="contact-methods">
            {[
              [Phone, c.phone, "+966 50 088 0597", "tel:+966500880597"],
              [
                Mail,
                c.email,
                "info@pallettoo.com",
                "mailto:info@pallettoo.com",
              ],
              [
                MapPin,
                tr(lang, "Visit us", "موقعنا"),
                c.address,
                "https://www.google.com/maps/search/?api=1&query=Pallettoo+Dammam+2nd+Industrial+City",
              ],
            ].map(([Icon, title, value, href]) => {
              const I = Icon as typeof Phone;
              return (
                <a key={title as string} href={href as string}>
                  <I />
                  <span>
                    <small>{title as string}</small>
                    <strong dir={I === Phone ? "ltr" : undefined}>
                      {value as string}
                    </strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              );
            })}
          </div>
          <div className="contact-note">
            <Leaf />
            <p>
              {tr(
                lang,
                "Increase warehouse efficiency with stackable compressed wood pallets.",
                "ارفع كفاءة مستودعاتك مع طبالي الخشب المضغوط القابلة للتكديس.",
              )}
            </p>
          </div>
        </div>
        <EnquiryForm lang={lang} />
      </section>
    </>
  );
}
export function Footer({ lang }: { lang: Locale }) {
  const c = copy[lang];
  return (
    <>
      <section className="cta">
        <div className="wrap">
          <div>
            <p className="eyebrow">
              {tr(lang, "YOUR NEXT MOVE", "خطوتك القادمة")}
            </p>
            <h2>{c.cta}</h2>
            <p>{c.ctaText}</p>
          </div>
          <Action lang={lang} href="contact-us">
            {c.quote}
          </Action>
        </div>
      </section>
      <footer>
        <div className="wrap footer-grid">
          <div>
            <Image
              src={assets.footer}
              alt="Pallettoo | باليتو"
              width={190}
              height={80}
            />
            <p>{c.footer}</p>
            <span className="footer-made">
              <Leaf size={16} />
              {c.made}
            </span>
          </div>
          <div>
            <h3>{tr(lang, "Explore", "اكتشف")}</h3>
            {nav.map(([slug, en, ar]) => (
              <Link key={slug} href={`/${lang}/${slug}`}>
                {tr(lang, en, ar)}
              </Link>
            ))}
          </div>
          <div>
            <h3>{tr(lang, "Our pallets", "طبالينا")}</h3>
            {products.map((p) => (
              <Link href={`/${lang}/product/${p.slug}`} key={p.slug}>
                {p.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>{tr(lang, "Let’s connect", "لنتواصل")}</h3>
            <p>{c.address}</p>
            <a href="mailto:info@pallettoo.com">info@pallettoo.com</a>
            <a href="tel:+966500880597" dir="ltr">
              +966 50 088 0597
            </a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} {c.rights}
          </span>
          <span>
            {tr(lang, "Built for a better tomorrow.", "نصنع لغدٍ أفضل.")}
          </span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/966500880597"
        aria-label={tr(
          lang,
          "Contact Pallettoo on WhatsApp",
          "تواصل مع باليتو عبر واتساب",
        )}
      >
        <Phone size={20} />
        <span>{tr(lang, "Let’s talk", "تواصل معنا")}</span>
      </a>
    </>
  );
}
