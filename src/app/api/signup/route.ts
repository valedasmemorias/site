/**
 * Cadastro de cliente final no tenant Vale das Memórias.
 *
 * Encaminha o cadastro para a Tenant API v1 (POST /api/v1/users), autenticando
 * com a API key do tenant VDM. A key NUNCA é exposta ao navegador — fica só aqui.
 *
 * Variáveis de ambiente (configurar na Vercel):
 *   VDM_TENANT_API_KEY  (obrigatória) — API key do tenant Vale das Memórias
 *   VDM_API_URL         (opcional)    — base da API (default: produção)
 */

const API_URL = process.env.VDM_API_URL || 'https://api.valedasmemorias.com.br';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Normaliza telefone BR para E.164 (ex.: (11) 99999-9999 -> 5511999999999).
const toE164 = (raw: string): string | null => {
  let digits = String(raw).replace(/\D/g, '');
  if (!digits) return null;
  if (digits.startsWith('00')) digits = digits.slice(2);
  if (digits.length <= 11) digits = `55${digits}`;
  if (digits.length < 12 || digits.length > 15) return null;
  return digits;
};

export async function POST(req: Request) {
  if (!process.env.VDM_TENANT_API_KEY) {
    console.error('VDM_TENANT_API_KEY não configurada');
    return Response.json({ error: 'Serviço de cadastro indisponível' }, { status: 500 });
  }

  const body = await req.json().catch(() => ({}));

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const phoneRaw = String(body.phone ?? '').trim();

  if (!name || name.length > 255) {
    return Response.json({ error: 'Informe seu nome' }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 254) {
    return Response.json({ error: 'E-mail inválido' }, { status: 400 });
  }

  const phoneE164 = phoneRaw ? toE164(phoneRaw) : null;
  if (phoneRaw && !phoneE164) {
    return Response.json({ error: 'Telefone inválido' }, { status: 400 });
  }

  // Payload aceito pela Tenant API (CreateUserApiDto). Plano inicial: gratuito.
  const payload: Record<string, unknown> = { name, email, planKey: 'gratuito' };
  if (phoneE164) payload.phoneE164 = phoneE164;

  try {
    const apiRes = await fetch(`${API_URL}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.VDM_TENANT_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await apiRes.json().catch(() => ({}));

    if (apiRes.status === 201) {
      return Response.json({ ok: true, userId: data.id }, { status: 200 });
    }

    if (apiRes.status === 409 || data?.error === 'USER_ALREADY_EXISTS') {
      return Response.json(
        { error: 'Este e-mail já tem um cadastro. Verifique sua caixa de entrada.' },
        { status: 409 },
      );
    }

    if (apiRes.status === 400) {
      console.error('tenant api validation', data);
      return Response.json(
        { error: 'Não foi possível concluir o cadastro com esses dados.' },
        { status: 400 },
      );
    }

    console.error('tenant api error', apiRes.status, data);
    return Response.json(
      { error: 'Não foi possível concluir o cadastro agora. Tente novamente.' },
      { status: 502 },
    );
  } catch (err) {
    console.error('cadastro fetch error', err);
    return Response.json({ error: 'Erro ao concluir o cadastro' }, { status: 500 });
  }
}
