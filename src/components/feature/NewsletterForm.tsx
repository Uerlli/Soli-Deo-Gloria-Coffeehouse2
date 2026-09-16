import { useState } from 'react';
import type { FormEvent } from 'react';

const FORM_ACTION = 'https://readdy.ai/api/form/dak0r0bbcsf0ijchd1q0';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface NewsletterFormProps {
  variant?: 'dark' | 'light';
}

export default function NewsletterForm({ variant = 'dark' }: NewsletterFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const isDark = variant === 'dark';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get('contact_alt') || '').trim();
    if (honeypot) {
      setStatus('success');
      setMessage('Inscrição recebida. Até logo.');
      form.reset();
      return;
    }
    formData.delete('contact_alt');

    setStatus('sending');
    setMessage('');

    try {
      const params = new URLSearchParams();
      formData.forEach((value, key) => params.append(key, String(value)));

      const response = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const okCode = parsed?.code === 'OK';
      const isSpam = typeof serverMsg === 'string' && serverMsg.toLowerCase().includes('spam');

      if (response.ok && okCode && !isSpam) {
        setStatus('success');
        setMessage('Inscrição confirmada. Obrigado.');
        form.reset();
      } else {
        setStatus('error');
        setMessage(
          typeof serverMsg === 'string' && serverMsg.trim()
            ? serverMsg
            : 'Não foi possível concluir agora. Tente novamente.',
        );
      }
    } catch {
      setStatus('error');
      setMessage('Falha de conexão. Tente novamente em instantes.');
    }
  };

  return (
    <form
      data-readdy-form
      id="sdg-newsletter-form"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="sr-only" htmlFor="sdg-newsletter-email">
          Seu e-mail
        </label>
        <input
          id="sdg-newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="seu@email.com"
          className={`flex-1 rounded-full px-5 py-3.5 text-sm outline-none transition-colors ${
            isDark
              ? 'bg-background-50/10 text-background-50 placeholder:text-background-100/50 border border-background-50/20 focus:border-background-50/50'
              : 'bg-background-100 text-foreground-900 placeholder:text-foreground-400 border border-background-300 focus:border-primary-400'
          }`}
        />
        <input
          type="text"
          name="contact_alt"
          className="honeypot-field"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors disabled:opacity-60 ${
            isDark
              ? 'bg-background-50 text-foreground-900 hover:bg-background-100'
              : 'bg-primary-500 text-background-50 hover:bg-primary-600'
          }`}
        >
          {status === 'sending' ? 'Enviando' : 'Assinar'}
          <i className="ri-arrow-right-line text-sm" />
        </button>
      </div>

      {status !== 'idle' && status !== 'sending' && message && (
        <p
          role="status"
          className={`mt-3 text-xs ${
            status === 'success'
              ? isDark ? 'text-accent-300' : 'text-accent-700'
              : isDark ? 'text-secondary-300' : 'text-secondary-700'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}