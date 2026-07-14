export default function Loading() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="max-w-2xl animate-pulse">
        <div className="h-4 w-32 rounded-full bg-brand-surface" />
        <div className="mt-4 h-10 w-80 rounded-full bg-brand-surface sm:h-12" />
        <div className="mt-4 h-6 w-full rounded-full bg-brand-surface" />
        <div className="mt-2 h-6 w-3/4 rounded-full bg-brand-surface" />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse rounded-2xl bg-brand-surface p-4">
            <div className="aspect-square rounded-xl bg-white" />
            <div className="mt-5 space-y-3">
              <div className="h-5 w-3/4 rounded-full bg-white" />
              <div className="h-4 w-full rounded-full bg-white" />
              <div className="h-7 w-1/2 rounded-full bg-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
