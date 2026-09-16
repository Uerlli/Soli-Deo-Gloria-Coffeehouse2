import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useScrolled from '@/hooks/useScrolled';
import { brandMark } from '@/mocks/media';
import { mapsUrl } from '@/mocks/site';

const navLinks = [
  { key: 'lugar', to: '/o-lugar' },
  { key: 'cafe', to: '/o-cafe' },
  { key: 'cardapio', to: '/cardapio' },
  { key: 'experiencia', to: '/experiencia' },
  { key: 'sobre', to: '/sobre' },
  { key: 'visita', to: '/visita' },
];

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const solid = !isHome || scrolled || menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          solid
            ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200/80'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center whitespace-nowrap shrink-0">
              <img
                src={brandMark}
                alt="Soli Deo Gloria"
                className={`h-9 md:h-10 w-auto transition-[filter] duration-500 ${solid ? '' : 'brightness-0 invert'}`}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.to}
                  className={`font-label text-[11px] tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                    solid ? 'text-foreground-600 hover:text-primary-500' : 'text-background-100 hover:text-background-50'
                  } ${pathname === link.to ? (solid ? 'text-primary-500' : 'text-background-50') : ''}`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors ${
                  solid
                    ? 'bg-primary-500 text-background-50 hover:bg-primary-600'
                    : 'border border-background-50/50 text-background-50 hover:bg-background-50 hover:text-foreground-900'
                }`}
              >
                {t('nav.cta')}
                <i className="ri-arrow-right-line text-sm" />
              </a>

              <button
                type="button"
                aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-colors ${
                  solid ? 'border-background-300 text-foreground-900' : 'border-background-50/40 text-background-50'
                }`}
              >
                <i className={menuOpen ? 'ri-close-line text-xl' : 'ri-menu-line text-xl'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-foreground-950/40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[84%] max-w-sm bg-background-50 border-l border-background-200/80 transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-background-200/70">
          <img src={brandMark} alt="Soli Deo Gloria" className="h-8 w-auto" />
          <button
            type="button"
            aria-label={t('nav.close')}
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-background-300 text-foreground-900 hover:bg-background-100 transition-colors"
          >
            <i className="ri-close-line text-xl" />
          </button>
        </div>

        <nav className="px-5 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className={`flex items-center justify-between py-4 border-b border-background-200/60 font-label text-[13px] tracking-[0.16em] uppercase transition-colors ${
                pathname === link.to ? 'text-primary-500' : 'text-foreground-800 hover:text-primary-500'
              }`}
            >
              <span className="whitespace-nowrap">{t(`nav.${link.key}`)}</span>
              <i className="ri-arrow-right-s-line text-lg text-foreground-400" />
            </Link>
          ))}

          <a
            href={mapsUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary-500 text-background-50 px-6 py-3.5 font-label text-[11px] tracking-[0.18em] uppercase whitespace-nowrap hover:bg-primary-600 transition-colors"
          >
            {t('nav.cta')}
            <i className="ri-arrow-right-line" />
          </a>
        </nav>
      </aside>
    </>
  );
}