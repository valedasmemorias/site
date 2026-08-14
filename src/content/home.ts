/**
 * Markup da home. Originalmente migrado do site estático (que já não existe como
 * fonte); hoje ESTE arquivo é a fonte de verdade — pode editar à mão.
 *
 * A seção de planos NÃO fica aqui: o marcador `<!--PLANS-->` é substituído por
 * `PLANS_SECTION_HTML` em src/app/page.tsx, para não duplicar a tabela que
 * /get-started também usa.
 */
export const HOME_HTML = `<!-- ─── NAVBAR ─────────────────────────────────────────────────────────── -->
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-300" id="navbar">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2.5 group">
        <img src="/logo.png" alt="Vale das Memórias" class="h-9 w-9 object-contain group-hover:scale-105 transition-transform" />
        <span class="font-semibold text-slate-900 tracking-tight">Vale das Memórias</span>
      </a>
      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-7 text-sm text-slate-500 font-sans">
        <a href="#como-funciona" class="hover:text-sage-600 transition-colors">Como funciona</a>
        <a href="#funcionalidades" class="hover:text-sage-600 transition-colors">Funcionalidades</a>
        <a href="#planos" class="hover:text-sage-600 transition-colors">Planos</a>
        <a href="/memorial/demo" class="hover:text-sage-600 transition-colors">Ver um memorial</a>
        <a href="/partners" class="hover:text-sage-600 transition-colors">Para parceiros</a>
      </nav>
      <a href="/get-started" class="hidden md:inline-flex items-center gap-1.5 bg-sage-500 text-white text-sm font-semibold font-sans px-4 py-2 rounded-lg hover:bg-sage-600 transition-colors shadow-sm">
        Baixar o app
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </header>

  <main>

    <!-- ─── HERO ───────────────────────────────────────────────────────────── -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <!-- Background -->
      <div class="absolute inset-0 hero-glow pointer-events-none"></div>
      <div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(circle, rgba(45,106,79,0.07) 1px, transparent 1px); background-size: 30px 30px;"></div>
      <!-- Soft orbs -->
      <div class="absolute top-20 right-0 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-warm-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Copy -->
        <div>
          <div class="inline-flex items-center gap-2 bg-sage-100 text-sage-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-7 animate-fade-up">
            <span class="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse"></span>
            Disponível para iPhone e Android
          </div>

          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 animate-fade-up delay-100">
            Suas histórias<br>
            <span class="gradient-text">merecem durar</span><br>
            para sempre
          </h1>

          <p class="text-lg text-slate-500 leading-relaxed mb-8 max-w-md animate-fade-up delay-200">
            Um lugar onde as memórias da sua vida encontram palavras. Converse com nossa IA, reviva momentos, e deixe um legado que as pessoas que você ama nunca vão esquecer.
          </p>

          <!-- Download -->
          <div class="animate-fade-up delay-300">
            <div class="flex flex-col sm:flex-row gap-3 max-w-md" data-store-buttons>
              <a href="{{IOS_URL}}" class="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.78.9-2.06 1.6-3.12 1.52-.13-1.1.4-2.27 1.06-3 .76-.84 2.1-1.46 3.18-1.52zM20.5 17.2c-.55 1.28-.82 1.85-1.53 2.98-1 1.58-2.4 3.54-4.13 3.55-1.54.02-1.94-1.01-4.03-1-2.09.01-2.53 1.02-4.07 1-1.73-.01-3.06-1.78-4.05-3.36C-.4 17.36-.7 12.06 1.4 9.27c1.05-1.42 2.7-2.32 4.26-2.32 1.6 0 2.6 1.04 3.92 1.04 1.28 0 2.06-1.04 3.91-1.04 1.4 0 2.88.76 3.94 2.08-3.46 1.9-2.9 6.84.67 8.17z"/></svg>
                App Store
              </a>
              <a href="{{ANDROID_URL}}" class="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.3l11.05 11.05L3.6 23.4a1.7 1.7 0 01-.6-1.3V2.6c0-.5.23-.97.6-1.3zM16.8 9.4l2.6 1.5c1 .58 1 2.04 0 2.62l-2.6 1.5-2.9-2.81 2.9-2.81zM5.2.6l9.5 5.47-2.6 2.5L5.2.6zm0 22.8l6.9-7.97 2.6 2.5L5.2 23.4z"/></svg>
                Google Play
              </a>
            </div>
            <p class="text-xs text-slate-400 mt-3">Gratuito para começar. Sem cartão de crédito.</p>
          </div>
        </div>

        <!-- Visual: Abstract memory cards -->
        <div class="relative hidden lg:flex items-center justify-center h-[560px]">
          <!-- Background blur card -->
          <div class="absolute inset-8 bg-gradient-to-br from-sage-100 to-warm-100 rounded-3xl opacity-60 blur-sm"></div>

          <!-- Memory card 1 -->
          <div class="memory-card absolute top-0 -left-6 w-56 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/80 border border-slate-100 z-20">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white text-sm font-bold">A</div>
              <div>
                <div class="text-xs font-semibold text-slate-800">Ana Ferreira</div>
                <div class="text-[10px] text-slate-400">Guardada há 3 dias</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic">
              "O verão em que meu pai me ensinou a pescar no rio. Eu tinha uns 8 anos e achava que ele sabia de tudo..."
            </p>
            <div class="mt-3 flex items-center gap-1.5">
              <span class="text-[10px] bg-cat-infancia-bg text-cat-infancia px-2 py-0.5 rounded-full font-medium">Infância</span>
              <span class="text-[10px] bg-cat-familia-bg text-cat-familia px-2 py-0.5 rounded-full font-medium">Família</span>
            </div>
          </div>

          <!-- Memory card 2 -->
          <div class="memory-card-2 absolute bottom-0 -right-6 w-56 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/80 border border-slate-100 z-20">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-warm-400 to-warm-500 flex items-center justify-center text-white text-sm font-bold">M</div>
              <div>
                <div class="text-xs font-semibold text-slate-800">Marcos Lima</div>
                <div class="text-[10px] text-slate-400">Guardada há 1 semana</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic">
              "Minha avó fazia um bolo de laranja todo domingo. Só descobri a receita depois que ela foi embora..."
            </p>
            <div class="mt-3 flex gap-1.5">
              <span class="text-[10px] bg-cat-familia-bg text-cat-familia px-2 py-0.5 rounded-full font-medium">Família</span>
            </div>
          </div>

          <!-- Center card — conversa (espelha apps/mobile: app/(tabs)/index.tsx + MessageBubble.tsx) -->
          <div class="relative z-30 w-72 bg-bg rounded-2xl shadow-2xl shadow-slate-300/50 border border-border-soft overflow-hidden">
            <!-- Header do chat -->
            <div class="px-3.5 py-2.5 flex items-center gap-2.5 border-b border-border-soft">
              <div class="w-8 h-8 rounded-xl bg-sage-100 border border-border-soft flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-sage-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5z"/><path d="M20 3v4M22 5h-4M4 17v2M5 18H3"/></svg>
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-sage-500"></span>
                  <span class="text-[8px] font-semibold uppercase tracking-[0.09em] text-sage-500">Conversando</span>
                </div>
                <div class="font-serif text-[12px] text-ink truncate">Sua história, contada do seu jeito</div>
              </div>
            </div>

            <!-- Mensagens -->
            <div class="px-3.5 py-3.5 space-y-2.5 min-h-[150px]">
              <div class="flex items-end gap-2">
                <div class="w-6 h-6 rounded-[9px] bg-sage-100 border border-border-soft flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3 h-3 text-sage-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5z"/></svg>
                </div>
                <div class="bg-white border border-[#E1EBE5] rounded-[15px] rounded-bl-[4px] px-3 py-2 text-[11px] text-ink max-w-[78%] leading-relaxed">
                  Que memória da sua infância você nunca quer esquecer?
                </div>
              </div>
              <div class="flex justify-end">
                <div class="bg-sage-500 rounded-[15px] rounded-br-[4px] px-3 py-2 text-[11px] text-white max-w-[78%] leading-relaxed">
                  A casa da minha avó no interior. O cheiro do café pela manhã.
                </div>
              </div>
              <div class="flex items-end gap-2">
                <div class="w-6 h-6 rounded-[9px] bg-sage-100 border border-border-soft flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3 h-3 text-sage-500" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5z"/></svg>
                </div>
                <div class="bg-white border border-[#E1EBE5] rounded-[15px] rounded-bl-[4px] px-3 py-2 text-[11px] text-ink max-w-[78%] leading-relaxed">
                  Que lindo. Me conta mais sobre ela — como era sua avó?
                </div>
              </div>
            </div>

            <!-- Composer -->
            <div class="px-3 pb-2.5 pt-2 border-t border-border-soft">
              <div class="flex items-center gap-2 bg-white border border-[#E1EBE5] rounded-[14px] px-2.5 py-1.5">
                <span class="flex-1 text-[10px] text-ink-muted truncate">Escreva uma mensagem…</span>
                <span class="w-6 h-6 rounded-[9px] bg-sage-500 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </span>
              </div>
              <div class="flex items-center justify-center gap-1 mt-1.5">
                <svg class="w-2.5 h-2.5 text-ink-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3l1.9 5.6a2 2 0 0 0 1.5 1.5L21 12l-5.6 1.9a2 2 0 0 0-1.5 1.5L12 21l-1.9-5.6a2 2 0 0 0-1.5-1.5L3 12l5.6-1.9a2 2 0 0 0 1.5-1.5z"/></svg>
                <span class="text-[9px] text-ink-muted">A IA pode capturar memórias da conversa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- ─── VER UM MEMORIAL ──────────────────────────────────────────────── -->
    <section class="py-16 border-y border-border-soft bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div class="inline-flex items-center gap-2 bg-sage-50 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-5">
              Veja com seus olhos
            </div>
            <h2 class="text-3xl md:text-4xl font-semibold text-ink tracking-tight leading-tight mb-4">
              É assim que uma história<br>fica guardada
            </h2>
            <p class="text-slate-500 leading-relaxed mb-7 max-w-md">
              Todo plano inclui um memorial — uma página que reúne as memórias de uma pessoa e pode ser compartilhada com quem ela escolher. Preparamos dois exemplos para você percorrer antes de baixar o app.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="/memorial/demo" class="inline-flex items-center justify-center gap-1.5 bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm shadow-sm">
                Ver memorial de exemplo
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </a>
              <a href="/memorial/demo/em-vida" class="inline-flex items-center justify-center gap-1.5 bg-white text-ink font-semibold px-5 py-3 rounded-xl border border-border-soft hover:bg-cream transition-colors text-sm">
                Ver memorial em vida
              </a>
            </div>
          </div>

          <!-- Prévia do memorial -->
          <div class="bg-gradient-to-br from-sage-50 to-warm-100 rounded-3xl p-6 border border-sage-100">
            <div class="bg-white rounded-2xl shadow-sm border border-border-soft overflow-hidden">
              <div class="h-20 bg-gradient-to-br from-sage-400 to-sage-600"></div>
              <div class="px-5 pb-5">
                <div class="w-14 h-14 rounded-2xl bg-white border border-border-soft -mt-7 mb-3 flex items-center justify-center shadow-sm">
                  <svg class="w-6 h-6 text-sage-500" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </div>
                <div class="font-serif text-lg text-ink mb-1">Um lugar para as histórias</div>
                <p class="text-xs text-slate-500 leading-relaxed mb-4">Memórias reunidas, organizadas por capítulos da vida e compartilhadas com quem importa.</p>
                <div class="space-y-2">
                  <div class="h-2.5 bg-cream rounded-full w-full"></div>
                  <div class="h-2.5 bg-cream rounded-full w-5/6"></div>
                  <div class="h-2.5 bg-cream rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PROBLEMA ─────────────────────────────────────────────────────── -->
    <section id="problema" class="py-24 bg-sage-800 relative overflow-hidden">
      <!-- Texture -->
      <div class="absolute inset-0 pointer-events-none opacity-5" style="background-image: radial-gradient(circle, #e4f0e9 1px, transparent 1px); background-size: 24px 24px;"></div>
      <!-- Orb -->
      <div class="absolute -right-40 top-0 w-96 h-96 bg-sage-600 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div class="reveal inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sage-200 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          O problema
        </div>
        <h2 class="reveal text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6" style="transition-delay: 100ms">
          As histórias mais importantes<br>
          <span style="color: #C68B3A">desaparecem em silêncio</span>
        </h2>
        <p class="reveal text-lg text-white/60 max-w-2xl mx-auto mb-16 leading-relaxed" style="transition-delay: 200ms">
          Você já parou pra pensar em quantas histórias você nunca vai saber? As aventuras do seu avô quando jovem. A receita que sua avó sabia de cor. O conselho que seu pai queria te dar, mas nunca teve chance.
        </p>

        <div class="reveal grid grid-cols-1 md:grid-cols-3 gap-6" style="transition-delay: 300ms">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-7 text-left hover:bg-white/8 transition-colors">
            <div class="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-5">
              <!-- Time icon -->
              <svg class="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path stroke-linecap="round" d="M12 6v6l4 2"/></svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-base">O tempo não espera</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              As memórias se apagam aos poucos. Sem registro, o que não é contado hoje pode nunca ser contado.
            </p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-7 text-left hover:bg-white/8 transition-colors">
            <div class="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-5">
              <!-- Chat icon -->
              <svg class="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-base">Ninguém pergunta</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              A correria do dia a dia faz a gente adiar as conversas que realmente importam. Ficamos sem saber quem foram as pessoas que amamos.
            </p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-7 text-left hover:bg-white/8 transition-colors">
            <div class="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-5">
              <!-- Heart broken icon -->
              <svg class="w-5 h-5 text-sage-300" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <h3 class="font-semibold text-white mb-2 text-base">Arrependimento que dói</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Depois que as pessoas vão, fica um vazio. A saudade das histórias que nunca foram contadas é diferente — e mais funda.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SOLUÇÃO ───────────────────────────────────────────────────────── -->
    <section class="py-24 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <div class="reveal inline-flex items-center gap-2 bg-sage-50 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            A solução
          </div>
          <h2 class="reveal text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4" style="transition-delay: 100ms">
            Uma conversa que<br>
            <span class="gradient-text">vira história</span>
          </h2>
          <p class="reveal text-lg text-slate-500 max-w-xl mx-auto leading-relaxed" style="transition-delay: 200ms">
            Vale das Memórias usa inteligência artificial para conduzir conversas naturais — e transformar cada resposta em uma memória preservada para sempre.
          </p>
        </div>

        <div class="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style="transition-delay: 300ms">
          <div class="space-y-5">
            <div class="flex items-start gap-4 p-5 rounded-2xl hover:bg-sage-50 transition-colors">
              <div class="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-800 mb-1">Perguntas que fazem você lembrar</h3>
                <p class="text-sm text-slate-500 leading-relaxed">Nossa IA faz as perguntas certas para despertar memórias que você achava que tinha esquecido. Cada conversa desvela uma nova camada da sua história.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-5 rounded-2xl hover:bg-sage-50 transition-colors">
              <div class="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-800 mb-1">Guardada com cuidado, para sempre</h3>
                <p class="text-sm text-slate-500 leading-relaxed">Cada memória é organizada, preservada e disponível para você e para quem você autorizar. Seus netos podem ler suas histórias e se sentir perto de você — mesmo décadas depois.</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-5 rounded-2xl hover:bg-sage-50 transition-colors">
              <div class="w-10 h-10 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-800 mb-1">Um presente para quem você ama</h3>
                <p class="text-sm text-slate-500 leading-relaxed">Não é só para você. É para os filhos, os netos, os amigos. Para que as pessoas que você ama saibam, de verdade, quem você foi.</p>
              </div>
            </div>
          </div>

          <!-- Visual — memory gallery mockup -->
          <div class="bg-gradient-to-br from-sage-50 to-warm-100 rounded-3xl p-6 border border-sage-100">
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <span class="text-sm font-semibold text-slate-700">Minhas Memórias</span>
                <span class="text-xs text-sage-500 font-medium">47 histórias</span>
              </div>
              <div class="p-4 space-y-3">
                <!-- memory list items -->
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div class="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-semibold text-slate-700 truncate">A fazenda da infância</div>
                    <div class="text-[10px] text-slate-400">Contada há 3 dias</div>
                  </div>
                  <span class="text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full font-medium flex-shrink-0">Infância</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div class="w-9 h-9 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-semibold text-slate-700 truncate">Como conheci meu marido</div>
                    <div class="text-[10px] text-slate-400">Contada há 1 semana</div>
                  </div>
                  <span class="text-[10px] bg-pink-50 text-pink-500 px-2 py-0.5 rounded-full font-medium flex-shrink-0">Amor</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <div class="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-semibold text-slate-700 truncate">O que aprendi sobre dinheiro</div>
                    <div class="text-[10px] text-slate-400">Contada há 2 semanas</div>
                  </div>
                  <span class="text-[10px] bg-amber-50 text-amber-500 px-2 py-0.5 rounded-full font-medium flex-shrink-0">Conselhos</span>
                </div>
                <div class="flex items-center gap-3 p-3 rounded-xl bg-sage-50 border border-sage-100 cursor-pointer">
                  <div class="w-9 h-9 bg-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-sage-500 animate-pulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-semibold text-sage-700 truncate">Nova conversa aguardando…</div>
                    <div class="text-[10px] text-sage-500">A IA tem uma pergunta para você</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── FUNCIONALIDADES ─────────────────────────────────────────────── -->
    <section id="funcionalidades" class="py-24 bg-cream">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-14">
          <div class="reveal inline-flex items-center gap-2 bg-sage-100 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Funcionalidades
          </div>
          <h2 class="reveal text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight" style="transition-delay: 100ms">
            Feito com cuidado,<br>para cada detalhe
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <!-- Feature 1 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">IA que sabe ouvir</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Conversas guiadas por inteligência artificial, com perguntas que fluem naturalmente e se adaptam ao que você compartilha.</p>
          </div>

          <!-- Feature 2 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 80ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Segura e privada</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Suas memórias são criptografadas e acessadas apenas por quem você autorizar. Sua história é sua — e de mais ninguém.</p>
          </div>

          <!-- Feature 3 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 160ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Por texto ou por voz</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Escreva como quem manda uma mensagem — ou grave um áudio e deixe que a gente transcreve e organiza. <span class="text-sage-600 font-medium">Áudio no plano Legado.</span></p>
          </div>

          <!-- Feature 4 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 240ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Conexões com a família</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Convide filhos, netos e irmãos para se conectarem à sua história. Cada um mantém as próprias memórias, e o memorial reúne o que você escolher compartilhar.</p>
          </div>

          <!-- Feature 5 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 320ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" d="M12 7v5l3.5 2"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Cápsula do tempo</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Escreva hoje uma mensagem para ser aberta lá na frente — num aniversário, numa formatura, num dia que ainda vai chegar. <span class="text-sage-600 font-medium">A partir do plano Raízes.</span></p>
          </div>

          <!-- Feature 6 -->
          <div class="reveal card-hover bg-gradient-to-br from-sage-500 to-sage-700 rounded-2xl p-7 border border-sage-400 shadow-sm" style="transition-delay: 400ms">
            <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 class="font-semibold text-white mb-2">Simples como uma conversa</h3>
            <p class="text-sm text-white/70 leading-relaxed">Sem complicação. Não é preciso saber usar tecnologia. Se você sabe mandar uma mensagem, você sabe usar o Vale das Memórias.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── COMO FUNCIONA ────────────────────────────────────────────────── -->
    <section id="como-funciona" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="reveal inline-flex items-center gap-2 bg-sage-50 text-sage-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          Como funciona
        </div>
        <h2 class="reveal text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4" style="transition-delay: 100ms">
          Três passos.<br>Uma vida preservada.
        </h2>
        <p class="reveal text-lg text-slate-500 mb-16 max-w-lg mx-auto" style="transition-delay: 200ms">
          Começar é simples. Em menos de cinco minutos, suas primeiras memórias já estão guardadas.
        </p>

        <div class="reveal grid grid-cols-1 md:grid-cols-3 gap-8 relative" style="transition-delay: 300ms">
          <!-- Connecting line (desktop) -->
          <div class="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-sage-200 via-sage-400 to-sage-200"></div>

          <!-- Step 1 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-sage-50 border-2 border-sage-200 rounded-2xl flex items-center justify-center shadow-sm z-10 relative">
                <svg class="w-9 h-9 text-sage-500" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
              </div>
              <div class="absolute -top-2 -right-2 w-7 h-7 bg-sage-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">1</div>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Baixe o app e entre</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Em menos de um minuto, você entra. Nada complicado — seu nome, e-mail e como prefere ser tratado. Sem senha: a gente manda um código.</p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-sage-50 border-2 border-sage-200 rounded-2xl flex items-center justify-center shadow-sm z-10 relative">
                <svg class="w-9 h-9 text-sage-500" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <div class="absolute -top-2 -right-2 w-7 h-7 bg-sage-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">2</div>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Converse com a IA</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Nossa IA faz perguntas suaves e curiosas. Você responde como se estivesse conversando com um amigo.</p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div class="relative mb-6">
              <div class="w-20 h-20 bg-sage-50 border-2 border-sage-200 rounded-2xl flex items-center justify-center shadow-sm z-10 relative">
                <svg class="w-9 h-9 text-sage-500" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </div>
              <div class="absolute -top-2 -right-2 w-7 h-7 bg-sage-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">3</div>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Compartilhe o que importa</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Suas histórias ficam guardadas e organizadas. Compartilhe com a família — ou guarde só para você.</p>
          </div>
        </div>
      </div>
    </section>
    <!--PLANS-->

    <!-- ─── CTA FINAL ────────────────────────────────────────────────────── -->
    <section id="baixar" class="py-24 bg-cream relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background-image: radial-gradient(circle, rgba(45,106,79,0.07) 1px, transparent 1px); background-size: 24px 24px;"></div>
      <div class="absolute top-0 right-0 w-80 h-80 bg-sage-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-warm-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

      <div class="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div class="reveal w-16 h-16 bg-sage-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-sage-500/20">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>

        <h2 class="reveal text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5" style="transition-delay: 100ms">
          Não deixe as histórias<br>
          <span class="gradient-text">se perderem</span>
        </h2>
        <p class="reveal text-lg text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed" style="transition-delay: 200ms">
          Baixe o aplicativo, crie sua conta no plano Gratuito e comece hoje a guardar as histórias que importam.
        </p>

        <div class="reveal" style="transition-delay: 300ms">
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4 justify-center">
            <a href="{{IOS_URL}}" class="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-lg">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.78.9-2.06 1.6-3.12 1.52-.13-1.1.4-2.27 1.06-3 .76-.84 2.1-1.46 3.18-1.52zM20.5 17.2c-.55 1.28-.82 1.85-1.53 2.98-1 1.58-2.4 3.54-4.13 3.55-1.54.02-1.94-1.01-4.03-1-2.09.01-2.53 1.02-4.07 1-1.73-.01-3.06-1.78-4.05-3.36C-.4 17.36-.7 12.06 1.4 9.27c1.05-1.42 2.7-2.32 4.26-2.32 1.6 0 2.6 1.04 3.92 1.04 1.28 0 2.06-1.04 3.91-1.04 1.4 0 2.88.76 3.94 2.08-3.46 1.9-2.9 6.84.67 8.17z"/></svg>
              Baixar na App Store
            </a>
            <a href="{{ANDROID_URL}}" class="inline-flex items-center justify-center gap-2.5 bg-ink text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-lg">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.3l11.05 11.05L3.6 23.4a1.7 1.7 0 01-.6-1.3V2.6c0-.5.23-.97.6-1.3zM16.8 9.4l2.6 1.5c1 .58 1 2.04 0 2.62l-2.6 1.5-2.9-2.81 2.9-2.81zM5.2.6l9.5 5.47-2.6 2.5L5.2.6zm0 22.8l6.9-7.97 2.6 2.5L5.2 23.4z"/></svg>
              Disponível no Google Play
            </a>
          </div>
          <p class="text-xs text-slate-400">
            Gratuito para começar · Sem cartão de crédito · Assinatura opcional dentro do app
          </p>
        </div>

        <!-- Trust badges -->
        <div class="reveal flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-slate-400" style="transition-delay: 400ms">
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-sage-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Seguro e privado
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-sage-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            Sem cartão de crédito
          </div>
          <div class="flex items-center gap-1.5">
            <svg class="w-4 h-4 text-sage-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Feito para toda a família
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- ─── FOOTER ───────────────────────────────────────────────────────── -->
  <footer class="bg-sage-800 text-white py-12">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <img src="/logo.png" alt="Vale das Memórias" class="h-9 w-9 object-contain" />
            <span class="font-semibold text-white">Vale das Memórias</span>
          </div>
          <p class="text-white/40 text-sm max-w-xs leading-relaxed">
            Preservando histórias de vida para que o amor dure além do tempo.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-8 text-sm">
          <div>
            <div class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Produto</div>
            <ul class="space-y-2 font-sans">
              <li><a href="#como-funciona" class="text-white/50 hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#funcionalidades" class="text-white/50 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#planos" class="text-white/50 hover:text-white transition-colors">Planos</a></li>
              <li><a href="/get-started" class="text-white/50 hover:text-white transition-colors">Baixar o app</a></li>
              <li><a href="/memorial/demo" class="text-white/50 hover:text-white transition-colors">Memorial de exemplo</a></li>
              <li><a href="/partners" class="text-white/50 hover:text-white transition-colors">Seja um parceiro</a></li>
            </ul>
          </div>
          <div>
            <div class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Legal</div>
            <ul class="space-y-2 font-sans">
              <li><a href="/privacy" class="text-white/50 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="/terms" class="text-white/50 hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="/privacy#direitos" class="text-white/50 hover:text-white transition-colors">LGPD</a></li>
              <li><a href="/account-deletion" class="text-white/50 hover:text-white transition-colors">Excluir conta</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
        <span>© 2026 Vale das Memórias. Todos os direitos reservados.</span>
        <span class="flex items-center gap-1">
          Feito com
          <svg class="w-3 h-3 text-warm-400 fill-warm-400 mx-0.5" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/></svg>
          para as famílias brasileiras
        </span>
      </div>
    </div>
  </footer>`;
