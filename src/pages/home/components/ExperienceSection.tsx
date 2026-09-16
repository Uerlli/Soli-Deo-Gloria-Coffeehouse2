import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { experienceImages } from '@/mocks/media';
import { experienceItems } from '@/mocks/menu';
import Reveal from '@/components/base/Reveal';

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-background-50 py-24 md:py-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono text-accent-600">{t('experience.label')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-foreground-950 text-balance">
                {t('experience.title')}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={220}>
              <p className="text-base leading-relaxed text-foreground-700">{t('experience.body')}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 md:gap-5">
            <Reveal className="col-span-8">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-lg bg-background-200">
                <img
                  src={experienceImages[0].src}
                  alt={experienceImages[0].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-4 self-end" delay={180}>
              <div className="w-full aspect-[3/4] overflow-hidden rounded-lg bg-background-200">
                <img
                  src={experienceImages[1].src}
                  alt={experienceImages[1].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <ul className="space-y-2">
              {experienceItems.map((item, index) => (
                <Reveal key={item.id} delay={index * 130}>
                  <li className="group flex items-start gap-6 border-b border-background-200 py-6">
                    <span className="font-label text-[11px] tracking-[0.2em] text-secondary-500 pt-1.5">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground-900 transition-colors group-hover:text-primary-500">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-600">{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={450}>
              <Link
                to="/experiencia"
                className="mt-8 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.18em] uppercase text-foreground-900 hover:text-primary-500 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground-900/30">
                  <i className="ri-arrow-right-up-line text-base" />
                </span>
                {t('experience.link')}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}