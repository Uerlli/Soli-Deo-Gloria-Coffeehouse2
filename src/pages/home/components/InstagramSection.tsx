import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function InstagramSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-accent-100 py-24 md:py-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="label-mono text-accent-700">{t('instagram.label')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-foreground-950 text-balance">
              {t('instagram.title')}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-base leading-relaxed text-foreground-700 max-w-xl text-balance">
              {t('instagram.body')}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground-950 text-background-50 px-7 py-4 font-label text-[11px] tracking-[0.18em] uppercase whitespace-nowrap hover:bg-primary-700 transition-colors"
            >
              <i className="ri-instagram-line text-base" />
              {t('instagram.handle')}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}