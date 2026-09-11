"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { Locale, copy, products } from "@/lib/content";
export function EnquiryForm({ lang }: { lang: Locale }) {
  const c = copy[lang];
  const [product, setProduct] = useState("choose");
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = [
          c.formTitle,
          ...["name", "company", "mail", "tel"].map(
            (k) => `${c[k as "name"]}: ${data.get(k) || "—"}`,
          ),
          `${c.choose}: ${product === "choose" ? c.any : product}`,
          `${c.message}: ${data.get("message")}`,
        ].join("\n");
        window.location.assign(
          `https://wa.me/966500880597?text=${encodeURIComponent(text)}`,
        );
      }}
    >
      <h2>{c.formTitle}</h2>
      <div className="form-grid">
        {(["name", "company", "mail", "tel"] as const).map((k) => (
          <div className="field" key={k}>
            <Label htmlFor={k}>{c[k]}</Label>
            <Input
              id={k}
              name={k}
              type={k === "mail" ? "email" : k === "tel" ? "tel" : "text"}
              required={k !== "company"}
              autoComplete={
                {
                  name: "name",
                  company: "organization",
                  mail: "email",
                  tel: "tel",
                }[k]
              }
              maxLength={150}
            />
          </div>
        ))}
      </div>
      <div className="field">
        <Label htmlFor="product">{c.choose}</Label>
        <Select
          value={product}
          onValueChange={setProduct}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <SelectTrigger id="product" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="choose">{c.any}</SelectItem>
            {products.map((p) => (
              <SelectItem key={p.slug} value={p.name}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="field">
        <Label htmlFor="message">{c.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={5}
          maxLength={3000}
          rows={4}
        />
      </div>
      <Button type="submit" size="lg">
        <MessageCircle />
        {c.send}
      </Button>
      <p className="form-note">{c.formNote}</p>
    </form>
  );
}
