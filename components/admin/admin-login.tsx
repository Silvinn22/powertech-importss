"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = getSupabase();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (authError) {
      setError("Email ou senha incorretos.");
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <section className="container-page grid min-h-[70vh] place-items-center py-10">
      <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl border border-brand-border bg-white p-8 shadow-soft">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-ink text-white">
          <Lock size={22} />
        </span>
        <h1 className="mt-5 text-3xl font-semibold text-brand-ink">Painel Admin</h1>
        <p className="mt-2 text-brand-muted">Acesse para gerenciar seus produtos.</p>

        {error && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</p>}

        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-12 rounded-xl border border-brand-border px-4 text-brand-ink"
              placeholder="seu@email.com"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-brand-ink">
            Senha
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="min-h-12 rounded-xl border border-brand-border px-4 text-brand-ink"
              placeholder="••••••••"
            />
          </label>
          <button
            disabled={loading}
            className="min-h-12 rounded-xl bg-brand-ink text-white font-semibold transition hover:bg-brand-ink/90 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
      </form>
    </section>
  );
}
