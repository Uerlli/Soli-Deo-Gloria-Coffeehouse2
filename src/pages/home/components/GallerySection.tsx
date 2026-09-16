import { useTranslation } from 'react-i18next';
import { galleryImages } from '@/mocks/media';
import Reveal from '@/components/base/Reveal';

export default function GallerySection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-background-100 py-24 md:py-32 overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono text-secondary-600">{t('gallery.label')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-foreground-950 text-balance">
                {t('gallery.title')}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={220}>
              <p className="text-base leading-relaxed text-foreground-700">{t('gallery.body')}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 90}>
              <figure className={`group w-full ${index % 3 === 1 ? 'lg:translate-y-10' : ''}`}>
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-background-200">
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={`Soli Deo Gloria Café — ${image.alt}`}
                    className="w-full h-full object-cover object-top transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 font-label text-[10px] tracking-[0.16em] uppercase text-foreground-500">
                  {String(index + 1).padStart(2, '0')} — {image.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}