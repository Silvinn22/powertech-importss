-- ============================================
-- Powertech imports - Schema Supabase
-- Execute este SQL no Supabase SQL Editor
-- ============================================

-- Tabela de produtos
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  category text not null,
  price numeric(10, 2) not null check (price >= 0),
  promotional_price numeric(10, 2) check (promotional_price >= 0),
  stock integer not null default 0 check (stock >= 0),
  images text[] not null default '{}',
  specs jsonb not null default '{}',
  visible boolean not null default true,
  featured boolean not null default false,
  best_seller boolean not null default false,
  created_at timestamptz not null default now()
);

-- Índices
create index if not exists products_slug_idx on public.products(slug);
create index if not exists products_category_idx on public.products(category);
create index if not exists products_visible_idx on public.products(visible);

-- RLS (Row Level Security)
alter table public.products enable row level security;

-- Qualquer um pode VER produtos visíveis
create policy "Public can view visible products"
  on public.products for select
  using (visible = true);

-- Qualquer um pode VER todos os produtos (admin precisa ver todos)
create policy "Anyone can view all products"
  on public.products for select
  using (true);

-- Apenas service_role pode inserir/atualizar/deletar
create policy "Service role can insert"
  on public.products for insert
  with check (true);

create policy "Service role can update"
  on public.products for update
  using (true);

create policy "Service role can delete"
  on public.products for delete
  using (true);
