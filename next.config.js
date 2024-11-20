/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  // GitHub Pages config
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Raj-Kumar-Manala-Portfolio-Website/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Raj-Kumar-Manala-Portfolio-Website' : '',
};

module.exports = nextConfig;

