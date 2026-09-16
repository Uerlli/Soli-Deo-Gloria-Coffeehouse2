import { useTranslation } from 'react-i18next';
import Reveal from '@/components/base/Reveal';
import { heroLogo } from '@/mocks/media';
import { instagramHandle, instagramUrl } from '@/mocks/site';

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
            <div className="relative mt-8 w-[min(260px,55vw)]">
              <img
                src={heroLogo}
                alt=""
                aria-hidden="true"
                className="w-full h-auto opacity-0"
              />
              <span
                role="img"
                aria-label="Soli Deo Gloria Café"
                title="Soli Deo Gloria Café — assinatura da marca"
                className="absolute inset-0 block bg-foreground-950"
                style={{
                  WebkitMaskImage: `url(${heroLogo})`,
                  maskImage: `url(${heroLogo})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 text-base leading-relaxed text-foreground-700 max-w-xl text-balance">
              {t('instagram.body')}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground-950 text-background-50 px-7 py-4 font-label text-[11px] tracking-[0.18em] uppercase whitespace-nowrap hover:bg-primary-700 transition-colors"
            >
              <i className="ri-instagram-line text-base" />
              {instagramHandle}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}