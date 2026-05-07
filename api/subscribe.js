import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'Vale das Memórias <contato@valedasmemorias.com.br>';
const CONTACT = 'contato@valedasmemorias.com.br';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (str) =>
  String(str)
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

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : req.body;
  const email = body?.email?.trim().toLowerCase();
  const source = typeof body?.source === 'string' ? body.source : 'site';

  if (!email || !isValidEmail(email) || email.length > 254) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  const safeEmail = escapeHtml(email);
  const safeSource = escapeHtml(source);

  try {
    const [internal, confirmation] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: CONTACT,
        replyTo: email,
        subject: 'Novo cadastro na lista de espera',
        html: `
          <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #1f2937; line-height: 1.6;">
            <h2 style="margin: 0 0 12px;">Novo cadastro na lista de espera</h2>
            <p>Um novo e-mail entrou na lista de espera do Vale das Memórias.</p>
            <p><strong>E-mail:</strong> ${safeEmail}<br>
               <strong>Origem:</strong> ${safeSource}</p>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        replyTo: CONTACT,
        subject: 'Recebemos seu cadastro — Vale das Memórias',
        html: `
          <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color: #1f2937; line-height: 1.6; max-width: 560px;">
            <h2 style="margin: 0 0 16px; color: #2f4f3a;">Obrigado por entrar na nossa lista 💚</h2>
            <p>Olá!</p>
            <p>Recebemos o seu cadastro na lista de espera do <strong>Vale das Memórias</strong>. Em breve entraremos em contato neste mesmo e-mail com novidades e os próximos passos.</p>
            <p>Enquanto isso, fique à vontade para responder esta mensagem se quiser nos contar um pouco da história que você gostaria de preservar — adoramos ouvir.</p>
            <p style="margin-top: 24px;">Com carinho,<br><strong>Equipe Vale das Memórias</strong></p>
          </div>
        `,
      }),
    ]);

    if (internal?.error || confirmation?.error) {
      console.error('resend partial error', { internal: internal?.error, confirmation: confirmation?.error });
      return res.status(502).json({ error: 'Não foi possível enviar o e-mail agora' });
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
