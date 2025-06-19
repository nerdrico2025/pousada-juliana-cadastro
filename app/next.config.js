/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true 
  },
  // Remove configurações que podem causar conflito no Vercel
  trailingSlash: false,
  swcMinify: true,
};

module.exports = nextConfig;
