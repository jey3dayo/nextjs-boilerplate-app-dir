import './env.mjs';
import withMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'md', 'mdx'],
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

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkToc, { maxDepth: 3, heading: '目次' }], remarkBreaks],
    rehypePlugins: [rehypePrettyCode, rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: '@mdx-js/react',
  },
};

export default withMDX(mdxOptions)(nextConfig);
