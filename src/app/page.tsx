import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { HOME_HTML } from '@/content/home';
import { PLANS_SECTION_HTML } from '@/content/plans';
import { withStoreLinks } from '@/lib/store-links';

export const metadata: Metadata = {
  title: 'Vale das Memórias — Preserve o que importa',
  description:
    'Um lugar onde as histórias da sua vida encontram palavras. Guarde suas memórias, para que as pessoas que você ama nunca se esqueçam de quem você foi.',
};

// A tabela de planos é a mesma de /get-started (fonte única em content/plans.ts).
const HOME = withStoreLinks(HOME_HTML.replace('<!--PLANS-->', PLANS_SECTION_HTML));

export default function HomePage() {
  return <MarketingPage html={HOME} />;
}
