/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
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
  basePath: '/Raj-Kumar-Manala-Portfolio-Website', // your repo name
  assetPrefix: '/Raj-Kumar-Manala-Portfolio-Website',
};

module.exports = nextConfig;
