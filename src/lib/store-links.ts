/**
 * Links das lojas.
 *
 * Os defaults são as URLs canônicas de produto — a App Store não serve a ficha
 * do app por `/search?term=`, só por `/app/<slug>/id<APP_ID>`. O App ID sai do
 * bundle `com.valedasmemorias.app` (itunes.apple.com/lookup?bundleId=...).
 *
 * Sem parâmetro `hl` no Play: a loja localiza sozinha pelo idioma do usuário,
 * e fixar `hl=pt` atrapalha quem acessa de fora.
 *
 * As envs continuam podendo sobrescrever (ex.: link com tracking de campanha).
 */
export const IOS_URL =
  process.env.NEXT_PUBLIC_IOS_APP_URL ||
  'https://apps.apple.com/br/app/vale-das-memorias/id6781907248';

export const ANDROID_URL =
  process.env.NEXT_PUBLIC_ANDROID_APP_URL ||
  'https://play.google.com/store/apps/details?id=com.valedasmemorias.app';

/** Substitui os marcadores `{{IOS_URL}}` / `{{ANDROID_URL}}` do HTML de marketing. */
export function withStoreLinks(html: string): string {
  return html
    .replaceAll('{{IOS_URL}}', IOS_URL)
    .replaceAll('{{ANDROID_URL}}', ANDROID_URL);
}
