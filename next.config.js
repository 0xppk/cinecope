/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["dr.savee-cdn.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
