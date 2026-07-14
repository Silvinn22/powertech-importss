# 📚 Documentação Completa - Powertech Imports

## 📋 Índice
1. [Visão Geral do Projeto](#visao-geral)
2. [Stack Tecnológica](#stack)
3. [Arquitetura](#arquitetura)
4. [Guia por Arquivo](#guia-arquivo)
5. [Como Funciona o Fluxo](#fluxo)
6. [Deploy](#deploy)

---

## 1. Visão Geral do Projeto {#visao-geral}

Site institucional premium para a **Powertech Imports** (loja de celulares e acessórios em Blumenau/SC) com:

- Catálogo de produtos com preço, foto e descrição
- Vendas via WhatsApp
- Painel administrativo para gerenciar produtos
- Design premium estilo Apple

**URLs:**
- **Site:** https://powertech-importss.vercel.app
- **Admin:** https://powertech-importss.vercel.app/admin
- **WhatsApp:** https://wa.me/5547996518132
- **GitHub:** https://github.com/Silvinn22/powertech-importss
- **Supabase:** https://supabase.com/dashboard/project/pegrchicjdtdfulepjql

---

## 2. Stack Tecnológica {#stack}

| Tecnologia | Para quê | Por quê |
|---|---|---|
| **Next.js 15** | Framework React | SSR, SEO, rotas por arquivo, deploy fácil no Vercel |
| **TypeScript** | Tipagem estática | Previne bugs, autocomplete no código |
| **Tailwind CSS** | Estilização | Utility-first, design rápido e consistente |
| **Supabase** | Banco de dados + Auth | PostgreSQL gerenciado, auth pronto, grátis até 500MB |
| **Vercel** | Hospedagem | Deploy automático do GitHub, SSL grátis |
| **Lucide React** | Ícones | Leve, bonito, React-friendly |

---

## 3. Arquitetura {#arquitetura}

```
Site edimar/
├── app/                    # Rotas (Next.js App Router)
│   ├── layout.tsx          # Layout raiz (HTML, fonts, metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Todo o CSS customizado
│   ├── produtos/
│   │   ├── page.tsx        # Lista de produtos
│   │   └── [slug]/page.tsx # Detalhe de cada produto
│   ├── carrinho/page.tsx   # Carrinho de compras
│   ├── checkout/page.tsx   # Finalizar compra
│   ├── promocoes/page.tsx  # Página de promoções
│   ├── sobre/page.tsx      # Sobre a loja
│   ├── contato/page.tsx    # Contato
│   ├── privacidade/page.tsx # Política de privacidade
│   ├── admin/
│   │   ├── page.tsx        # Login do admin
│   │   └── dashboard/
│   │       └── page.tsx    # Painel de gestão
│   └── not-found.tsx       # Página 404
├── components/             # Componentes reutilizáveis
│   ├── ui/                 # Componentes genéricos
│   ├── layout/             # Header, Footer
│   ├── home/               # Seções da home
│   ├── product/            # Cards e detalhes de produto
│   └── admin/              # Login e dashboard admin
├── lib/                    # Bibliotecas e helpers
│   ├── catalog.ts          # Busca produtos do Supabase
│   ├── supabase.ts         # Conexão com Supabase
│   └── constants.ts        # Dados da loja (nome, WhatsApp, etc)
├── utils/                  # Utilidades
├── hooks/                  # Custom hooks React
├── public/                 # Arquivos estáticos (imagens, favicon)
├── supabase/               # SQL do banco de dados
│   ├── schema.sql          # Estrutura das tabelas
│   └── seed.sql            # Dados iniciais
└── .env.local              # Variáveis de ambiente (secreto)
```

---

## 4. Guia por Arquivo {#guia-arquivo}

### 🏗️ Arquivos de Configuração

#### `next.config.ts`
Configura o Next.js. Aqui definimos:
- **Headers de segurança** (previne ataques)
- **Otimização de imagens** (next/image)

#### `tailwind.config.ts`
Estende o Tailwind com:
- **Cores da marca** (`brand-primary`, `brand-accent`, `brand-ink`, `brand-muted`)
- **Sombras** (`shadow-soft` — sombra suave tipo Apple)
- **Border radius** (`radius-card`, `radius-pill`)
- **Breakpoints customizados** (`xs: 475px`)

#### `.env.local`
Variáveis de ambiente (nunca commitar no Git):
- `NEXT_PUBLIC_SUPABASE_URL` — URL do projeto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Chave pública (seguro no browser)
- `SUPABASE_SERVICE_ROLE_KEY` — Chave admin (só no servidor)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — Número do WhatsApp
- `NEXT_PUBLIC_SITE_URL` — URL do site

### 📄 Layout e Página Principal

#### `app/layout.tsx`
- Define `<html>`, `<head>`, `<body>` pra todas as páginas
- Carrega **Google Analytics** (tag de medição)
- Configura **metadata** (título, descrição pra Google)
- Inclui **Schema.org LocalBusiness** (dados estruturados pra SEO)
- Renderiza **Header** e **Footer** em todas as páginas
- Usa o componente `<Providers>` (wrapper pra contextos globais)

#### `app/page.tsx` (Home)
A home é a página mais importante. Ela monta a experiência visual:

1. **Hero** — Seção principal com título grande, gradiente e CTA
2. **Highlights** — Produtos em destaque com layout alternado (texto/imagem)
3. **FeaturedProducts** — Grid de produtos em destaque
4. **Categories** — Blocos de categorias com imagem e hover zoom
5. **HowItWorks** — Como funciona (3 passos)
6. **TrustBenefits** — Por que confiar na loja
7. **Stats** — Métricas (produtos vendidos, satisfação, etc)
8. **Reviews** — Depoimentos de clientes
9. **WhatsAppCta** — Chamada pra ação no WhatsApp

Cada seção é um componente separado reutilizável.

### 🎨 Componentes UI

#### `components/ui-fade-in.tsx`
Componente de **animação de entrada** com IntersectionObserver:
```tsx
<FadeIn delay={0.1} className="...">
  <p>Esse texto aparece suavemente quando entra na tela</p>
</FadeIn>
```
- `delay` — Atraso antes de aparecer (em segundos)
- `className` — Classes CSS extras
- Usa `IntersectionObserver` (API nativa do browser, sem biblioteca extra)
- Quando o elemento entra no viewport (área visível), adiciona a classe `fade-in-visible`
- A animação CSS fica no `globals.css` com `opacity: 0 → 1` e `translateY(20px) → 0`

#### `components/ui-instagram-btn.tsx`
Botão com efeito hover gradiente pro Instagram.

### 📐 Layout

#### `components/layout/header.tsx`
- **Sticky** (fixo no topo ao rolar)
- **Glassmorphism** (blur de fundo: `backdrop-blur-xl`)
- Logo (`/logo.png`) com `next/image`
- Links de navegação
- Menu mobile com **slide-down animation**
- Botão "Produtos" com destaque visual

#### `components/layout/footer.tsx`
- Minimalista e limpo
- Logo, informações da loja, links
- Copyright

### 🏠 Seções da Home

#### `components/home/hero.tsx`
- **Parallax scroll** — fundo se move mais lento que o conteúdo ao rolar
- **3D mouse tilt** — quando move o mouse, a seção inclina levemente
- Título com **gradiente animado** (texto muda de cor)
- Botão CTA com gradiente

#### `components/home/highlights.tsx`
- Layout **alternado**: produto à esquerda / texto à direita, depois inverte
- Imagem com borda arredondada e sombra
- Texto com badge de "Destaque"
- Usa `useState` + `useEffect` pra carregar dados do Supabase

#### `components/home/categories.tsx`
- 5 categorias: Celulares, Fones, Capas, Carregadores, Acessórios
- Cada uma com imagem de fundo
- **Hover zoom** (imagem amplia 1.05x ao passar o mouse)
- Overlay escuro com texto branco
- Usa `useEffect` + `useState` pra buscar categorias do Supabase

#### `components/home/sections.tsx`
Contém vários componentes:
- **FeaturedProducts** — Grid de produtos em destaque
- **TrustBenefits** — 3 benefícios (Frete grátis, Garantia, Suporte)
- **Reviews** — 3 depoimentos com aspas decorativas
- **WhatsAppCta** — Seção de chamada com gradiente
- **HowItWorks** — 3 passos do processo de compra

#### `components/home/stats.tsx`
- 3 cards de métricas com gráficos de barras
- Animação de contagem (números sobem quando visíveis)

### 🛍️ Produtos

#### `components/product/product-card.tsx`
- Card com imagem, nome, preço, categoria
- **Badge de desconto** (quando tem preço promocional)
- Efeito hover (sombra e elevação)
- Link pra página de detalhes
- Botão "Ver detalhes"

#### `components/product/product-details.tsx`
- Página completa do produto
- Galeria de imagens
- Especificações técnicas
- Preço com/sem desconto
- Botão "Comprar no WhatsApp"
- Produtos relacionados

### 🔐 Admin

#### `components/admin/admin-login.tsx`
- Formulário de login com email e senha
- Usa **Supabase Auth** (`signInWithPassword`)
- Mostra erros detalhados
- Após login, redireciona pro dashboard

#### `components/admin/admin-dashboard.tsx`
- Verifica se tem sessão ativa (se não, volta pro login)
- Lista todos os produtos do banco
- Para cada produto, pode:
  - **Mostrar/ocultar** (toggle visibilidade)
  - **Marcar como destaque** (toggle featured)
  - **Editar preço** (inline editing)
  - **Excluir** produto
- Botão de logout

### 🗄️ Bibliotecas

#### `lib/catalog.ts`
**Arquivo mais importante pra dados!** Busca produtos do Supabase com fallback local:

```typescript
// Busca todos os produtos visíveis
export async function listProducts() { ... }

// Busca TODOS os produtos (admin)
export async function listAllProducts() { ... }

// Busca produtos em destaque
export async function getFeaturedProducts() { ... }

// Busca um produto pelo slug (URL amigável)
export async function getProductBySlug(slug: string) { ... }

// Busca produtos relacionados (mesma categoria)
export async function getRelatedProducts(slug: string) { ... }
```

**Fallback:** Se o Supabase não responder, usa uma lista local de produtos em `lib/catalog.ts`. Isso garante que o site sempre funcione.

#### `lib/supabase.ts`
Configura a conexão com o Supabase:
- **`getSupabase()`** — Cliente normal (seguro pro browser, com RLS)
- Usa **singleton** no browser (cria uma vez só, reutiliza)
- Credenciais hardcoded como fallback (a anon key é pública por design)

#### `lib/constants.ts`
Todas as informações fixas da loja:
- Nome, descrição, telefone, email
- Endereço, horário de funcionamento
- Redes sociais
- Categorias de produtos

### 🎨 CSS (`app/globals.css`)

Classes CSS customizadas importantes:

| Classe | O que faz |
|---|---|
| `.container-page` | Container centralizado com padding responsivo |
| `.section-gap` | Espaçamento entre seções (py-16 md:py-24) |
| `.fade-in` | Animação de entrada (opacity + translateY) |
| `.fade-in-visible` | Estado visível da animação |
| `.hero-gradient` | Texto com gradiente animado |
| `.product-card` | Card de produto com hover |
| `.discount-badge` | Badge de desconto (canto superior) |
| `.review-card` | Card de depoimento com aspas |
| `.cta-gradient` | Fundo gradiente laranja |
| `.category-block` | Bloco de categoria com hover zoom |
| `.ig-btn` | Botão Instagram com hover gradient |
| `.metric-card` | Card de métrica com gráfico |

### 📊 Banco de Dados (Supabase)

#### `supabase/schema.sql`
Tabela `products`:
```sql
products (
  id UUID PRIMARY KEY,          -- ID único
  name TEXT NOT NULL,            -- Nome do produto
  slug TEXT UNIQUE NOT NULL,     -- URL amigável (ex: "xiaomi-15c")
  description TEXT,              -- Descrição
  category TEXT NOT NULL,        -- Categoria
  price NUMERIC NOT NULL,        -- Preço original
  promotional_price NUMERIC,     -- Preço promocional (null = sem desconto)
  stock INTEGER DEFAULT 0,       -- Estoque
  images TEXT[],                 -- Array de URLs de imagens
  specs JSONB,                   -- Especificações (JSON)
  visible BOOLEAN DEFAULT true,  -- Visível no site?
  featured BOOLEAN DEFAULT false,-- Em destaque?
  best_seller BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ
)
```

**RLS (Row Level Security):**
- `SELECT` liberado pra todo mundo (ver produtos)
- `INSERT/UPDATE/DELETE` só com service role (admin)

#### `supabase/seed.sql`
Dados iniciais dos 6 produtos (Xiaomi 15C, Redmi Note 14, etc)

---

## 5. Como Funciona o Fluxo {#fluxo}

### 🛒 Fluxo do Cliente
1. Cliente entra no site → vê a home com produtos em destaque
2. Navega pelas categorias ou clica em um produto
3. Vê detalhes, preço, especificações
4. Clica "Comprar no WhatsApp" → abre WhatsApp com mensagem pré-formatada
5. Negocia e finaliza compra direto com a loja

### 🔐 Fluxo do Admin
1. Acessa `/admin`
2. Login com email e senha (Supabase Auth)
3. Vê o dashboard com todos os produtos
4. Pode: ocultar, destacar, editar preço, excluir
5. Logout

### 🔄 Fluxo de Dados
```
Supabase (banco) → lib/catalog.ts → Componentes React → Página HTML
                                          ↑
                                    (fallback local se Supabase cair)
```

---

## 6. Deploy {#deploy}

### Como funciona o deploy:
1. Código fica no **GitHub** (repositório `powertech-importss`)
2. **Vercel** detecta mudanças no GitHub e faz build automático
3. Build do Next.js: compila React, otimiza imagens, gera CSS
4. Deploy no Vercel com HTTPS automático

### Variáveis de ambiente no Vercel:
- Vá em **Settings → Environment Variables**
- Adicione as 3 variáveis do Supabase
- Marque **Production** em Environment
- Faça **Redeploy** depois de adicionar

### Comandos úteis:
```bash
# Rodar localmente
npm run dev

# Build de produção (testar antes de subir)
npm run build

# Lint (verificar erros de código)
npm run lint

# Tipos TypeScript
npm run typecheck
```

---

## 📝 Notas Importantes

### Erros conhecidos no lint:
- `eslint.config.mjs` — Warning de export anônimo (inofensivo)
- `next-env.d.ts` — Warning de triple-slash reference (inofensivo)

### Segurança:
- A **anon key** do Supabase é pública por design (vai pro browser)
- A **service role key** só fica no servidor (nunca no browser)
- **RLS** protege o banco — mesmo com a anon key, não dá pra deletar/editar sem autorização

### Performance:
- `next/image` otimiza automaticamente as imagens
- Tailwind gera CSS mínimo (só o que usa)
- IntersectionObserver carrega elementos sob demanda (lazy loading visual)

---

*Última atualização: Julho 2026*
*Feito com Next.js 15 + Supabase + Vercel*
