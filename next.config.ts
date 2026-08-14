import type { NextConfig } from 'next';

/**
 * Todas as páginas são do App Router — os HTMLs estáticos do site antigo já não
 * existem em `public/`, então os rewrites que apontavam para eles foram removidos.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.amazonaws.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
      { protocol: 'http', hostname: 'localhost', port: '4566' },
    ],
  },
};

export default nextConfig;
