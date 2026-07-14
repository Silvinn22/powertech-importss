import { TrendingUp, Star, Users } from "lucide-react";

const metrics = [
  {
    eyebrow: "Desde 2020",
    value: "500+",
    pill: "Ativos",
    caption: "Clientes atendidos",
    bars: [40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100],
    accent: 11
  },
  {
    eyebrow: "Curadoria",
    value: "50+",
    pill: "Selecionados",
    caption: "Produtos em catálogo",
    bars: [30, 50, 45, 65, 55, 70, 60, 80, 75, 85, 90, 92],
    accent: 11
  },
  {
    eyebrow: "Avaliação",
    value: "4.9",
    pill: "5 estrelas",
    caption: "Nota média dos clientes",
    bars: [80, 85, 90, 88, 92, 95, 93, 97, 96, 98, 97, 100],
    accent: 11
  }
];

const icons = [Users, TrendingUp, Star];

export function Stats() {
  return (
    <section className="bg-brand-surface py-16 lg:py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Nossos números</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Resultados que falam por si
          </h2>
          <p className="mt-4 leading-7 text-brand-muted">
            Confiança construída com cada atendimento. Veja o que dizem sobre a Powertech imports.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {metrics.map((m, i) => {
            const Icon = icons[i];
            return (
              <div key={m.caption} className="mf-metric">
                <div className="mf-metric__head">
                  <p className="mf-metric__eyebrow">{m.eyebrow}</p>
                  <span className="mf-metric__pill">
                    <Icon size={12} />
                    {m.pill}
                  </span>
                </div>
                <p className="mf-metric__value">{m.value}</p>
                <p className="mf-metric__caption">{m.caption}</p>
                <div className="mf-metric__chart">
                  {m.bars.map((h, barIndex) => (
                    <div
                      key={barIndex}
                      className={`mf-metric__bar ${barIndex === m.accent ? "mf-metric__bar--accent" : ""}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
