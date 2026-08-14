import type { Metadata } from 'next';
import { SiteScripts } from '@/components/site/SiteScripts';
import { PLANS_SECTION_HTML } from '@/content/plans';
import { ANDROID_URL, IOS_URL } from '@/lib/store-links';

export const metadata: Metadata = {
  title: 'Baixe o app — Vale das Memórias',
  description:
    'Baixe o Vale das Memórias no seu celular e comece a preservar as histórias que importam. Disponível para iPhone (App Store) e Android (Google Play).',
};

/**
 * Recursos do app. `plan` marca o que é pago — espelha as features de
 * `packages/plans/src/catalog.ts`; sem isso a grade sugere que tudo é gratuito.
 */
const APP_FEATURES: { t: string; d: string; plan?: string }[] = [
  {
    t: 'IA que sabe ouvir',
    d: 'Perguntas suaves e naturais que despertam memórias que você achava que tinha esquecido.',
  },
  {
    t: 'Minhas memórias',
    d: 'Suas histórias organizadas, sempre à mão, prontas para revisitar quando quiser.',
  },
  {
    t: 'Memorial',
    d: 'Uma página que reúne as memórias de uma pessoa, para compartilhar com quem ela escolher.',
  },
  {
    t: 'Cápsula do tempo',
    d: 'Mensagens e memórias guardadas para serem reveladas em momentos importantes do futuro.',
    plan: 'A partir do plano Raízes',
  },
  {
    t: 'Capítulos da vida',
    d: 'Uma linha do tempo dos momentos que marcaram, contada do seu jeito.',
    plan: 'Plano Legado',
  },
  {
    t: 'Entrada por áudio',
    d: 'A voz de quem conta a história, preservada e transcrita — para nunca se perder.',
    plan: 'Plano Legado',
  },
];

export default function GetStartedPage() {
  return (
    <div className="site-marketing">
      {/* ─── NAVBAR ─────────────────────────────────────────────────────── */}
      <header
        id="navbar"
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Vale das Memórias"
              className="h-9 w-9 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-semibold text-ink tracking-tight font-serif">
              Vale das Memórias
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-slate-500">
            <a href="/" className="hover:text-sage-600 transition-colors">
              Início
            </a>
            <a href="#planos" className="hover:text-sage-600 transition-colors">
              Planos
            </a>
            <a href="/memorial/demo" className="hover:text-sage-600 transition-colors">
              Ver um memorial
            </a>
            <a href="/partners" className="hover:text-sage-600 transition-colors">
              Para parceiros
            </a>
          </nav>
          <a
            href="#download"
            className="hidden md:inline-flex items-center gap-1.5 bg-sage-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sage-600 transition-colors shadow-sm"
          >
            Baixar o app
          </a>
        </div>
      </header>

      <main>
        {/* ─── HERO / DOWNLOAD ──────────────────────────────────────────── */}
        <section id="download" className="relative overflow-hidden pt-32 pb-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,106,79,0.10) 0%, transparent 70%)',
            }}
          />
          <div className="absolute top-20 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
              Disponível para iPhone e Android
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-ink leading-[1.08] tracking-tight mb-6">
              Leve o Vale das Memórias<br />
              <span className="gradient-text">no seu bolso</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-9 max-w-xl mx-auto">
              Baixe o aplicativo, crie sua conta no plano Gratuito e comece a guardar
              as histórias que importam. Converse com nossa IA acolhedora quando e onde
              quiser.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={IOS_URL}
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.78.9-2.06 1.6-3.12 1.52-.13-1.1.4-2.27 1.06-3 .76-.84 2.1-1.46 3.18-1.52zM20.5 17.2c-.55 1.28-.82 1.85-1.53 2.98-1 1.58-2.4 3.54-4.13 3.55-1.54.02-1.94-1.01-4.03-1-2.09.01-2.53 1.02-4.07 1-1.73-.01-3.06-1.78-4.05-3.36C-.4 17.36-.7 12.06 1.4 9.27c1.05-1.42 2.7-2.32 4.26-2.32 1.6 0 2.6 1.04 3.92 1.04 1.28 0 2.06-1.04 3.91-1.04 1.4 0 2.88.76 3.94 2.08-3.46 1.9-2.9 6.84.67 8.17z" />
                </svg>
                Baixar na App Store
              </a>
              <a
                href={ANDROID_URL}
                className="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 1.3l11.05 11.05L3.6 23.4a1.7 1.7 0 01-.6-1.3V2.6c0-.5.23-.97.6-1.3zM16.8 9.4l2.6 1.5c1 .58 1 2.04 0 2.62l-2.6 1.5-2.9-2.81 2.9-2.81zM5.2.6l9.5 5.47-2.6 2.5L5.2.6zm0 22.8l6.9-7.97 2.6 2.5L5.2 23.4z" />
                </svg>
                Disponível no Google Play
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              Gratuito para começar · Sem cartão de crédito · A assinatura dos planos
              pagos é feita dentro do app
            </p>
          </div>
        </section>

        {/* ─── RECURSOS ─────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="reveal inline-flex items-center gap-2 bg-sage-50 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                No aplicativo
              </div>
              <h2
                className="reveal text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight"
                style={{ transitionDelay: '100ms' }}
              >
                Tudo o que você precisa
                <br />
                para guardar sua história
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {APP_FEATURES.map((f, i) => (
                <div
                  key={f.t}
                  className="reveal card-hover bg-cream rounded-2xl p-7 border border-border-soft shadow-sm"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="font-semibold text-ink mb-2">{f.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.d}</p>
                  {f.plan && (
                    <p className="text-xs font-medium text-sage-600 mt-3">{f.plan}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PLANOS (comparativo real do catálogo) ────────────────────── */}
        <div dangerouslySetInnerHTML={{ __html: PLANS_SECTION_HTML }} />
      </main>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-sage-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/logo.png"
                  alt="Vale das Memórias"
                  className="h-9 w-9 object-contain"
                />
                <span className="font-semibold text-white font-serif">
                  Vale das Memórias
                </span>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Preservando histórias. Eternizando legados.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">
                  Navegue
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-white/50 hover:text-white transition-colors">
                      Início
                    </a>
                  </li>
                  <li>
                    <a href="#planos" className="text-white/50 hover:text-white transition-colors">
                      Planos
                    </a>
                  </li>
                  <li>
                    <a href="/partners" className="text-white/50 hover:text-white transition-colors">
                      Seja um parceiro
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">
                  Legal
                </div>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-white/50 hover:text-white transition-colors">
                      Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-white/50 hover:text-white transition-colors">
                      Termos de uso
                    </a>
                  </li>
                  <li>
                    <a
                      href="/account-deletion"
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      Excluir conta
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-xs text-white/30">
            © 2026 Vale das Memórias. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <SiteScripts />
    </div>
  );
}
