import type { Config } from 'tailwindcss';

/**
 * Preset de design tokens — VENDORADO de `packages/ui-tokens/src/tailwind-preset.ts`.
 *
 * O site é exportado para um repositório standalone (`valedasmemorias/site`) e
 * deployado na Vercel sem o monorepo, então não pode depender de `@repo/ui-tokens`
 * (workspace:*). Esta cópia local mantém o site self-contained.
 *
 * NÃO edite à mão — re-sincronize com:
 *   pnpm --filter valedasmemorias-site sync:tokens
 */
export const tailwindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'hsl(var(--bg) / <alpha-value>)',
          warm: 'hsl(var(--bg-warm) / <alpha-value>)',
          card: 'hsl(var(--bg-card) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'hsl(var(--ink) / <alpha-value>)',
          soft: 'hsl(var(--ink-soft) / <alpha-value>)',
          muted: 'hsl(var(--ink-muted) / <alpha-value>)',
        },
        'border-soft': 'hsl(var(--border-soft) / <alpha-value>)',
        'primary-light': 'hsl(var(--primary-light) / <alpha-value>)',
        'primary-dark': 'hsl(var(--primary-dark) / <alpha-value>)',
        cat: {
          familia: 'hsl(var(--cat-familia) / <alpha-value>)',
          'familia-bg': 'hsl(var(--cat-familia-bg) / <alpha-value>)',
          infancia: 'hsl(var(--cat-infancia) / <alpha-value>)',
          'infancia-bg': 'hsl(var(--cat-infancia-bg) / <alpha-value>)',
          trabalho: 'hsl(var(--cat-trabalho) / <alpha-value>)',
          'trabalho-bg': 'hsl(var(--cat-trabalho-bg) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px hsl(var(--ink) / 0.03)',
        lift: '0 1px 3px hsl(var(--ink) / 0.06)',
        cta: '0 1px 2px hsl(var(--primary) / 0.2)',
      },
      borderRadius: {
        card: '14px',
        'bubble-user': '18px 18px 4px 18px',
        'bubble-ai': '18px 18px 18px 4px',
      },
    },
  },
};

export default tailwindPreset;
