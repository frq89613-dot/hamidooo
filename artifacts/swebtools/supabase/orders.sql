-- Run in the Supabase SQL editor to create the orders table used by the dashboard.

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text,
  product text,
  amount numeric(10, 2) not null default 0,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.orders enable row level security;

drop policy if exists "Allow public read access on orders" on public.orders;
drop policy if exists "Allow authenticated read access on orders" on public.orders;

-- Only signed-in users can read orders (dashboard requires Supabase Auth).
create policy "Allow authenticated read access on orders"
  on public.orders
  for select
  to authenticated
  using (true);
