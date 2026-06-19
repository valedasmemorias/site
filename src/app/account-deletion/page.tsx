import type { Metadata } from 'next';
import { MarketingPage } from '@/components/site/MarketingPage';
import { ACCOUNT_DELETION_HTML } from '@/content/account_deletion';

export const metadata: Metadata = {
  title: 'Exclusão de Conta e Dados — Vale das Memórias',
  description: 'Como excluir sua conta e seus dados no Vale das Memórias.',
};

export default function AccountDeletionPage() {
  return <MarketingPage html={ACCOUNT_DELETION_HTML} />;
}
