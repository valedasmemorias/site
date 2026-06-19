/* GERADO de /Users/jhow/Works/valedasmemorias/site pelo script de migração — não editar à mão (regenerar). */
/* eslint-disable */
export const HOME_HTML = `<!-- ─── NAVBAR ─────────────────────────────────────────────────────────── -->
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-300" id="navbar">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <img src="/logo.png" alt="Vale das Memórias" class="h-9 w-9 object-contain group-hover:scale-105 transition-transform" />
        <span class="font-semibold text-slate-900 tracking-tight">Vale das Memórias</span>
      </a>
      <!-- Nav links -->
      <nav class="hidden md:flex items-center gap-7 text-sm text-slate-500 font-sans">
        <a href="#como-funciona" class="hover:text-sage-600 transition-colors">Como funciona</a>
        <a href="#funcionalidades" class="hover:text-sage-600 transition-colors">Funcionalidades</a>
        <a href="#planos" class="hover:text-sage-600 transition-colors">Planos</a>
        <a href="/get-started" class="hover:text-sage-600 transition-colors">Para você</a>
        <a href="/partners" class="hover:text-sage-600 transition-colors">Para parceiros</a>
      </nav>
      <a href="/get-started" class="hidden md:inline-flex items-center gap-1.5 bg-sage-500 text-white text-sm font-semibold font-sans px-4 py-2 rounded-lg hover:bg-sage-600 transition-colors shadow-sm">
        Começar agora
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
            Lista de espera aberta
          </div>

          <h1 class="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6 animate-fade-up delay-100">
            Suas histórias<br>
            <span class="gradient-text">merecem durar</span><br>
            para sempre
          </h1>

          <p class="text-lg text-slate-500 leading-relaxed mb-8 max-w-md animate-fade-up delay-200">
            Um lugar onde as memórias da sua vida encontram palavras. Converse com nossa IA, reviva momentos, e deixe um legado que as pessoas que você ama nunca vão esquecer.
          </p>

          <!-- Waitlist form -->
          <form id="hero-form" class="animate-fade-up delay-300" data-subscribe>
            <div class="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                class="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all text-sm shadow-sm"
              />
              <button type="submit" class="bg-sage-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sage-600 active:scale-95 transition-all text-sm shadow-md shadow-sage-500/20 whitespace-nowrap">
                Entrar na lista
              </button>
            </div>
            <p class="text-xs text-slate-400 mt-3">Gratuito para começar. Sem cartão de crédito.</p>
          </form>
        </div>

        <!-- Visual: Abstract memory cards -->
        <div class="relative hidden lg:flex items-center justify-center h-[480px]">
          <!-- Background blur card -->
          <div class="absolute inset-8 bg-gradient-to-br from-sage-100 to-warm-100 rounded-3xl opacity-60 blur-sm"></div>

          <!-- Memory card 1 -->
          <div class="memory-card absolute top-10 left-6 w-64 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/80 border border-slate-100 z-20">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white text-sm font-bold">A</div>
              <div>
                <div class="text-xs font-semibold text-slate-800">Ana Ferreira</div>
                <div class="text-[10px] text-slate-400">Contado em junho de 2024</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic">
              "O verão em que meu pai me ensinou a pescar no rio. Eu tinha uns 8 anos e achava que ele sabia de tudo..."
            </p>
            <div class="mt-3 flex items-center gap-1.5">
              <span class="text-[10px] bg-sage-50 text-sage-600 px-2 py-0.5 rounded-full font-medium">Infância</span>
              <span class="text-[10px] bg-warm-100 text-warm-500 px-2 py-0.5 rounded-full font-medium">Família</span>
            </div>
          </div>

          <!-- Memory card 2 -->
          <div class="memory-card-2 absolute bottom-10 right-4 w-60 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/80 border border-slate-100 z-20">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-warm-400 to-warm-500 flex items-center justify-center text-white text-sm font-bold">M</div>
              <div>
                <div class="text-xs font-semibold text-slate-800">Marcos Lima</div>
                <div class="text-[10px] text-slate-400">Contado em março de 2024</div>
              </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed italic">
              "Minha avó fazia um bolo de laranja todo domingo. Só descobri a receita depois que ela foi embora..."
            </p>
            <div class="mt-3 flex gap-1.5">
              <span class="text-[10px] bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full font-medium">Legado</span>
            </div>
          </div>

          <!-- Center card — conversation -->
          <div class="relative z-30 w-72 bg-white rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-100 overflow-hidden">
            <div class="bg-sage-500 px-4 py-3 flex items-center gap-3">
              <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/></svg>
              </div>
              <div>
                <div class="text-white text-xs font-semibold">Vale das Memórias</div>
                <div class="text-white/60 text-[10px]">Assistente de histórias</div>
              </div>
            </div>
            <div class="p-4 space-y-3 bg-slate-50 min-h-[180px]">
              <div class="flex gap-2">
                <div class="w-6 h-6 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/></svg>
                </div>
                <div class="bg-white rounded-lg rounded-tl-sm px-3 py-2 text-[11px] text-slate-700 shadow-sm max-w-[85%] leading-relaxed">
                  Que memória da sua infância você nunca quer esquecer? 🌿
                </div>
              </div>
              <div class="flex justify-end">
                <div class="bg-sage-500 rounded-lg rounded-tr-sm px-3 py-2 text-[11px] text-white max-w-[85%] leading-relaxed">
                  A casa da minha avó no interior. O cheiro do café pela manhã...
                </div>
              </div>
              <div class="flex gap-2">
                <div class="w-6 h-6 bg-sage-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11 3 12 4 12 4C12 4 13 3 14.5 3C17.5 3 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/></svg>
                </div>
                <div class="bg-white rounded-lg rounded-tl-sm px-3 py-2 text-[11px] text-slate-700 shadow-sm max-w-[85%] leading-relaxed">
                  Que lindo. Me conta mais sobre ela — como era sua avó? ✨
                </div>
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

    <!-- ─── SOCIAL PROOF ─────────────────────────────────────────────────── -->
    <section class="py-16 border-y border-slate-100 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">O que as pessoas estão dizendo</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Testimonial 1 -->
          <div class="reveal card-hover bg-cream rounded-2xl p-6 border border-slate-100">
            <div class="flex gap-1 mb-3">
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-4 italic">
              "Minha mãe tem 74 anos. Passamos horas conversando sobre a vida dela. Agora temos um arquivo de memórias que meus filhos vão poder ler um dia."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white text-sm font-bold">C</div>
              <div>
                <div class="text-sm font-semibold text-slate-800">Carla Mendes</div>
                <div class="text-xs text-slate-400">São Paulo, SP</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="reveal card-hover bg-cream rounded-2xl p-6 border border-slate-100" style="transition-delay: 120ms">
            <div class="flex gap-1 mb-3">
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-4 italic">
              "Nunca soube muita coisa sobre meu avô. Quando encontrei a história que ele gravou antes de ir embora, chorei muito. Isso não tem preço."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-warm-400 to-warm-500 flex items-center justify-center text-white text-sm font-bold">R</div>
              <div>
                <div class="text-sm font-semibold text-slate-800">Rafael Costa</div>
                <div class="text-xs text-slate-400">Belo Horizonte, MG</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="reveal card-hover bg-cream rounded-2xl p-6 border border-slate-100" style="transition-delay: 240ms">
            <div class="flex gap-1 mb-3">
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <svg class="w-4 h-4 text-warm-400 fill-warm-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-4 italic">
              "Comecei a usar pra registrar minhas próprias memórias. A IA faz perguntas tão boas que me lembrei de coisas que eu nem sabia que ainda estavam na minha cabeça."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">L</div>
              <div>
                <div class="text-sm font-semibold text-slate-800">Lúcia Andrade</div>
                <div class="text-xs text-slate-400">Porto Alegre, RS</div>
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
                <p class="text-sm text-slate-500 leading-relaxed">Cada memória é organizada, preservada e disponível para você e para quem você autorizar. Seus netos podem ler, ouvir e se sentir perto de você — mesmo décadas depois.</p>
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
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
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
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Voz, texto e fotos</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Conte suas histórias do jeito que preferir — em texto, áudio ou com fotos. Tudo é transcrito e organizado automaticamente.</p>
          </div>

          <!-- Feature 4 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 240ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Compartilhe com a família</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Convide parentes para acessar as memórias. Eles podem ler, ouvir e até adicionar as deles — criando um acervo vivo da família.</p>
          </div>

          <!-- Feature 5 -->
          <div class="reveal card-hover bg-white rounded-2xl p-7 border border-slate-100 shadow-sm" style="transition-delay: 320ms">
            <div class="w-12 h-12 bg-sage-50 border border-sage-100 rounded-xl flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 class="font-semibold text-slate-800 mb-2">Livro de memórias</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Transforme suas histórias em um livro impresso, lindo e encadernado — um presente que dura gerações.</p>
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
            <h3 class="font-semibold text-slate-800 mb-2">Crie sua conta</h3>
            <p class="text-sm text-slate-500 leading-relaxed">Em menos de um minuto, você entra. Nada complicado — só seu nome e e-mail.</p>
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
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Cápsula do tempo</li>
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
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público</li>
              <li class="flex items-center gap-2 text-slate-400"><span>✕</span> Cápsula do tempo</li>
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
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Cápsula do tempo</li>
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
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Memorial público</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Cápsula do tempo</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Capítulos da vida</li>
              <li class="flex items-center gap-2 text-ink"><span class="text-sage-600">✓</span> Entrada por áudio</li>
            </ul>
            <a href="/get-started" class="mt-6 inline-flex justify-center bg-sage-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-sage-600 transition-colors text-sm">Baixar o app</a>
          </div>
        </div>
        <p class="text-center text-xs text-slate-400 mt-8">Recursos de cada plano. Você pode mudar de plano quando quiser, direto no app.</p>
      </div>
    </section>


    <!-- ─── CTA FINAL ────────────────────────────────────────────────────── -->
    <section id="waitlist" class="py-24 bg-cream relative overflow-hidden">
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
          Junte-se a centenas de famílias que já estão preservando o que importa. Entre na lista de espera e seja um dos primeiros a usar o Vale das Memórias.
        </p>

        <form id="cta-form" class="reveal" style="transition-delay: 300ms" data-subscribe>
          <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
            <input
              type="email"
              required
              placeholder="Seu melhor e-mail"
              class="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all text-sm shadow-sm"
            />
            <button type="submit" class="bg-sage-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-sage-600 active:scale-95 transition-all text-sm shadow-lg shadow-sage-500/20 whitespace-nowrap">
              Entrar na lista
            </button>
          </div>
          <p class="text-xs text-slate-400">
            Gratuito para começar · Sem spam · Cancele quando quiser
          </p>
        </form>

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
              <li><a href="/get-started" class="text-white/50 hover:text-white transition-colors">Criar minha conta</a></li>
              <li><a href="/partners" class="text-white/50 hover:text-white transition-colors">Seja um parceiro</a></li>
            </ul>
          </div>
          <div>
            <div class="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Legal</div>
            <ul class="space-y-2 font-sans">
              <li><a href="/privacy" class="text-white/50 hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="/terms" class="text-white/50 hover:text-white transition-colors">Termos de uso</a></li>
              <li><a href="/privacy#direitos" class="text-white/50 hover:text-white transition-colors">LGPD</a></li>
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
