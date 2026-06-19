import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { PARTNERS_HTML } from '@/content/partners';

export const metadata: Metadata = {
  title: 'Seja um parceiro — Vale das Memórias',
  description:
    'Leve a preservação humanizada de memórias e legado para a sua empresa. Torne-se um parceiro do Vale das Memórias e ofereça uma experiência única às famílias.',
};

export default function PartnersPage() {
  return <MarketingPage html={PARTNERS_HTML} />;
}
