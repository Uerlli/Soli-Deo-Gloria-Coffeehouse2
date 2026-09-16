import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { menuCategories, menuPreviewCategoryIds } from '@/mocks/menu';
import Reveal from '@/components/base/Reveal';

const previewCategories = menuPreviewCategoryIds
  .map((id) => menuCategories.find((cat) => cat.id === id))
  .filter((cat): cat is (typeof menuCategories)[number] => Boolean(cat));

export default function MenuPreviewSection() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState<string>(previewCategories[0]?.id ?? '');

  const activeItems = previewCategories.find((cat) => cat.id === activeId)?.items.slice(0, 6) ?? [];

  return (
    <section className="w-full bg-background-50 py-24 md:py-32">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono text-primary-500">{t('menu.label')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-foreground-950 text-balance">
                {t('menu.title')}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={220}>
              <p className="text-base leading-relaxed text-foreground-700">{t('menu.body')}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="inline-flex flex-wrap gap-1 rounded-full border border-background-300 bg-background-100 p-1">
                {previewCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveId(cat.id)}
                    className={`rounded-full px-5 py-2.5 font-label text-[11px] tracking-[0.16em] uppercase whitespace-nowrap transition-colors ${
                      activeId === cat.id
                        ? 'bg-primary-500 text-background-50'
                        : 'text-foreground-600 hover:text-foreground-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Link
                to="/cardapio"
                className="mt-8 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.18em] uppercase text-foreground-900 hover:text-primary-500 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground-900/30">
                  <i className="ri-arrow-right-up-line text-base" />
                </span>
                {t('menu.link')}
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-background-200">
              {activeItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-background-100/60 -mx-3 px-3 rounded-md"
                  style={{ animation: `sdg-fade-in 0.5s ease-out ${index * 60}ms both` }}
                >
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl md:text-2xl text-foreground-900">{item.name}</h3>
                    {item.desc ? <p className="mt-1 text-sm text-foreground-500">{item.desc}</p> : null}
                  </div>
                  <span className="font-label text-sm text-primary-500 whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}