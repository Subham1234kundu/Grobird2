-- Run once in Supabase SQL Editor to enable editable admin lead remarks.
alter table public.leads add column if not exists remark text;
