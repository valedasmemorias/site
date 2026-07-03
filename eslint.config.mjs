// Config self-contained: o apps/site é espelhado verbatim pro repo standalone
// `valedasmemorias/site` (Vercel), então NÃO pode depender de `@repo/*`
// (workspace:*), senão o `npm install` da Vercel quebra com EUNSUPPORTEDPROTOCOL.
// Regras espelham packages/eslint-config; mantenha em sincronia se a shared mudar.
// Ver scripts/export-standalone.mjs.
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },
];
