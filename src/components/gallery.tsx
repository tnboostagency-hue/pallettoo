"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Locale, tr } from "@/lib/content";
export function Gallery({
  images,
  name,
  lang,
}: {
  images: string[];
  name: string;
  lang: Locale;
}) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="detail-image">
        <Image
          src={images[active]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="thumbnails">
        {images.map((src, i) => (
          <Button
            variant="outline"
            key={src + i}
            className={active === i ? "selected" : ""}
            aria-label={tr(
              lang,
              `View product image ${i + 1}`,
              `عرض صورة المنتج ${i + 1}`,
            )}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <Image src={src} alt="" width={64} height={64} />
          </Button>
        ))}
      </div>
    </div>
  );
}
