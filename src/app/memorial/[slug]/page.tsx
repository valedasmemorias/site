import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MemorialView } from '@/components/memorial/MemorialView';
import { getPublicMemorial } from '@/lib/memorial-api';
import { formatLifeDates } from '@/lib/memorial-format';

export const revalidate = 300;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPublicMemorial(slug);
  if (!data) return { title: 'Memorial não encontrado — Vale das Memórias' };

  const name = data.user.name ?? 'Memorial';
  const lifeDates = formatLifeDates(data.user.birthDate, data.user.deceasedAt);
  const description =
    data.user.epitaph ?? (lifeDates ? `${name} · ${lifeDates}` : `O legado de ${name}`);

  return {
    title: `${name} — Vale das Memórias`,
    description,
    openGraph: {
      title: name,
      description,
      type: 'profile',
      locale: 'pt_BR',
      siteName: 'Vale das Memórias',
    },
    twitter: { card: 'summary_large_image', title: name, description },
  };
}

export default async function PublicMemorialPage({ params }: Props) {
  const { slug } = await params;
  const data = await getPublicMemorial(slug);
  if (!data) notFound();

  return <MemorialView data={data} />;
}
