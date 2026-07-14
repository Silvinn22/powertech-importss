function SectionTitle({
  kicker,
  title,
  description
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-brand-muted">{description}</p>}
    </div>
  );
}

export { SectionTitle };
