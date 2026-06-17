'use client';

import { useEffect, useState, useTransition } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import { activateMemorialAction } from '@/lib/memorial-actions';

export default function ActivateMemorialPage() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get('token');
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setErrorMessage('Link de ativação inválido. Verifique o e-mail recebido.');
    }
  }, [token]);

  function handleActivate() {
    if (!token) return;
    startTransition(async () => {
      const result = await activateMemorialAction(token);
      if ('error' in result) {
        setStatus('error');
        setErrorMessage(result.error);
        return;
      }
      router.replace(`/memorial/${result.memorialSlug}`);
    });
  }

  const isError = status === 'error';

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-card border border-border-soft bg-[hsl(var(--bg-card))] p-8 text-center shadow-lift">
        <div
          className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-xl ${
            isError ? 'bg-red-100 text-red-600' : 'bg-[hsl(var(--primary-light))] text-primary'
          }`}
        >
          {isError ? '⚠' : '✿'}
        </div>

        {isError ? (
          <>
            <h1 className="mt-4 text-xl font-semibold text-ink">Não foi possível ativar</h1>
            <p className="mt-2 text-sm text-ink-soft">{errorMessage}</p>
            <a
              href={`/memorial/${params.slug}`}
              className="mt-6 inline-block rounded-full border border-border-soft px-5 py-2 text-sm text-ink-soft hover:bg-[hsl(var(--bg-warm))]"
            >
              ← Voltar ao memorial
            </a>
          </>
        ) : (
          <>
            <h1 className="mt-4 text-xl font-semibold text-ink">Ativação de Memorial</h1>
            <p className="mt-2 text-sm text-ink-soft">
              Ao confirmar, este memorial será ativado e as memórias públicas ficarão visíveis
              para todos. Esta ação não pode ser desfeita.
            </p>
            <button
              onClick={handleActivate}
              disabled={isPending || !token}
              className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {isPending ? 'Ativando…' : 'Confirmar ativação do memorial'}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
