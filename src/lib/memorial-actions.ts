'use server';

import { revalidatePath } from 'next/cache';
import { activateMemorial } from './memorial-api';

export async function activateMemorialAction(
  token: string,
): Promise<{ memorialSlug: string } | { error: string }> {
  const result = await activateMemorial(token);
  if (!('error' in result) && result.memorialSlug) {
    // Após ativar, a página pública muda (memorial ativo) — revalida o cache.
    revalidatePath(`/memorial/${result.memorialSlug}`);
  }
  return result;
}
