import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NewsletterForm from '@/components/feature/NewsletterForm';
import { addressLine, addressShort, instagramHandle, instagramUrl, mapsUrl, phoneDisplay, phoneHref } from '@/mocks/site';

const exploreLinks = [
  { key: 'lugar', to: '/o-lugar' },
  { key: 'cafe', to: '/o-cafe' },
  { key: 'cardapio', to: '/cardapio' },
  { key: 'experiencia', to: '/experiencia' },
  { key: 'sobre', to: '/sobre' },
  { key: 'visita', to: '/visita' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-background-100">
      <div className="w-full px-4 md:px-8 lg:px-12 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label-mono text-accent-300">{t('brand.tagline')}</p>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05] text-background-50 max-w-md">
              {t('footer.statement')}
            </h2>
            <p className="mt-6 text-sm text-background-100/70 max-w-sm leading-relaxed">
              Soli Deo Gloria Café — {addressLine}.
            </p>
            <div className="mt-8 max-w-md">
              <p className="font-label text-[11px] tracking-[0.18em] uppercase text-background-100/60 mb-3">
                {t('footer.newsletter')}
              </p>
              <NewsletterForm variant="dark" />
              <p className="mt-3 text-xs text-background-100/50">{t('footer.newsletterNote')}</p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="font-label text-[11px] tracking-[0.2em] uppercase text-background-100/50">
              {t('footer.columns.explore')}
            </p>
            <ul className="mt-6 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.to}
                    className="text-sm text-background-100/80 hover:text-background-50 transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-label text-[11px] tracking-[0.2em] uppercase text-background-100/50">
              {t('footer.columns.contact')}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-background-100/80">
              <li>
                <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-background-50 transition-colors">
                  <i className="ri-phone-line" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-background-50 transition-colors"
                >
                  <i className="ri-instagram-line" />
                  {instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-1 inline-flex items-start gap-2 hover:text-background-50 transition-colors"
                >
                  <i className="ri-map-pin-line mt-0.5" />
                  <span className="max-w-[16rem]">{addressLine}</span>
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-background-100/70">{t('visit.hours')}</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-background-50/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-label text-[10px] tracking-[0.18em] uppercase text-background-100/50">
            © {year} Soli Deo Gloria Café. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={instagramUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center text-background-100/70 hover:text-background-50 transition-colors"
            >
              <i className="ri-instagram-line text-lg" />
            </a>
            <p className="font-label text-[10px] tracking-[0.18em] uppercase text-background-100/50">
              {addressShort}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}