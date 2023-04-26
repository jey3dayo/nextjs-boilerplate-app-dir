/** @type {import('next').NextConfig} */
const { NODE_ENV, APP_NAME, APP_SECRET } = process.env;

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    env: NODE_ENV,
    appName: APP_NAME,
  },
  serverRuntimeConfig: {
    appSecret: APP_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
