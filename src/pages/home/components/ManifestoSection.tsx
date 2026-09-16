import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';

export default function ManifestoSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-background-50 py-24 md:py-40">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <Reveal>
          <p className="label-mono text-primary-500">{t('manifesto.label')}</p>
        </Reveal>

        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-foreground-950 text-balance">
                {t('manifesto.lead')}{' '}
                <span className="text-primary-500 italic">{t('manifesto.strong')}</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-3 flex flex-col gap-8">
            <Reveal delay={250}>
              <div className="flex flex-col gap-4">
                <p className="text-sm md:text-base leading-relaxed text-foreground-700">
                  {t('manifesto.body')}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-foreground-700">
                  {t('manifesto.body2')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-start gap-4 border-t border-background-300 pt-6">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
                <p className="font-heading italic text-xl md:text-2xl text-foreground-800">
                  {t('manifesto.note')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}