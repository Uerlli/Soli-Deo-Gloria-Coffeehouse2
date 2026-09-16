interface PagePlaceholderProps {
  label: string;
  title: string;
  description: string;
}

export default function PagePlaceholder({ label, title, description }: PagePlaceholderProps) {
  return (
    <main className="w-full min-h-screen bg-background-50 flex items-center">
      <div className="w-full px-4 md:px-8 lg:px-12 py-32 md:py-40">
        <p className="label-mono text-primary-500">{label}</p>
        <h1 className="mt-6 font-heading text-5xl md:text-7xl leading-[1] tracking-tightest text-foreground-950 max-w-4xl text-balance">
          {title}
        </h1>
        <p className="mt-7 text-lg leading-relaxed text-foreground-700 max-w-xl">{description}</p>
        <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-background-300 px-5 py-3">
          <span className="w-6 h-6 flex items-center justify-center text-accent-600">
            <i className="ri-time-line" />
          </span>
          <span className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-600">
            Em construção — próxima etapa
          </span>
        </div>
      </div>
    </main>
  );
}