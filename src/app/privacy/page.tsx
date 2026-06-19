import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { PRIVACY_HTML } from '@/content/privacy';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Vale das Memórias',
  description: 'Como o Vale das Memórias trata seus dados pessoais, conforme a LGPD.',
};

export default function PrivacyPage() {
  return <MarketingPage html={PRIVACY_HTML} />;
}
