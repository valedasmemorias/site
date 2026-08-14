/**
 * Seção de planos — compartilhada pela home e por /get-started (a home injeta
 * este HTML no lugar do marcador `<!--PLANS-->`, ver src/app/page.tsx).
 *
 * IMPORTANTE: os números aqui espelham `packages/plans/src/catalog.ts`
 * (memoriesQuota, messagesPerDay, features) e `MEMORIAL_FREE_MEMORY_LIMIT`.
 * Mudou o catálogo? Mude aqui também — é o que o consumidor lê antes de assinar.
 */
export const PLANS_SECTION_HTML = `
    <!-- ─── PLANOS (comparativo de recursos, sem preços) ───────────────── -->
    <section id="planos" class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <div class="reveal inline-flex items-center gap-2 bg-sage-50 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">Planos</div>
          <h2 class="reveal text-3xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4" style="transition-delay:100ms">
            Comece grátis,<br>evolua quando quiser
          </h2>
          <p class="reveal text-lg text-slate-500 max-w-xl mx-auto leading-relaxed" style="transition-delay:200ms">
            Você começa no plano Gratuito. A assinatura dos planos pagos é feita dentro do aplicativo (App Store e Google Play).
          </p>
        </div>
        <div class="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style="transition-delay:300ms">
          <div class="rounded-2xl border border-border-soft bg-cream p-7 flex flex-col">
            <h3 class="text-2xl font-semibold text-ink mb-1">Gratuito</h3>
            <p class="text-sm text-slate-500 mb-5">Para começar a guardar suas primeiras histórias.</p>
            <ul class="space-y-3 text-sm flex-1">
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Até 10 memórias guardadas</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> 15 mensagens por dia</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público (até 3 memórias)</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Cápsula do tempo</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Sabedoria compartilhável</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Capítulos da vida</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Entrada por áudio</li>
            </ul>
            <a href="/get-started" class="mt-6 inline-flex justify-center bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm">Baixar o app</a>
          </div>

          <div class="rounded-2xl border border-border-soft bg-cream p-7 flex flex-col">
            <h3 class="text-2xl font-semibold text-ink mb-1">Semente</h3>
            <p class="text-sm text-slate-500 mb-5">Memórias sem limite para registrar tudo.</p>
            <ul class="space-y-3 text-sm flex-1">
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memórias ilimitadas</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> 100 mensagens por dia</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público completo</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Cápsula do tempo</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Sabedoria compartilhável</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Capítulos da vida</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Entrada por áudio</li>
            </ul>
            <a href="/get-started" class="mt-6 inline-flex justify-center bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm">Baixar o app</a>
          </div>

          <div class="rounded-2xl border border-border-soft bg-cream p-7 flex flex-col">
            <h3 class="text-2xl font-semibold text-ink mb-1">Raízes</h3>
            <p class="text-sm text-slate-500 mb-5">Inclui a Cápsula do tempo para o futuro.</p>
            <ul class="space-y-3 text-sm flex-1">
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memórias ilimitadas</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> 300 mensagens por dia</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público completo</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Cápsula do tempo</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Sabedoria compartilhável</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Capítulos da vida</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Entrada por áudio</li>
            </ul>
            <a href="/get-started" class="mt-6 inline-flex justify-center bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm">Baixar o app</a>
          </div>

          <div class="rounded-2xl border-2 border-sage-300 bg-sage-50 p-7 flex flex-col relative">
            <span class="absolute -top-3 left-7 bg-sage-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full font-sans">Mais completo</span>
            <h3 class="text-2xl font-semibold text-ink mb-1">Legado</h3>
            <p class="text-sm text-slate-500 mb-5">A experiência completa, com todos os recursos.</p>
            <ul class="space-y-3 text-sm flex-1">
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memórias ilimitadas</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Mensagens ilimitadas</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público completo</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Cápsula do tempo</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Sabedoria compartilhável</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Capítulos da vida</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Entrada por áudio</li>
            </ul>
            <a href="/get-started" class="mt-6 inline-flex justify-center bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm">Baixar o app</a>
          </div>
        </div>
        <p class="text-center text-xs text-slate-400 mt-8 max-w-2xl mx-auto leading-relaxed">
          O limite de mensagens por dia é reiniciado à meia-noite, no seu fuso horário. Você pode mudar de plano quando quiser, direto no app — a assinatura é cobrada e renovada pela App Store ou Google Play.
        </p>
      </div>
    </section>
`;
