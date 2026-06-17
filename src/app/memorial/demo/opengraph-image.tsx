import { ImageResponse } from 'next/og';

import { DEMO_MEMORIAL } from '@/lib/demo-memorial';
import { renderMemorialOgImage } from '@/lib/memorial-og';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Memorial de exemplo — Vale das Memórias';

export default function Image(): Promise<ImageResponse> {
  return renderMemorialOgImage(DEMO_MEMORIAL, size);
}
