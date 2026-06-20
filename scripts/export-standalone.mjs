/**
 * Exporta o site self-contained para o repositório standalone `valedasmemorias/site`
 * (deployado na Vercel sem o monorepo).
 *
 * O `apps/site` já não tem dependências `workspace:*` (tokens vendorados, tsconfig
 * achatado), então a exportação é só copiar os arquivos da app para o repo destino
 * e remover os artefatos estáticos legados.
 *
 * Uso:
 *   pnpm --filter valedasmemorias-site export:standalone [destino]
 *   SITE_REPO_DIR=/caminho/site pnpm --filter valedasmemorias-site export:standalone
 *   ... --dry-run   (mostra o que faria, sem escrever)
 *
 * Destino padrão: ../site (irmão do monorepo). Depois: revise o git diff no repo
 * destino, commite e dê push — a Vercel builda de lá.
 */
import { cpSync, existsSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SITE_DIR = resolve(here, '..'); // apps/site
const MONOREPO_ROOT = resolve(here, '../../..');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const targetArg = args.find((a) => !a.startsWith('--'));
const TARGET =
  targetArg ?? process.env.SITE_REPO_DIR ?? resolve(MONOREPO_ROOT, '..', 'site');

// Arquivos/pastas da app que vão para o repo standalone.
const INCLUDE = [
  'src',
  'public',
  'next.config.ts',
  'next-env.d.ts',
  'postcss.config.js',
  'tailwind.config.ts',
  'tsconfig.json',
  'package.json',
  'vercel.json',
];

// Artefatos do site estático legado que devem sumir do repo destino.
const LEGACY = [
  'index.html',
  'get-started.html',
  'partners.html',
  'privacy.html',
  'terms.html',
  'account-deletion.html',
  'theme.js',
  'logo.png',
  'api', // handlers serverless .js antigos (o novo site usa src/app/api)
];

function log(...m) {
  console.log(...m);
}

if (!existsSync(TARGET)) {
  console.error(`✗ destino não existe: ${TARGET}`);
  console.error('  Clone o repo `valedasmemorias/site` ali, ou passe o caminho como argumento.');
  process.exit(1);
}
if (!existsSync(resolve(TARGET, '.git'))) {
  console.error(`✗ destino não parece um repositório git: ${TARGET}`);
  console.error('  Recusando para evitar escrever no lugar errado.');
  process.exit(1);
}

log(`Origem : ${SITE_DIR}`);
log(`Destino: ${TARGET}${dryRun ? '  (DRY RUN)' : ''}`);
log('');

// 1) Remove artefatos legados do destino.
for (const name of LEGACY) {
  const p = resolve(TARGET, name);
  if (existsSync(p)) {
    log(`- remove legado: ${name}`);
    if (!dryRun) rmSync(p, { recursive: true, force: true });
  }
}

// 2) Copia os arquivos da app.
for (const name of INCLUDE) {
  const src = resolve(SITE_DIR, name);
  if (!existsSync(src)) continue;
  const dest = resolve(TARGET, name);
  const isDir = statSync(src).isDirectory();
  log(`+ copia: ${name}${isDir ? '/' : ''}`);
  if (!dryRun) {
    if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
    cpSync(src, dest, { recursive: true });
  }
}

// 3) Limpa o package.json exportado: remove scripts que só existem no monorepo
//    (a pasta scripts/ não é exportada).
if (!dryRun) {
  const pkgPath = resolve(TARGET, 'package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
  delete pkg.scripts?.['sync:tokens'];
  delete pkg.scripts?.['export:standalone'];
  writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  log('~ package.json: removidos scripts monorepo-only (sync:tokens, export:standalone)');
}

log('');
log(dryRun ? 'DRY RUN — nada foi escrito.' : '✓ exportado.');
log('');
log('Próximos passos:');
log(`  cd ${TARGET}`);
log('  git add -A && git status        # revise o diff');
log('  git commit -m "deploy: site Next.js" && git push');
log('');
log('Na Vercel (projeto do repo `site`): framework Next.js, sem install command');
log('customizado, sem lockfile → usa `npm install` (só deps públicas).');
