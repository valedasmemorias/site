import type { Metadata } from 'next';

import { MemorialView } from '@/components/memorial/MemorialView';
import { DEMO_MEMORIAL_LIVING } from '@/lib/demo-memorial';

export const metadata: Metadata = {
  title: 'Memorial de exemplo (em vida) — Vale das Memórias',
  description: 'Um exemplo de memorial criado em vida no Vale das Memórias.',
  robots: { index: false, follow: false },
};

export default function DemoLivingMemorialPage() {
  return <MemorialView data={DEMO_MEMORIAL_LIVING} isDemo />;
}
