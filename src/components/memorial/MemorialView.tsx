import type { PublicMemorialData } from '@/lib/memorial-api';
import { coverGradient, formatLifeSpan, initials } from '@/lib/memorial-format';
import { MemorialTabs } from './MemorialTabs';

interface Props {
  data: PublicMemorialData;
  /** Quando true, exibe o selo "EXEMPLO" (memorial demo). */
  isDemo?: boolean;
}

export function MemorialView({ data, isDemo = false }: Props) {
  const { user, plan, memories, totalPublicMemories, chapters, tributes } = data;
  const lifeSpan = formatLifeSpan(user.birthDate, user.deceasedAt);

  return (
    <main className="min-h-screen pb-16">
      {isDemo && (
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 bg-primary/90 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white">
          <span>Exemplo — memorial fictício</span>
          <span className="font-normal normal-case tracking-normal">
            <a href="/memorial/demo" className="underline">
              Em memória
            </a>
            {' · '}
            <a href="/memorial/demo/em-vida" className="underline">
              Em vida
            </a>
          </span>
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
          {lifeSpan && <p className="mt-1 text-sm text-ink-soft">{lifeSpan}</p>}
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

      <MemorialTabs
        memories={memories}
        totalPublicMemories={totalPublicMemories}
        tier={plan.tier}
        chapters={chapters}
        tributes={tributes}
      />

      <footer className="mx-auto mt-16 max-w-3xl px-4 text-center text-xs text-ink-muted">
        Preservado com carinho no{' '}
        <a href="/" className="text-primary hover:underline">
          Vale das Memórias
        </a>
      </footer>
    </main>
  );
}
