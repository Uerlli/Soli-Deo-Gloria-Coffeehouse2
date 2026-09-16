import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { placeImages } from '@/mocks/media';
import Reveal from '@/components/base/Reveal';

const statKeys = ['one', 'two', 'three'] as const;

export default function PlaceSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-background-100 py-24 md:py-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <p className="label-mono text-secondary-600">{t('place.label')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-foreground-950 text-balance">
                {t('place.title')}
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-foreground-700 max-w-xl">
                {t('place.body')}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <ul className="mt-10 space-y-4">
                {statKeys.map((key) => (
                  <li key={key} className="flex items-center gap-4 border-b border-background-300/70 pb-4">
                    <span className="w-6 h-6 flex items-center justify-center text-accent-600">
                      <i className="ri-leaf-line text-lg" />
                    </span>
                    <span className="text-sm md:text-base text-foreground-700">{t(`place.stats.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={480}>
              <Link
                to="/o-lugar"
                className="mt-10 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.18em] uppercase text-foreground-900 hover:text-primary-500 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground-900/30">
                  <i className="ri-arrow-right-up-line text-base" />
                </span>
                {t('place.link')}
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-4 md:gap-5">
              <Reveal className="col-span-7" delay={150}>
                <div className="w-full aspect-[3/4] overflow-hidden rounded-lg bg-background-200">
                  <img
                    src={placeImages.exterior}
                    alt="Arquitetura de madeira e vidro do café entre a mata nativa"
                    className="w-full h-full object-cover object-top transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </Reveal>
              <div className="col-span-5 flex flex-col gap-4 md:gap-5">
                <Reveal delay={300}>
                  <div className="w-full aspect-square overflow-hidden rounded-lg bg-background-200">
                    <img
                      src={placeImages.window}
                      alt="Mesa comunal junto à janela com vista para a serra"
                      className="w-full h-full object-cover object-top transition-transform duration-[1200ms] hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal delay={450}>
                  <div className="w-full aspect-square overflow-hidden rounded-lg bg-background-200">
                    <img
                      src={placeImages.terrace}
                      alt="Terraço aberto do café com vista para o vale"
                      className="w-full h-full object-cover object-top transition-transform duration-[1200ms] hover:scale-105"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}