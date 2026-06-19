import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { HOME_HTML } from '@/content/home';

export const metadata: Metadata = {
  title: 'Vale das Memórias — Preserve o que importa',
  description:
    'Um lugar onde as histórias da sua vida encontram palavras. Guarde suas memórias, para que as pessoas que você ama nunca se esqueçam de quem você foi.',
};

export default function HomePage() {
  return <MarketingPage html={HOME_HTML} />;
}
