import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { coffeeImages } from '@/mocks/media';
import { ritualSteps } from '@/mocks/menu';
import Reveal from '@/components/base/Reveal';

export default function CoffeeRitualSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-primary-950 text-background-50 py-24 md:py-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono text-accent-300">{t('coffee.label')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-background-50 text-balance">
                {t('coffee.title')}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <Reveal delay={240}>
              <p className="text-base md:text-lg leading-relaxed text-background-100/75">
                {t('coffee.body')}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <Link
                to="/o-cafe"
                className="mt-8 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.18em] uppercase text-background-50 hover:text-accent-300 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-background-50/30">
                  <i className="ri-arrow-right-up-line text-base" />
                </span>
                {t('coffee.link')}
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200} className="mt-14 md:mt-20">
          <div className="w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden rounded-lg bg-primary-900">
            <img
              src={coffeeImages.brew}
              alt="Espresso sendo extraído na máquina, fio de café caindo no copo"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <Reveal>
            <p className="font-label text-[11px] tracking-[0.22em] uppercase text-background-100/50">
              {t('coffee.ritualTitle')}
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {ritualSteps.map((step, index) => (
              <Reveal key={step.id} delay={index * 120}>
                <div className="border-t border-background-50/20 pt-6">
                  <span className="font-label text-[11px] tracking-[0.2em] text-accent-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl text-background-50">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background-100/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}