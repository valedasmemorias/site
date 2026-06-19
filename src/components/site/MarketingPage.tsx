import { SiteScripts } from './SiteScripts';

/**
 * Casca das páginas de marketing migradas do site estático. Renderiza o markup
 * (servido pelo Next com layout/fontes/build) dentro do escopo `.site-marketing`
 * e monta o `SiteScripts` que cuida do scroll/reveal/forms.
 */
export function MarketingPage({ html }: { html: string }) {
  return (
    <div className="site-marketing">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SiteScripts />
    </div>
  );
}
