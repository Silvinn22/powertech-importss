import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e tratamento de dados da Powertech imports."
};

export default function PrivacyPage() {
  return (
    <section className="container-page py-12 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-brand-muted">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-brand-muted">Última atualização: julho de 2026</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-brand-muted">
          <section>
            <h2 className="text-xl font-semibold text-brand-ink">1. Dados coletados</h2>
            <p className="mt-3">
              Quando você entra em contato pelo WhatsApp ou formulário, podemos coletar: nome, número de telefone, e-mail
              e cidade. Esses dados são utilizados exclusivamente para atendimento e envio de propostas comerciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">2. Uso das informações</h2>
            <p className="mt-3">
              Os dados são usados apenas para: responder suas mensagens, enviar orçamentos, confirmar pedidos e realizar
              entregas. Não utilizamos seus dados para fins de marketing sem sua autorização explícita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">3. Compartilhamento</h2>
            <p className="mt-3">
              A Powertech imports não vende, aluga ou compartilha seus dados pessoais com terceiros, exceto quando
              necessário para cumprir obrigação legal ou realizar a entrega do produto (ex: dados de endereço para
              transportadora).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">4. Segurança</h2>
            <p className="mt-3">
              Adotamos medidas de segurança para proteger seus dados contra acesso não autorizado, alteração ou
              destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">5. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a: acessar seus dados,
              corrigi-los, solicitar a exclusão e revogar consentimentos. Para exercer esses direitos, entre em contato
              pelo WhatsApp ou e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">6. Cookies</h2>
            <p className="mt-3">
              Nosso site pode utilizar cookies essenciais para funcionamento (como preferências de navegação). Não
              utilizamos cookies de rastreamento de terceiros sem sua autorização.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-ink">7. Contato</h2>
            <p className="mt-3">
              Em caso de dúvidas sobre esta política ou sobre seus dados, entre em contato: WhatsApp (47) 99651-8132 ou
              contato@powertechimports.com.br.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
