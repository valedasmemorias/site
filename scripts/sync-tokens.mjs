/**
 * Re-sincroniza o preset de tokens vendorado (`src/lib/ui-tokens-preset.ts`) a
 * partir da fonte canônica do monorepo (`packages/ui-tokens/src/tailwind-preset.ts`).
 *
 * O site é exportado para um repo standalone e não pode depender de `@repo/ui-tokens`
 * (workspace:*), então mantemos uma cópia local. Rode isto se os tokens mudarem:
 *   pnpm --filter valedasmemorias-site sync:tokens
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SOURCE = resolve(here, '../../../packages/ui-tokens/src/tailwind-preset.ts');
const TARGET = resolve(here, '../src/lib/ui-tokens-preset.ts');

const HEADER = `import type { Config } from 'tailwindcss';

/**
 * Preset de design tokens — VENDORADO de \`packages/ui-tokens/src/tailwind-preset.ts\`.
 *
 * O site é exportado para um repositório standalone (\`valedasmemorias/site\`) e
 * deployado na Vercel sem o monorepo, então não pode depender de \`@repo/ui-tokens\`
 * (workspace:*). Esta cópia local mantém o site self-contained.
 *
 * NÃO edite à mão — re-sincronize com:
 *   pnpm --filter valedasmemorias-site sync:tokens
 */
`;

const source = readFileSync(SOURCE, 'utf8');
// Remove a linha de import original (re-injetada no HEADER) e mantém o corpo.
const body = source.replace(/^import[^\n]*\n/, '').replace(/^\s*\n/, '');

writeFileSync(TARGET, HEADER + body);
console.log(`✓ sincronizado ${TARGET} a partir de packages/ui-tokens`);
