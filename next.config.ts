import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      { source: "/about-us", destination: "/en/about-us", permanent: true },
      { source: "/products", destination: "/en/products", permanent: true },
      { source: "/contact-us", destination: "/en/contact-us", permanent: true },
      {
        source: "/product/:slug",
        destination: "/en/product/:slug",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
