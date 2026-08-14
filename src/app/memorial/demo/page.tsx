import type { Metadata } from 'next';

import { MemorialView } from '@/components/memorial/MemorialView';
import { DEMO_MEMORIAL_DECEASED } from '@/lib/demo-memorial';

export const metadata: Metadata = {
  title: 'Memorial de exemplo (em memória) — Vale das Memórias',
  description: 'Um exemplo de como fica um memorial completo no Vale das Memórias.',
};

export default function DemoMemorialPage() {
  return <MemorialView data={DEMO_MEMORIAL_DECEASED} isDemo />;
}
