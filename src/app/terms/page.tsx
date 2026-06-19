import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { TERMS_HTML } from '@/content/terms';

export const metadata: Metadata = {
  title: 'Termos de Uso — Vale das Memórias',
  description: 'Os termos e condições de uso da plataforma Vale das Memórias.',
};

export default function TermsPage() {
  return <MarketingPage html={TERMS_HTML} />;
}
