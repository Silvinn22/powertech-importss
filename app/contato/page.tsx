import { Clock, CreditCard, Mail, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui-button";
import { InstagramBtn } from "@/components/ui-instagram-btn";
import { deliveryLabels, paymentLabels, siteConfig, whatsappUrl } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Contato</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          Fale com a {siteConfig.name}
        </h1>
        <p className="mt-5 text-lg leading-8 text-brand-muted">
          Tire dúvidas, peça recomendações de celulares e acessórios ou combine entrega e pagamento. Nosso atendimento é
          personalizado pelo WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] bg-brand-ink p-8 text-white">
          <h2 className="text-2xl font-semibold">Atendimento preferencial</h2>
          <p className="mt-3 leading-7 text-white/70">
            A forma mais rápida de falar conosco. Envie uma mensagem e nossa equipe responde com orientação sobre
            produtos, valores e disponibilidade.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button
              href={whatsappUrl("Olá! Gostaria de falar com a Powertech imports.")}
              variant="whatsapp"
              className="bg-white text-brand-ink hover:bg-brand-surface"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </Button>
            <InstagramBtn href={siteConfig.instagram} size={45} />
          </div>
        </div>

        <div className="grid gap-4">
          <ContactItem icon={Phone} label="Telefone" value={siteConfig.phone} />
          <ContactItem icon={Mail} label="E-mail" value={siteConfig.email} />
          <ContactItem icon={MapPin} label="Localização" value={`${siteConfig.city}, ${siteConfig.state}`} />
          <ContactItem
            icon={CreditCard}
            label="Formas de pagamento"
            value={siteConfig.paymentMethods.map((method) => paymentLabels[method]).join(", ")}
          />
          <ContactItem
            icon={Truck}
            label="Entrega"
            value={`${deliveryLabels["entrega-regiao"]} e ${deliveryLabels.retirada.toLowerCase()}`}
          />
          <ContactItem icon={Clock} label="Atendimento" value="Segunda a sábado, via WhatsApp" />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-brand-border bg-white p-5">
      <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-brand-surface text-brand-ink">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-sm font-medium text-brand-muted">{label}</p>
        <p className="mt-1 font-semibold text-brand-ink">{value}</p>
      </div>
    </div>
  );
}
