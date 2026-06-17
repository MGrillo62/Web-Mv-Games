import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cache the result of image optimization (including 404s) for 1 hour.
    // This prevents Railway from making repeated upstream requests for broken
    // Shopify CDN images on every page visit, reducing memory and CPU usage.
    minimumCacheTTL: 3600,
    remotePatterns: [
      // Shopify CDN where product images are hosted
      { protocol: "https", hostname: "**.myv-games.com" },
      // allplay.com fallback images used in Launches component
      { protocol: "https", hostname: "allplay.com" },
      // Allow any other https image source (keeps flexibility for new products)
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;

