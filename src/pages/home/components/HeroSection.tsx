import { useTranslation } from 'react-i18next';
import { heroImage, heroVideo, heroLogo } from '@/mocks/media';
import Reveal from '@/components/base/Reveal';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-foreground-950">
      <div className="absolute inset-0">
        {heroVideo ? (
          <video
            className="w-full h-full object-cover object-top"
            autoPlay
            muted
            loop
            playsInline
            poster={heroImage}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={heroImage}
            alt="Interior do Soli Deo Gloria Café com vista para a serra ao entardecer"
            className="w-full h-full object-cover object-top animate-kenburns"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <Reveal delay={200}>
          <h1 className="w-full flex justify-center">
            <img
              src={heroLogo}
              alt="Soli Deo Gloria Café — um lugar onde a paisagem entra pela porta e o café pede que você fique"
              className="w-[min(216px,25vw)] h-auto"
            />
          </h1>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 lg:px-12 pb-8 flex items-end justify-between">
        <span className="font-label text-[10px] tracking-[0.2em] uppercase text-background-100/70">
          {t('hero.since')}
        </span>

        <div className="flex flex-col items-center gap-3">
          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-background-100/70">
            {t('hero.scroll')}
          </span>
          <span className="relative block w-px h-12 bg-background-50/25 overflow-hidden">
            <span className="absolute left-0 top-0 block w-px h-5 bg-background-50 animate-scroll-cue" />
          </span>
        </div>

        <span className="font-label text-[10px] tracking-[0.2em] uppercase text-background-100/70 hidden sm:block">
          Ter–Dom · 8h às 18h
        </span>
      </div>
    </section>
  );
}