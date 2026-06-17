import type { Metadata } from 'next';

import { MemorialView } from '@/components/memorial/MemorialView';
import { DEMO_MEMORIAL } from '@/lib/demo-memorial';

export const metadata: Metadata = {
  title: 'Memorial de exemplo — Vale das Memórias',
  description: 'Um exemplo de como fica um memorial completo no Vale das Memórias.',
  robots: { index: false, follow: false },
};

export default function DemoMemorialPage() {
  return <MemorialView data={DEMO_MEMORIAL} isDemo />;
}
