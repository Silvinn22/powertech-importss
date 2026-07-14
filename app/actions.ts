"use server";

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();

  if (!email.includes("@")) {
    return { ok: false, message: "E-mail inválido." };
  }

  return { ok: true, message: "Cadastro recebido." };
}

export async function registerWhatsAppOrder(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();

  if (!name || !phone || !city) {
    return { ok: false, message: "Preencha todos os dados." };
  }

  return { ok: true, message: "Pedido pronto para atendimento." };
}
