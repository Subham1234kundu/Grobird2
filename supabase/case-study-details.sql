-- Run once in Supabase SQL Editor after case-studies.sql.
-- Preserves existing case studies. Safe to run again.
alter table public.case_studies add column if not exists content text not null default '';
