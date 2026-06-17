import type { NextConfig } from 'next';

/**
 * Páginas institucionais legadas seguem servidas como HTML estático em `public/`
 * (byte-a-byte idênticas ao site antigo). Os rewrites abaixo preservam as URLs
 * limpas que existiam com o `cleanUrls` da Vercel. O App Router cuida só das
 * rotas dinâmicas do memorial (`/memorial/*`).
 */
const LEGACY_PAGES = ['get-started', 'partners', 'privacy', 'terms', 'account-deletion'];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.amazonaws.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
      { protocol: 'http', hostname: 'localhost', port: '4566' },
    ],
  },
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
      ...LEGACY_PAGES.map((page) => ({
        source: `/${page}`,
        destination: `/${page}.html`,
      })),
    ];
  },
};

export default nextConfig;
