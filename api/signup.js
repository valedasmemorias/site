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

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Normaliza telefone BR para E.164 (ex.: (11) 99999-9999 -> 5511999999999).
// Retorna null se não houver dígitos suficientes.
const toE164 = (raw) => {
  let digits = String(raw).replace(/\D/g, '');
  if (!digits) return null;
  if (digits.startsWith('00')) digits = digits.slice(2);
  // Sem código de país (10–11 dígitos) -> assume Brasil (+55).
  if (digits.length <= 11) digits = `55${digits}`;
  if (digits.length < 12 || digits.length > 15) return null;
  return digits;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  if (!process.env.VDM_TENANT_API_KEY) {
    console.error('VDM_TENANT_API_KEY não configurada');
    return res.status(500).json({ error: 'Serviço de cadastro indisponível' });
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body || {};

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const phoneRaw = String(body.phone ?? '').trim();

  if (!name || name.length > 255) {
    return res.status(400).json({ error: 'Informe seu nome' });
  }
  if (!email || !isValidEmail(email) || email.length > 254) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  const phoneE164 = phoneRaw ? toE164(phoneRaw) : null;
  if (phoneRaw && !phoneE164) {
    return res.status(400).json({ error: 'Telefone inválido' });
  }

  // Payload aceito pela Tenant API (CreateUserApiDto). Plano inicial: gratuito.
  const payload = { name, email, planKey: 'gratuito' };
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
      return res.status(200).json({ ok: true, userId: data.id });
    }

    if (apiRes.status === 409 || data?.error === 'USER_ALREADY_EXISTS') {
      return res.status(409).json({ error: 'Este e-mail já tem um cadastro. Verifique sua caixa de entrada.' });
    }

    if (apiRes.status === 400) {
      console.error('tenant api validation', data);
      return res.status(400).json({ error: 'Não foi possível concluir o cadastro com esses dados.' });
    }

    console.error('tenant api error', apiRes.status, data);
    return res.status(502).json({ error: 'Não foi possível concluir o cadastro agora. Tente novamente.' });
  } catch (err) {
    console.error('cadastro fetch error', err);
    return res.status(500).json({ error: 'Erro ao concluir o cadastro' });
  }
}

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
