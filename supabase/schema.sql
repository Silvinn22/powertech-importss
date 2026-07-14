create extension if not exists "uuid-ossp";

create table if not exists public.categorias (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  slug text not null unique,
  descricao text,
  criado_em timestamptz not null default now()
);

create table if not exists public.produtos (
  id uuid primary key default uuid_generate_v4(),
  nome text not null,
  slug text not null unique,
  descricao text not null,
  categoria uuid references public.categorias(id) on delete set null,
  preco numeric(10, 2) not null check (preco >= 0),
  preco_promocional numeric(10, 2) check (preco_promocional >= 0),
  estoque integer not null default 0 check (estoque >= 0),
  imagens text[] not null default '{}',
  especificacoes jsonb not null default '{}',
  ativo boolean not null default true,
  destaque boolean not null default false,
  mais_vendido boolean not null default false,
  criado_em timestamptz not null default now()
);

create table if not exists public.usuarios (
  id uuid primary key references auth.users(id) on delete cascade,
  nome text,
  papel text not null default 'cliente' check (papel in ('cliente', 'admin')),
  criado_em timestamptz not null default now()
);

create table if not exists public.pedidos (
  id uuid primary key default uuid_generate_v4(),
  usuario_id uuid references public.usuarios(id) on delete set null,
  nome_cliente text not null,
  telefone text not null,
  cidade text not null,
  itens jsonb not null,
  total numeric(10, 2) not null check (total >= 0),
  status text not null default 'recebido' check (status in ('recebido', 'em_atendimento', 'confirmado', 'cancelado', 'entregue')),
  criado_em timestamptz not null default now()
);

alter table public.categorias enable row level security;
alter table public.produtos enable row level security;
alter table public.usuarios enable row level security;
alter table public.pedidos enable row level security;

create policy "Categorias publicas" on public.categorias for select using (true);
create policy "Produtos publicos ativos" on public.produtos for select using (ativo = true);
create policy "Usuarios veem proprio perfil" on public.usuarios for select using (auth.uid() = id);
create policy "Pedidos do proprio usuario" on public.pedidos for select using (auth.uid() = usuario_id);

create index if not exists produtos_categoria_idx on public.produtos(categoria);
create index if not exists produtos_slug_idx on public.produtos(slug);
create index if not exists pedidos_criado_em_idx on public.pedidos(criado_em desc);
