import './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'md', 'mdx'],
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'avatars.githubusercontent.com'],
    remotePatterns: [{ hostname: '*.googleusercontent.com' }],
  },
};

export default nextConfig;
