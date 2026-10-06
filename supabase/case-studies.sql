-- Run in Supabase > SQL Editor. Safe to run more than once.
-- Like the existing admin, authenticated accounts are administrators.
-- Keep public signups disabled in Supabase Authentication settings.
begin;

create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 200),
  description text not null check (char_length(description) between 1 and 2000),
  tag text not null default 'Automate Business Processes' check (char_length(tag) between 1 and 60),
  industry text not null check (industry in ('Fintech','Healthcare','Manufacturing','SaaS','Real Estate','Logistics','Lending','EdTech','Insurance','B2B Services')),
  cover_image_url text not null,
  published boolean not null default false,
  sort_order integer not null default 0 check (sort_order between 0 and 100000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists case_studies_published_order_idx on public.case_studies (published, sort_order, created_at desc);

create or replace function public.case_studies_set_updated_at()
returns trigger language plpgsql set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
drop trigger if exists case_studies_updated_at on public.case_studies;
create trigger case_studies_updated_at before update on public.case_studies
for each row execute function public.case_studies_set_updated_at();

alter table public.case_studies enable row level security;
grant select on public.case_studies to anon;
grant select, insert, update, delete on public.case_studies to authenticated;
grant all on public.case_studies to service_role;

drop policy if exists "Public reads published case studies" on public.case_studies;
create policy "Public reads published case studies" on public.case_studies for select to anon using (published = true);
drop policy if exists "Admins manage case studies" on public.case_studies;
create policy "Admins manage case studies" on public.case_studies for all to authenticated using (true) with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('case-study-images', 'case-study-images', true, 5242880, array['image/jpeg','image/png','image/webp','image/avif'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public reads case study images" on storage.objects;
create policy "Public reads case study images" on storage.objects for select to anon using (bucket_id = 'case-study-images');
drop policy if exists "Admins upload case study images" on storage.objects;
create policy "Admins upload case study images" on storage.objects for insert to authenticated with check (bucket_id = 'case-study-images');
drop policy if exists "Admins update case study images" on storage.objects;
create policy "Admins update case study images" on storage.objects for update to authenticated using (bucket_id = 'case-study-images') with check (bucket_id = 'case-study-images');
drop policy if exists "Admins read case study images" on storage.objects;
create policy "Admins read case study images" on storage.objects for select to authenticated using (bucket_id = 'case-study-images');
drop policy if exists "Admins delete case study images" on storage.objects;
create policy "Admins delete case study images" on storage.objects for delete to authenticated using (bucket_id = 'case-study-images');

commit;
