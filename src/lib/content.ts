import assets from "./assets.json";
export type Locale = "en" | "ar";
export const tr = (lang: Locale, en: string, ar: string) =>
  lang === "ar" ? ar : en;
export const products = [
  { slug: "pallettoo-110120", name: "PALLETTOO 110120", image: assets.p1 },
  { slug: "pallettoo-1100110", name: "PALLETTOO 1100110", image: assets.p2 },
  { slug: "pallettoo-100120", name: "PALLETTOO 100120", image: assets.p3 },
];
export const nav = [
  ["", "Home", "الرئيسية"],
  ["about-us", "About us", "من نحن"],
  ["products", "Our products", "منتجاتنا"],
  ["contact-us", "Contact us", "تواصل معنا"],
];
export const copy = {
  en: {
    eyebrow: "ENGINEERED FOR BUSINESS. DESIGNED FOR THE PLANET.",
    hero: "A stronger foundation.\nA greener future.",
    intro:
      "The first presswood pallet factory in the Middle East. Sustainable, high-performance pallets, proudly manufactured in Saudi Arabia.",
    explore: "Explore our pallets",
    story: "Discover our story",
    quote: "Request a quote",
    range: "OUR PRODUCT RANGE",
    rangeTitle: "Built to carry your business forward.",
    rangeText:
      "Three pallet models. One commitment to strength, efficiency, and a more sustainable supply chain.",
    view: "View specifications",
    all: "View all products",
    sustain: "SUSTAINABILITY, BUILT IN",
    sustainTitle: "Less waste.\nMore possibility.",
    sustainText:
      "Our green wood pallets embody a strong commitment to both eco-friendliness and durability. By giving wood waste a new purpose, we help build a more circular economy.",
    aboutTitle: "Made in Saudi Arabia.\nBuilt for the world.",
    aboutText:
      "We manufacture engineered presswood pallets in different sizes, with a production capacity of over 1,250 pallets per day. Our focus on quality, reliability, and environmental responsibility is at the heart of everything we do.",
    cta: "Let’s move your business forward.",
    ctaText:
      "Find the right pallet for your operation. Our team is here to help.",
    phone: "Call our team",
    email: "Email us",
    address: "Dammam, 2nd Industrial City, Induscom, 34521, Saudi Arabia",
    footer: "A stronger foundation for a sustainable supply chain.",
    rights: "Pallettoo. All rights reserved.",
    made: "Proudly made in Saudi Arabia",
    back: "Back to products",
    specs: "Technical specifications",
    gallery: "Product gallery",
    contactTitle: "Good partnerships\nstart with a conversation.",
    contactText:
      "Your questions and enquiries are always welcome. Tell us what your business needs, and let’s find the right solution.",
    name: "Your name",
    company: "Company",
    mail: "Email address",
    tel: "Phone number",
    message: "Tell us what you need",
    send: "Continue on WhatsApp",
    formNote:
      "This prepares your enquiry in WhatsApp. Review it there before sending.",
    formTitle: "Let’s talk pallets.",
    choose: "Product of interest",
    any: "Help me choose",
    dimension: "Dimensions",
    dynamic: "Maximum dynamic load",
    stack: "Maximum stacking load",
    height: "Height",
    weight: "Pallet weight",
    tons: "tonnes",
    mm: "mm",
    kg: "kg",
    description:
      "Reliable and compliant, these pallets optimise space, ensure secure transportation of heavy goods, and streamline your logistics with a 6-tonne stacking load.",
    compare: "A smarter way to stack.",
    compareText:
      "Discover the difference between conventional wooden pallets and engineered presswood pallets.",
    values: "Our commitment: innovate, thrive, and lead.",
    vision: "Our vision",
    mission: "Our mission",
  },
  ar: {
    eyebrow: "مصممة لأعمالك. ومستقبل كوكبنا.",
    hero: "أساس أقوى.\nومستقبل أكثر استدامة.",
    intro:
      "أول مصنع لطبالي الخشب المضغوط في الشرق الأوسط. طبالي مستدامة وعالية الأداء، تُصنع بكل فخر في المملكة العربية السعودية.",
    explore: "اكتشف طبالينا",
    story: "تعرّف على قصتنا",
    quote: "اطلب عرض سعر",
    range: "مجموعة منتجاتنا",
    rangeTitle: "مصممة لدفع أعمالك إلى الأمام.",
    rangeText:
      "ثلاثة طرازات من الطبالي. والتزام واحد بالقوة والكفاءة وسلسلة إمداد أكثر استدامة.",
    view: "عرض المواصفات",
    all: "جميع المنتجات",
    sustain: "الاستدامة في صميم التصميم",
    sustainTitle: "نفايات أقل.\nوإمكانات أكبر.",
    sustainText:
      "تجسّد طبالينا الخشبية التزاماً قوياً بالمتانة وحماية البيئة. نمنح مخلفات الخشب قيمة جديدة لنساهم في بناء اقتصاد دائري أكثر استدامة.",
    aboutTitle: "صُنعت في السعودية.\nلتصل إلى العالم.",
    aboutText:
      "نصنع طبالي الخشب المضغوط بمقاسات مختلفة، بطاقة إنتاجية تتجاوز ١٬٢٥٠ طبلية يومياً. الجودة والموثوقية والمسؤولية البيئية هي أساس كل ما نقوم به.",
    cta: "لننطلق بأعمالك إلى الأمام.",
    ctaText: "اعثر على الطبلية المناسبة لعملياتك. فريقنا هنا لمساعدتك.",
    phone: "اتصل بفريقنا",
    email: "راسلنا",
    address:
      "المملكة العربية السعودية، الدمام، المدينة الصناعية الثانية، إندسكوم، ٣٤٥٢١",
    footer: "أساس أقوى لسلسلة إمداد مستدامة.",
    rights: "باليتو. جميع الحقوق محفوظة.",
    made: "صُنع بكل فخر في السعودية",
    back: "العودة إلى المنتجات",
    specs: "المواصفات الفنية",
    gallery: "صور المنتج",
    contactTitle: "الشراكات الناجحة\nتبدأ بمحادثة.",
    contactText:
      "نرحب دائماً بأسئلتك واستفساراتك. أخبرنا باحتياجات أعمالك لنجد معاً الحل المناسب.",
    name: "الاسم",
    company: "الشركة",
    mail: "البريد الإلكتروني",
    tel: "رقم الهاتف",
    message: "أخبرنا بما تحتاجه",
    send: "المتابعة عبر واتساب",
    formNote: "يُجهّز هذا النموذج استفسارك في واتساب. راجعه هناك قبل الإرسال.",
    formTitle: "لنتحدث عن احتياجاتك.",
    choose: "المنتج المطلوب",
    any: "ساعدني في الاختيار",
    dimension: "الأبعاد",
    dynamic: "الحمولة الديناميكية القصوى",
    stack: "حمولة التكديس القصوى",
    height: "الارتفاع",
    weight: "وزن الطبلية",
    tons: "طن",
    mm: "مم",
    kg: "كجم",
    description:
      "طبالي موثوقة تساعد على استغلال المساحة ونقل البضائع الثقيلة بأمان، وتسهّل عملياتك اللوجستية بقدرة تكديس تصل إلى ٦ أطنان.",
    compare: "طريقة أذكى للتكديس.",
    compareText:
      "اكتشف الفرق بين الطبالي الخشبية التقليدية وطبالي الخشب المضغوط.",
    values: "التزامنا: الابتكار والنمو والريادة.",
    vision: "رؤيتنا",
    mission: "رسالتنا",
  },
};
export const benefits = [
  [
    "Recycle",
    "Recoverable & recyclable",
    "قابلة لإعادة الاستخدام والتدوير",
    "Durable pallets built for reuse and a circular economy.",
    "طبالي متينة لإعادة الاستخدام ودعم الاقتصاد الدائري.",
  ],
  [
    "ShieldCheck",
    "Assured quality",
    "جودة موثوقة",
    "Precision engineering and stringent quality control.",
    "هندسة دقيقة ورقابة صارمة على الجودة.",
  ],
  [
    "Globe2",
    "Ready for export",
    "جاهزة للتصدير",
    "Heat-treated pallets designed for global markets.",
    "طبالي معالجة حرارياً ومصممة للأسواق العالمية.",
  ],
  [
    "Truck",
    "Efficient logistics",
    "خدمات لوجستية أكثر كفاءة",
    "Easy handling and space-saving, stackable design.",
    "سهولة المناولة وتصميم قابل للتكديس يوفر المساحة.",
  ],
];
