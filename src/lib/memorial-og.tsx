import { ImageResponse } from 'next/og';

import type { PublicMemorialData } from './memorial-api';
import { coverGradient, formatLifeDates, initials } from './memorial-format';

/** Busca a capa e devolve um data-URI; null se faltar/falhar (cai no gradiente). */
async function loadCover(url: string | null): Promise<string | null> {
  if (!url) return null;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get('content-type') ?? 'image/jpeg';
    return `data:${contentType};base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

/** Gera o card social (Open Graph) do memorial. Compartilhado entre slug real e demo. */
export async function renderMemorialOgImage(
  data: PublicMemorialData,
  size: { width: number; height: number },
): Promise<ImageResponse> {
  const { user } = data;
  const lifeDates = formatLifeDates(user.birthDate, user.deceasedAt);
  const cover = await loadCover(user.coverImageUrl);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ...(cover
            ? { backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { backgroundImage: coverGradient(user.name) }),
        }}
      >
        {/* Camada de escurecimento para legibilidade */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.6))',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 80px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 140,
              height: 140,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.92)',
              color: '#1F4D38',
              fontSize: 56,
              fontWeight: 700,
              marginBottom: 28,
            }}
          >
            {initials(user.name)}
          </div>
          <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#ffffff' }}>
            {user.name ?? 'Memorial'}
          </div>
          {lifeDates && (
            <div style={{ display: 'flex', marginTop: 10, fontSize: 30, color: 'rgba(255,255,255,0.85)' }}>
              {lifeDates}
              {user.birthCity ? ` · ${user.birthCity}` : ''}
            </div>
          )}
          {user.epitaph && (
            <div
              style={{
                display: 'flex',
                marginTop: 24,
                fontSize: 32,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.95)',
                maxWidth: 900,
              }}
            >
              “{user.epitaph}”
            </div>
          )}
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              fontSize: 22,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Vale das Memórias
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
