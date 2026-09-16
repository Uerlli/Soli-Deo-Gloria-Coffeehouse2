import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { placeImages } from '@/mocks/media';
import Reveal from '@/components/base/Reveal';

export default function VisitSection() {
  const { t } = useTranslation();

  const infoBlocks = [
    { icon: 'ri-map-pin-line', title: t('visit.addressTitle'), value: t('visit.address') },
    { icon: 'ri-time-line', title: t('visit.hoursTitle'), value: t('visit.hours') },
    { icon: 'ri-phone-line', title: t('visit.contactTitle'), value: t('visit.contact') },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-foreground-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={placeImages.terrace}
          alt="Terraço do café ao entardecer com vista para o vale"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="label-mono text-accent-300">{t('visit.label')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-background-50 text-balance">
              {t('visit.title')}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-background-100/85 max-w-xl">
              {t('visit.body')}
            </p>
          </Reveal>
          <Reveal delay={360}>
            <Link
              to="/visita"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-background-50 text-foreground-950 px-7 py-4 font-label text-[11px] tracking-[0.18em] uppercase whitespace-nowrap hover:bg-accent-300 transition-colors"
            >
              {t('visit.cta')}
              <i className="ri-arrow-right-line text-sm" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-background-50/20 pt-10">
          {infoBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 140}>
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-background-50/30 text-accent-300 flex-shrink-0">
                  <i className={`${block.icon} text-lg`} />
                </span>
                <div>
                  <p className="font-label text-[10px] tracking-[0.2em] uppercase text-background-100/60">
                    {block.title}
                  </p>
                  <p className="mt-2 text-sm text-background-50 leading-relaxed">{block.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}