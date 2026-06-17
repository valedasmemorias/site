/** Formatação compartilhada entre a página do memorial, o card OG e o demo. */

export const CATEGORY_LABELS: Record<string, string> = {
  infancia: 'Infância',
  familia: 'Família',
  amor: 'Amor',
  trabalho: 'Trabalho',
  conquistas: 'Conquistas',
  valores: 'Valores',
  legado: 'Legado',
};

export function formatMemoryDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function year(dateStr: string | null): string | null {
  if (!dateStr) return null;
  const y = new Date(dateStr).getFullYear();
  return Number.isNaN(y) ? null : String(y);
}

/** "1950 – 2026", "1950 –", ou null se sem datas. */
export function formatLifeDates(
  birthDate: string | null,
  deceasedAt: string | null,
): string | null {
  const birth = year(birthDate);
  const death = year(deceasedAt);
  if (birth && death) return `${birth} – ${death}`;
  if (birth) return `${birth} –`;
  if (death) return `– ${death}`;
  return null;
}

/** Iniciais para o avatar de fallback. */
export function initials(name: string | null): string {
  if (!name) return '✿';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('') || '✿';
}

/** Gradiente determinístico (por nome) para a capa de fallback. */
export function coverGradient(name: string | null): string {
  const seed = (name ?? '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const hue = seed % 360;
  return `linear-gradient(135deg, hsl(${hue} 35% 32%), hsl(${(hue + 40) % 360} 40% 22%))`;
}
