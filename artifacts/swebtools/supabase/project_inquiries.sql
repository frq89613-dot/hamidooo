-- Client intake from portfolio project pages (public insert, no auth required).

create table if not exists public.project_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project_details text not null,
  project_id text,
  created_at timestamptz not null default now()
);

alter table public.project_inquiries enable row level security;

drop policy if exists "Allow anonymous insert on project_inquiries" on public.project_inquiries;

create policy "Allow anonymous insert on project_inquiries"
  on public.project_inquiries
  for insert
  to anon, authenticated
  with check (true);
