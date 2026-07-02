'use client';

import { useState } from 'react';

import type {
  MemorialChapter,
  MemorialTribute,
  PublicMemoryItem,
} from '@/lib/memorial-api';
import { CATEGORY_LABELS, formatMemoryDate } from '@/lib/memorial-format';

interface Props {
  memories: PublicMemoryItem[];
  totalPublicMemories: number;
  tier: 'free' | 'paid';
  chapters: MemorialChapter[] | null;
  tributes: MemorialTribute[] | null | undefined;
}

type TabKey = 'memorias' | 'historia' | 'homenagens';

export function MemorialTabs({ memories, totalPublicMemories, tier, chapters, tributes }: Props) {
  const hasChapters = !!chapters && chapters.length > 0;
  const hasTributes = !!tributes && tributes.length > 0;

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'memorias', label: 'Memórias' },
    ...(hasChapters ? [{ key: 'historia' as TabKey, label: 'História' }] : []),
    ...(hasTributes ? [{ key: 'homenagens' as TabKey, label: 'Homenagens' }] : []),
  ];

  const [active, setActive] = useState<TabKey>('memorias');

  return (
    <section className="mx-auto mt-10 max-w-3xl px-4">
      {tabs.length > 1 && (
        <div className="mb-6 flex gap-1 border-b border-border-soft">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition ${
                active === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-ink-muted hover:text-ink-soft'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {active === 'memorias' && (
        <MemoriesPanel memories={memories} totalPublicMemories={totalPublicMemories} tier={tier} />
      )}
      {active === 'historia' && hasChapters && <ChaptersPanel chapters={chapters!} />}
      {active === 'homenagens' && hasTributes && <TributesPanel tributes={tributes!} />}
    </section>
  );
}

function MemoriesPanel({
  memories,
  totalPublicMemories,
  tier,
}: {
  memories: PublicMemoryItem[];
  totalPublicMemories: number;
  tier: 'free' | 'paid';
}) {
  const hiddenCount = Math.max(0, totalPublicMemories - memories.length);

  if (memories.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-border-soft py-12 text-center text-sm italic text-ink-muted">
        Este memorial está sendo construído.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {memories.map((memory) => (
          <article
            key={memory.id}
            className="rounded-card border border-border-soft bg-[hsl(var(--bg-card))] p-5 shadow-soft"
          >
            {memory.title && <h3 className="font-semibold text-ink">{memory.title}</h3>}
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

      {tier === 'free' && hiddenCount > 0 && (
        <div className="mt-6 rounded-card border border-primary/20 bg-[hsl(var(--primary-light))] px-5 py-6 text-center">
          <p className="text-sm font-medium text-primary-dark">
            Há mais {hiddenCount} {hiddenCount === 1 ? 'memória' : 'memórias'} neste legado.
          </p>
          <p className="mt-1 text-sm text-ink-soft">Conheça a história completa com o plano pago.</p>
        </div>
      )}
    </>
  );
}

function ChaptersPanel({ chapters }: { chapters: MemorialChapter[] }) {
  return (
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
            {chapter.period && <span className="text-xs text-ink-muted">{chapter.period}</span>}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{chapter.summary}</p>
        </li>
      ))}
    </ol>
  );
}

function TributesPanel({ tributes }: { tributes: MemorialTribute[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm text-ink-soft">
        Mensagens, fotos e vídeos enviados por quem conviveu com esta pessoa.
      </p>
      {tributes.map((tribute) => (
        <article
          key={tribute.id}
          className="rounded-card border border-border-soft bg-[hsl(var(--bg-card))] p-5 shadow-soft"
        >
          <header className="flex items-center gap-3">
            {tribute.authorAvatarUrl ? (
              <img
                src={tribute.authorAvatarUrl}
                alt={tribute.authorName}
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--primary-light))] text-primary">
                ✿
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-ink">{tribute.authorName}</p>
              <p className="text-xs text-ink-muted">{tribute.relationship}</p>
            </div>
          </header>

          {tribute.message && (
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tribute.message}</p>
          )}

          {tribute.type === 'photo' && tribute.mediaUrl && (
            <img
              src={tribute.mediaUrl}
              alt={`Foto enviada por ${tribute.authorName}`}
              className="mt-3 w-full rounded-lg object-cover"
            />
          )}

          {tribute.type === 'video' && tribute.mediaUrl && (
            <div className="relative mt-3 overflow-hidden rounded-lg">
              <img
                src={tribute.mediaUrl}
                alt={`Vídeo enviado por ${tribute.authorName}`}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-xl text-primary-dark">
                  ▶
                </span>
              </div>
              <span className="absolute left-3 top-3 rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                Vídeo
              </span>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
