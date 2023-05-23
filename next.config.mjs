import './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'avatars.githubusercontent.com'],
  },
};

export default nextConfig;
