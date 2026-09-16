import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import Reveal from '@/components/base/Reveal';
import { menuCategories } from '@/mocks/menu';
import { coffeeImages } from '@/mocks/media';
import { mapsUrl } from '@/mocks/site';

export default function CardapioPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-background-50">
      <Navbar />

      <main className="pt-16 md:pt-20">
        <header className="w-full bg-background-100 py-20 md:py-28">
          <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="label-mono text-primary-500">{t('menu.label')}</p>
              <h1 className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tightest text-foreground-950 text-balance">
                {t('menu.title')}
              </h1>
              <p className="mt-7 text-base md:text-lg leading-relaxed text-foreground-700 max-w-xl">
                {t('menu.intro')}
              </p>
            </div>
            <div className="lg:col-span-5">
              <Reveal>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-background-200">
                  <img
                    src={coffeeImages.cup}
                    alt="Xícara de café do Soli Deo Gloria sobre a mesa de madeira"
                    title="Soli Deo Gloria Café — xícara e grãos"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        <nav className="sticky top-16 md:top-20 z-40 w-full bg-background-50/95 backdrop-blur-md border-b border-background-200">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <ul className="flex items-center gap-2 overflow-x-auto py-4 [scrollbar-width:none] [-ms-overflow-style:none]">
              {menuCategories.map((cat) => (
                <li key={cat.id} className="shrink-0">
                  <a
                    href={`#cat-${cat.id}`}
                    className="inline-block rounded-full border border-background-300 px-4 py-2 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap text-foreground-600 transition-colors hover:border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24 space-y-20 md:space-y-28">
          {menuCategories.map((cat, catIndex) => (
            <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-32 md:scroll-mt-40">
              <Reveal>
                <div className="flex items-end justify-between gap-6 border-b border-background-300/70 pb-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-label text-[11px] tracking-[0.2em] text-secondary-500">
                      {String(catIndex + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">{cat.label}</h2>
                  </div>
                  <span className="font-label text-[10px] tracking-[0.18em] uppercase text-foreground-400 whitespace-nowrap">
                    {cat.items.length} {cat.items.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>
              </Reveal>

              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {cat.items.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 6) * 60}>
                    <li className="group flex items-baseline justify-between gap-6 border-b border-background-200/80 py-5">
                      <div className="min-w-0">
                        <h3 className="font-heading text-xl text-foreground-900 transition-colors group-hover:text-primary-500">
                          {item.name}
                        </h3>
                        {item.desc ? <p className="mt-1 text-sm text-foreground-500">{item.desc}</p> : null}
                      </div>
                      <span className="font-label text-sm text-primary-500 whitespace-nowrap">{item.price}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}

          <Reveal>
            <div className="rounded-lg bg-background-100 border border-background-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-accent-600">
                  {t('menu.noteLabel')}
                </p>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-foreground-700">
                  {t('menu.note')}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap text-background-50 transition-colors hover:bg-primary-600"
                >
                  <i className="ri-map-pin-line text-base" />
                  {t('nav.cta')}
                </a>
                <Link
                  to="/visita"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground-900/20 px-6 py-3.5 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap text-foreground-900 transition-colors hover:bg-background-200"
                >
                  {t('visit.label')}
                  <i className="ri-arrow-right-line text-base" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}