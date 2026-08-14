'use client';

import { useEffect } from 'react';

/**
 * Comportamento client-side das páginas de marketing (migrado dos `<script>`
 * inline do site estático): efeito de scroll no navbar, reveal-on-scroll e o
 * envio do formulário de parceiro. Cada bloco é guardado por presença do
 * elemento, então o mesmo componente serve todas as páginas — basta estar
 * montado uma vez (via layout).
 */
export function SiteScripts() {
  useEffect(() => {
    // ── Navbar scroll effect ────────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    const navClasses = [
      'bg-white/95',
      'backdrop-blur-md',
      'border-b',
      'border-border-soft',
      'shadow-sm',
    ];
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 30) navbar.classList.add(...navClasses);
      else navbar.classList.remove(...navClasses);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ── Reveal on scroll ────────────────────────────────────────────────
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // ── Cadastro de parceiro ────────────────────────────────────────────
    const partnerForm = document.getElementById('parceiro-form') as HTMLFormElement | null;
    const cnpjInput = document.getElementById('cnpj') as HTMLInputElement | null;
    const onCnpj = (e: Event) => {
      const t = e.target as HTMLInputElement;
      let v = t.value.replace(/\D/g, '').slice(0, 14);
      v = v
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2');
      t.value = v;
    };
    cnpjInput?.addEventListener('input', onCnpj);

    const onPartner = async (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (!button) return;
      const original = button.innerHTML;
      const field = (name: string) =>
        (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() ?? '';
      const payload = {
        companyName: field('companyName'),
        cnpj: field('cnpj'),
        responsibleName: field('responsibleName'),
        email: field('email'),
        phone: field('phone'),
        message: field('message'),
      };
      button.disabled = true;
      button.innerHTML = 'Enviando...';
      button.classList.add('opacity-70', 'cursor-not-allowed');
      form.querySelector('[data-error]')?.remove();
      try {
        const res = await fetch('/api/partner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Não foi possível enviar agora. Tente novamente.');
        }
        form.innerHTML = `
          <div class="flex flex-col items-center text-center gap-3 py-6">
            <div class="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center">
              <svg class="w-7 h-7 text-sage-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 class="text-xl font-semibold text-ink">Cadastro recebido! 🎉</h3>
            <p class="text-sm text-slate-500 max-w-sm">Enviamos uma confirmação para <strong>${payload.email}</strong>. Estamos analisando os dados e em breve entraremos em contato com os próximos passos.</p>
          </div>`;
      } catch (err) {
        const errorEl = document.createElement('p');
        errorEl.setAttribute('data-error', '');
        errorEl.className = 'text-sm text-red-500 text-center';
        errorEl.textContent = (err as Error).message;
        button.insertAdjacentElement('afterend', errorEl);
        button.disabled = false;
        button.innerHTML = original;
        button.classList.remove('opacity-70', 'cursor-not-allowed');
      }
    };
    partnerForm?.addEventListener('submit', onPartner);

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      cnpjInput?.removeEventListener('input', onCnpj);
      partnerForm?.removeEventListener('submit', onPartner);
    };
  }, []);

  return null;
}
