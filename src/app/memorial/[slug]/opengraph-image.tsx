import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';

import { getPublicMemorial } from '@/lib/memorial-api';
import { renderMemorialOgImage } from '@/lib/memorial-og';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Memorial — Vale das Memórias';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props): Promise<ImageResponse> {
  const { slug } = await params;
  const data = await getPublicMemorial(slug);
  if (!data) notFound();

  return renderMemorialOgImage(data, size);
}
