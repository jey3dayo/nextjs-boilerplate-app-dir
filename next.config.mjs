import './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'avatars.githubusercontent.com'],
    remotePatterns: [{ hostname: '*.googleusercontent.com' }],
  },
};

export default nextConfig;
