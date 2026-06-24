const API_URL = process.env.VDM_API_URL || 'https://api.valedasmemorias.com.br';
const AGENT_BASE = `${API_URL}/agent`;

export interface PublicMemoryItem {
  id: string;
  title: string | null;
  category: string | null;
  visibility: string;
  content: string | null;
  createdAt: string;
}

export interface MemorialChapter {
  title: string;
  period: string | null;
  summary: string;
  category: string | null;
}

/**
 * Homenagem de um conhecido (frase, foto ou vídeo). Recurso de "upload de
 * conhecidos" — ainda não servido pelo agent (campo opcional; populado só no demo).
 */
export interface MemorialTribute {
  id: string;
  authorName: string;
  relationship: string;
  authorAvatarUrl: string | null;
  type: 'phrase' | 'photo' | 'video';
  message: string;
  mediaUrl: string | null;
  createdAt: string;
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
  /** Homenagens de conhecidos (opcional; hoje só no demo). */
  tributes?: MemorialTribute[] | null;
}

export async function getPublicMemorial(slug: string): Promise<PublicMemorialData | null> {
  let res: Response;
  try {
    res = await fetch(`${AGENT_BASE}/memorial/${encodeURIComponent(slug)}/public`, {
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
    res = await fetch(`${AGENT_BASE}/memorial/activate`, {
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
