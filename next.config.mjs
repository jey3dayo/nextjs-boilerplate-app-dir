import './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'md', 'mdx'],
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: '*.googleusercontent.com' }, { hostname: 'tailwindui.com]' }, { hostname: 'avatars.githubusercontent.com' }],
  },
};

export default nextConfig;
