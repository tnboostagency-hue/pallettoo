"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ArrowUpRight, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { copy, nav, Locale, tr } from "@/lib/content";
import assets from "@/lib/assets.json";
export function Header({ lang }: { lang: Locale }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const other = lang === "en" ? "ar" : "en";
  const switchPath = path.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>{copy[lang].made}</span>
          <div>
            <a href="mailto:info@pallettoo.com">info@pallettoo.com</a>
            <span className="top-divider" />
            <a href="tel:+966500880597" dir="ltr">
              +966 50 088 0597
            </a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <Link
            href={`/${lang}`}
            aria-label={tr(lang, "Pallettoo home", "باليتو الرئيسية")}
          >
            <Image
              src={assets.logo}
              width={190}
              height={76}
              priority
              alt="Pallettoo | باليتو"
              className="logo"
            />
          </Link>
          <nav
            className="desktop-nav"
            aria-label={tr(lang, "Main navigation", "القائمة الرئيسية")}
          >
            {nav.map(([slug, en, ar]) => (
              <Link
                key={slug}
                href={`/${lang}/${slug}`}
                aria-current={
                  path.replace(/\/$/, "") ===
                  `/${lang}${slug ? "/" + slug : ""}`
                    ? "page"
                    : undefined
                }
              >
                {tr(lang, en, ar)}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link
              className="language"
              href={switchPath}
              lang={other}
              aria-label={tr(lang, "Switch to Arabic", "Switch to English")}
            >
              <Globe2 size={16} />
              {lang === "en" ? "العربية" : "English"}
            </Link>
            <Button asChild className="desktop-quote">
              <Link href={`/${lang}/contact-us`}>
                {copy[lang].quote}
                <ArrowUpRight className="direction-icon" />
              </Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="mobile-menu"
                  aria-label={tr(lang, "Open menu", "فتح القائمة")}
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                aria-describedby={undefined}
                closeLabel={tr(lang, "Close menu", "إغلاق القائمة")}
                side={lang === "ar" ? "left" : "right"}
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                <SheetTitle className="p-6">
                  {tr(lang, "Explore Pallettoo", "اكتشف باليتو")}
                </SheetTitle>
                <nav className="mobile-links">
                  {nav.map(([slug, en, ar]) => (
                    <Link
                      key={slug}
                      href={`/${lang}/${slug}`}
                      onClick={() => setOpen(false)}
                    >
                      {tr(lang, en, ar)}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
