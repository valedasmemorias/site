import type { PublicMemorialData } from '@/lib/memorial-api';
import {
  CATEGORY_LABELS,
  coverGradient,
  formatLifeDates,
  formatMemoryDate,
  initials,
} from '@/lib/memorial-format';

interface Props {
  data: PublicMemorialData;
  /** Quando true, exibe o selo "EXEMPLO" (memorial demo). */
  isDemo?: boolean;
}

export function MemorialView({ data, isDemo = false }: Props) {
  const { user, plan, memories, totalPublicMemories, chapters } = data;
  const lifeDates = formatLifeDates(user.birthDate, user.deceasedAt);
  const hiddenCount = Math.max(0, totalPublicMemories - memories.length);

  return (
    <main className="min-h-screen pb-16">
      {isDemo && (
        <div className="bg-primary/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white">
          Exemplo — memorial fictício para demonstração
        </div>
      )}

      {/* Hero */}
      <header className="relative">
        <div
          className="h-56 w-full bg-cover bg-center sm:h-72"
          style={
            user.coverImageUrl
              ? { backgroundImage: `url(${user.coverImageUrl})` }
              : { backgroundImage: coverGradient(user.name) }
          }
        >
          <div className="h-full w-full bg-gradient-to-b from-black/10 to-black/40" />
        </div>

        <div className="mx-auto -mt-16 flex max-w-3xl flex-col items-center px-4 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[hsl(var(--bg))] bg-[hsl(var(--bg-card))] text-2xl font-semibold text-primary shadow-lg">
            {initials(user.name)}
          </div>
          <h1
            className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
            style={{ fontFamily: 'var(--font-serif), serif' }}
          >
            {user.name ?? 'Memorial'}
          </h1>
          {lifeDates && <p className="mt-1 text-sm text-ink-soft">{lifeDates}</p>}
          {user.birthCity && <p className="text-sm text-ink-muted">{user.birthCity}</p>}
          {user.epitaph && (
            <p className="mt-4 max-w-xl text-lg italic text-ink-soft">“{user.epitaph}”</p>
          )}
        </div>
      </header>

      {!user.isDeceased && (
        <div className="mx-auto mt-8 max-w-3xl px-4">
          <div className="rounded-card border border-border-soft bg-[hsl(var(--bg-warm))] px-4 py-3 text-center text-sm text-ink-soft">
            O titular deste memorial ainda está entre nós.
          </div>
        </div>
      )}

      {/* Memórias */}
      <section className="mx-auto mt-10 max-w-3xl px-4">
        <h2 className="mb-4 text-lg font-semibold text-ink">Memórias</h2>

        {memories.length === 0 ? (
          <div className="rounded-card border border-dashed border-border-soft py-12 text-center text-sm italic text-ink-muted">
            Este memorial está sendo construído.
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {memories.map((memory) => (
              <article
                key={memory.id}
                className="rounded-card border border-border-soft bg-[hsl(var(--bg-card))] p-5 shadow-soft"
              >
                {memory.title && (
                  <h3 className="font-semibold text-ink">{memory.title}</h3>
                )}
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                  {memory.category && (
                    <span className="rounded-full bg-[hsl(var(--primary-light))] px-2 py-0.5 text-primary-dark">
                      {CATEGORY_LABELS[memory.category] ?? memory.category}
                    </span>
                  )}
                  <span>{formatMemoryDate(memory.createdAt)}</span>
                </div>
                {memory.content && (
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-ink-soft">
                    {memory.content}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}

        {plan.tier === 'free' && hiddenCount > 0 && (
          <div className="mt-6 rounded-card border border-primary/20 bg-[hsl(var(--primary-light))] px-5 py-6 text-center">
            <p className="text-sm font-medium text-primary-dark">
              Há mais {hiddenCount} {hiddenCount === 1 ? 'memória' : 'memórias'} neste legado.
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Conheça a história completa com o plano pago.
            </p>
          </div>
        )}
      </section>

      {/* Capítulos da vida */}
      {chapters && chapters.length > 0 && (
        <section className="mx-auto mt-12 max-w-3xl px-4">
          <h2 className="mb-4 text-lg font-semibold text-ink">A história de uma vida</h2>
          <ol className="relative border-l border-border-soft pl-6">
            {chapters.map((chapter, i) => (
              <li key={i} className="mb-8 last:mb-0">
                <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-primary" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3
                    className="text-lg font-semibold text-ink"
                    style={{ fontFamily: 'var(--font-serif), serif' }}
                  >
                    {chapter.title}
                  </h3>
                  {chapter.period && (
                    <span className="text-xs text-ink-muted">{chapter.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{chapter.summary}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      <footer className="mx-auto mt-16 max-w-3xl px-4 text-center text-xs text-ink-muted">
        Preservado com carinho no{' '}
        <a href="/" className="text-primary hover:underline">
          Vale das Memórias
        </a>
      </footer>
    </main>
  );
}
