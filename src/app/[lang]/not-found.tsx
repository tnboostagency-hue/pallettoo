import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section wrap">
      <p className="eyebrow">404</p>
      <h1>Page not found / الصفحة غير موجودة</h1>
      <p className="body-copy">This page could not be found.</p>
      <Link className="text-link" href="/en">
        Home / الرئيسية →
      </Link>
    </section>
  );
}
