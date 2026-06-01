import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Vale das Memórias <contato@valedasmemorias.com.br>';
const CONTACT = 'contato@valedasmemorias.com.br';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Valida CNPJ (14 dígitos + dígitos verificadores).
const isValidCnpj = (raw) => {
  const cnpj = String(raw).replace(/\D/g, '');
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  const calc = (base) => {
    let sum = 0;
    let pos = base.length - 7;
    for (let i = 0; i < base.length; i++) {
      sum += Number(base[i]) * pos;
      pos = pos === 2 ? 9 : pos - 1;
    }
    const result = sum % 11;
    return result < 2 ? 0 : 11 - result;
  };

  const digits = cnpj.slice(0, 12);
  const d1 = calc(digits);
  const d2 = calc(digits + d1);
  return cnpj.endsWith(`${d1}${d2}`);
};

const formatCnpj = (raw) => {
  const c = String(raw).replace(/\D/g, '');
  return c.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3.$4-$5');
};

const escapeHtml = (str) =>
  String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método não permitido' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY não configurada');
    return res.status(500).json({ error: 'Serviço de e-mail indisponível' });
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body || {};

  const companyName = String(body.companyName ?? '').trim();
  const responsibleName = String(body.responsibleName ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const phone = String(body.phone ?? '').trim();
  const cnpjRaw = String(body.cnpj ?? '').trim();
  const message = String(body.message ?? '').trim();

  // ── Validação ──────────────────────────────────────────────────────────
  if (!companyName || companyName.length > 200) {
    return res.status(400).json({ error: 'Informe o nome da empresa' });
  }
  if (!responsibleName || responsibleName.length > 200) {
    return res.status(400).json({ error: 'Informe o nome do responsável' });
  }
  if (!email || !isValidEmail(email) || email.length > 254) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }
  if (!isValidCnpj(cnpjRaw)) {
    return res.status(400).json({ error: 'CNPJ inválido' });
  }
  if (message.length > 2000) {
    return res.status(400).json({ error: 'Mensagem muito longa' });
  }

  const cnpj = formatCnpj(cnpjRaw);

  const safe = {
    companyName: escapeHtml(companyName),
    responsibleName: escapeHtml(responsibleName),
    email: escapeHtml(email),
    phone: escapeHtml(phone) || '—',
    cnpj: escapeHtml(cnpj),
    message: escapeHtml(message) || '—',
  };

  try {
    const [internal, confirmation] = await Promise.all([
      // E-mail interno para o time comercial
      resend.emails.send({
        from: FROM,
        to: CONTACT,
        replyTo: email,
        subject: `Novo parceiro interessado — ${companyName}`,
        html: `
          <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #1A2E26; line-height: 1.6; max-width: 600px;">
            <h2 style="margin: 0 0 12px; color: #1F4D38;">Novo interesse de parceria 🤝</h2>
            <p>Uma empresa demonstrou interesse em aderir à plataforma Vale das Memórias.</p>
            <table style="border-collapse: collapse; margin-top: 12px; font-size: 14px;">
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53;"><strong>Empresa</strong></td><td>${safe.companyName}</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53;"><strong>CNPJ</strong></td><td>${safe.cnpj}</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53;"><strong>Responsável</strong></td><td>${safe.responsibleName}</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53;"><strong>E-mail</strong></td><td>${safe.email}</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53;"><strong>Telefone</strong></td><td>${safe.phone}</td></tr>
              <tr><td style="padding: 4px 16px 4px 0; color: #4A5B53; vertical-align: top;"><strong>Mensagem</strong></td><td>${safe.message}</td></tr>
            </table>
          </div>
        `,
      }),
      // E-mail de confirmação para o cliente
      resend.emails.send({
        from: FROM,
        to: email,
        replyTo: CONTACT,
        subject: 'Recebemos seu interesse — Vale das Memórias',
        html: `
          <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #1A2E26; line-height: 1.6; max-width: 560px;">
            <h2 style="margin: 0 0 16px; color: #1F4D38;">Obrigado pelo interesse 💚</h2>
            <p>Olá, ${safe.responsibleName}!</p>
            <p>Recebemos o cadastro da <strong>${safe.companyName}</strong> para fazer parte da plataforma <strong>Vale das Memórias</strong>.</p>
            <p>Nossa equipe já está <strong>analisando as informações</strong>. Em breve você receberá um e-mail neste mesmo endereço com os próximos passos para ativar a sua parceria.</p>
            <p>Se quiser adiantar qualquer detalhe, é só responder esta mensagem — teremos prazer em conversar.</p>
            <p style="margin-top: 24px;">Com carinho,<br><strong>Equipe Vale das Memórias</strong></p>
          </div>
        `,
      }),
    ]);

    if (internal?.error || confirmation?.error) {
      console.error('resend partial error', { internal: internal?.error, confirmation: confirmation?.error });
      return res.status(502).json({ error: 'Não foi possível enviar agora' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('resend error', err);
    return res.status(500).json({ error: 'Erro ao enviar e-mail' });
  }
}

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
