# TechStore Pro

E-commerce moderno para eletrônicos, celulares, patinetes, smartwatches, fones e acessórios.

## Stack

- Next.js 15 com App Router
- React e TypeScript
- Tailwind CSS
- Supabase para banco, storage e auth
- Checkout inicial via WhatsApp
- SEO com metadados, Open Graph, Schema.org, sitemap e robots

## Rodar localmente

```bash
npm.cmd install
npm.cmd run dev
```

Crie `.env.local` a partir de `.env.example` e preencha:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5547996518132
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Supabase

O arquivo `supabase/schema.sql` cria as tabelas:

- categorias
- produtos
- pedidos
- usuarios

Também ativa RLS e cria políticas iniciais de leitura pública para catálogo.

## Deploy

No Vercel, conecte o repositório, configure as variáveis de ambiente e publique. O projeto já está preparado para otimização de imagens, Server Components, rotas amigáveis e crescimento do catálogo.
