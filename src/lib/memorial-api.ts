/**
 * Cliente server-side do memorial público. Consome a API do `apps/agent`
 * (endpoint público, sem auth). Espelha o `PublicMemorialDto` do agent.
 */

const AGENT_URL = process.env.AGENT_URL ?? 'http://localhost:3001';

export interface PublicMemoryItem {
  id: string;
  title: string | null;
  category: string | null;
  visibility: string;
  isSealed: boolean;
  content: string | null;
  createdAt: string;
}

export interface MemorialChapter {
  title: string;
  period: string | null;
  summary: string;
  category: string | null;
}

export interface PublicMemorialData {
  user: {
    name: string | null;
    birthCity: string | null;
    birthDate: string | null;
    deceasedAt: string | null;
    isDeceased: boolean;
    epitaph: string | null;
    coverImageUrl: string | null;
  };
  plan: { tier: 'free' | 'paid'; hasTimeline: boolean };
  memories: PublicMemoryItem[];
  totalPublicMemories: number;
  chapters: MemorialChapter[] | null;
}

export async function getPublicMemorial(slug: string): Promise<PublicMemorialData | null> {
  let res: Response;
  try {
    res = await fetch(`${AGENT_URL}/memorial/${encodeURIComponent(slug)}/public`, {
      next: { revalidate: 300 },
    });
  } catch {
    return null;
  }
  if (!res.ok) return null;
  return res.json();
}

export async function activateMemorial(
  token: string,
): Promise<{ memorialSlug: string } | { error: string }> {
  let res: Response;
  try {
    res = await fetch(`${AGENT_URL}/memorial/activate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
      cache: 'no-store',
    });
  } catch {
    return { error: 'Não foi possível concluir a ativação agora' };
  }
  if (!res.ok) {
    return { error: 'Token inválido ou expirado' };
  }
  return res.json();
}
