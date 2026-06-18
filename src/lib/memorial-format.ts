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

// Datas de nascimento/falecimento vêm como `YYYY-MM-DD` (date-only). Formatamos
// em UTC para não recuar um dia em fusos negativos (ex.: BRT).
function year(dateStr: string | null): string | null {
  if (!dateStr) return null;
  const y = new Date(dateStr).getUTCFullYear();
  return Number.isNaN(y) ? null : String(y);
}

/** Data por extenso em pt-BR, ex.: "12 de março de 1958". */
export function formatFullDate(dateStr: string | null): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * Texto do período de vida no cabeçalho.
 * - Falecido: "1942 – 2024" (anos).
 * - Em vida: "Nascido em 12 de março de 1958" (data por extenso).
 */
export function formatLifeSpan(
  birthDate: string | null,
  deceasedAt: string | null,
): string | null {
  if (deceasedAt) {
    const birth = year(birthDate);
    const death = year(deceasedAt);
    if (birth && death) return `${birth} – ${death}`;
    if (death) return `– ${death}`;
    return null;
  }
  const born = formatFullDate(birthDate);
  return born ? `Nascido em ${born}` : null;
}

/** Datas compactas (anos) — usado no card social. */
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
