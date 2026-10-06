-- GroBird admin schema. Run this once in the Supabase SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run).

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- Blog posts
-- ---------------------------------------------------------------------
create table if not exists public.posts (
  id              uuid primary key default gen_random_uuid(),
  slug            text not null unique,
  title           text not null,
  excerpt         text,
  category        text not null default 'Business Intelligence',
  content         text not null default '',
  cover_image_url text,
  featured        boolean not null default false,
  published       boolean not null default false,
  published_at    timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index if not exists posts_published_idx
  on public.posts (published, published_at desc);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

alter table public.posts enable row level security;

drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
  on public.posts for select
  using (published = true);

drop policy if exists "Admins manage posts" on public.posts;
create policy "Admins manage posts"
  on public.posts for all
  to authenticated
  using (true)
  with check (true);

-- ---------------------------------------------------------------------
-- Leads (contact / schedule-a-call form submissions)
-- ---------------------------------------------------------------------
create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  company    text,
  phone      text,
  reason     text,
  message    text,
  source     text not null default 'contact',
  status     text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists leads_created_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

drop policy if exists "Admins manage leads" on public.leads;
create policy "Admins manage leads"
  on public.leads for all
  to authenticated
  using (true)
  with check (true);

-- Public submissions are inserted server-side with the service role key,
-- so no anonymous insert policy is needed.

-- ---------------------------------------------------------------------
-- Storage bucket for blog cover images
-- ---------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

drop policy if exists "Public read blog images" on storage.objects;
create policy "Public read blog images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

drop policy if exists "Admins upload blog images" on storage.objects;
create policy "Admins upload blog images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'blog-images');

drop policy if exists "Admins update blog images" on storage.objects;
create policy "Admins update blog images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'blog-images');

drop policy if exists "Admins delete blog images" on storage.objects;
create policy "Admins delete blog images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'blog-images');

-- ---------------------------------------------------------------------
-- Seed: the four posts the site launched with
-- ---------------------------------------------------------------------
insert into public.posts (slug, title, excerpt, category, featured, published, published_at, content) values
(
  'why-hiring-an-ops-coordinator-rarely-fixes-a-process-problem',
  'Why Hiring an Ops Coordinator Rarely Fixes a Process Problem',
  'Adding a person to a broken process doesn''t fix the process. It creates a human dependency on top of a structural fault.',
  'Business Intelligence', true, true, '2026-08-17',
  $md$## The Hire That Doesn't Fix It

Every operations leader has done it. The team is stretched. Emails are falling through the gaps. Processes that used to work stopped scaling somewhere around 40 people. The natural response: post a job for an Operations Coordinator.

And for a few weeks — sometimes months — it helps. Things get tracked. Emails get answered. The coordinator absorbs the noise. But six months later, you're hiring again. Or the coordinator has burned out. Or the original problem has simply moved one layer down.

The issue isn't the hire. The issue is what the hire was supposed to solve.

> "Adding a person to a broken process doesn't fix the process. It creates a human dependency on top of a structural fault."

## The Real Problem Is Upstream

When operations feel chaotic, it's rarely because you don't have enough people managing the chaos. It's because the systems generating the chaos aren't designed well.

Processes that require constant human intervention to stay on track are not processes — they're procedures held together by institutional knowledge and personal effort. They work fine at 20 people. They start cracking at 50. They collapse at 100.

**Common upstream problems**

- Approval workflows that live in someone's head or inbox
- Data that exists in three systems but never automatically syncs
- Handoffs between teams that depend on a weekly sync call
- Status tracking done by manually updating a spreadsheet

Each of these is a design problem. Not a staffing problem. Hiring someone to navigate broken design doesn't fix the design — it just ensures the workarounds are more consistently applied.

## The Coordinator Trap

Here's what usually happens after the hire. The new coordinator is sharp. They pick things up quickly. They document what they learn, build their own shortcuts, and become remarkably good at managing the dysfunction.

Now you have two problems: the original broken process, and a single person who is the only one who knows how to navigate it. The dependency has deepened. The bus factor is now one.

When that coordinator eventually leaves — and they will, because high-functioning people in dysfunction-management roles burn out — you lose the process entirely. You're back to square one, hiring again, and onboarding someone into chaos that has grown slightly more complex.

## What Actually Needs Fixing

Before you post the job, map the problem. Specifically: where are decisions getting stuck? Where is data being moved manually that should move automatically? Where are handoffs failing?

In our experience working with B2B companies at scale, the answer is almost always one of three things:

1. **A missing or misconfigured integration.** Two systems that should talk to each other don't. A person fills the gap. Fix: build the integration.
2. **An approval flow that has no structure.** Decisions travel by email and Slack, accumulate in inboxes, and get lost. Fix: design the approval flow explicitly and enforce it in tooling.
3. **A reporting process that requires manual assembly.** Someone spends hours every week pulling numbers from different places. Fix: connect the sources to a single reporting layer.

In each case, the solution is a systems change, not a headcount change. Once the system works, the human overhead drops — permanently, not just until the next hire.

## When the Hire Makes Sense

This isn't an argument against hiring operations people. It's an argument for sequencing the work correctly.

A great ops hire — someone who comes in with process discipline and systems thinking — can be transformative. But only if they're hired to design and improve, not to absorb and endure.

The right time to hire is after you've understood your operational failures clearly enough to describe them precisely. Not "we're overwhelmed" — but "our customer onboarding fails at the document collection step because we have no structured handoff between sales and operations."

## The Takeaway

If you're about to hire an ops coordinator because things feel chaotic, pause for two weeks first. Spend that time mapping the chaos — not managing it. Trace every failure to its source. Ask whether a better-designed system would eliminate the need for the role entirely.

Sometimes the answer is no. Sometimes you genuinely need the person. But often, you'll find that three to five systems changes would do more than any hire — and would make the eventual hire far more effective.

Operations should scale through design, not headcount. The companies that figure that out early are the ones that don't spend the next three years re-hiring for the same problem.$md$
),
(
  'how-to-scale-operations-without-adding-headcount',
  'How to Scale Operations Without Adding Headcount',
  'Growth should come from better systems, not a bigger org chart.',
  'Workflow Automation', false, true, '2026-08-16',
  $md$## Why Headcount Is the Wrong Lever

Most growing companies reach for hiring the moment work piles up. It feels decisive. It is also the most expensive and slowest fix available.

## Find the Repeated Work

List every task your team does more than once a week. Most of it is data movement, status chasing and approvals. Each of those is a candidate for automation.

## Build the System Once

Replace the repeated work with an integration, a workflow or a report. The first version does not need to be perfect. It needs to remove one human handoff.

## Measure the Time Back

Track hours saved per week. When the number is real, reinvest it in the next bottleneck instead of the next hire.$md$
),
(
  'the-hidden-cost-of-manual-data-entry-with-the-math',
  'The Hidden Cost of Manual Data Entry (With the Math)',
  'Ten minutes a day is not small. Across a team it is a full salary.',
  'Business Intelligence', false, true, '2026-08-13',
  $md$## The Math

Ten minutes of re-keying per person per day, across a team of twenty, is over 800 hours a year. At any reasonable loaded cost that is a full-time salary spent copying numbers between tools.

## The Errors You Do Not See

Manual entry does not just cost time. Every re-key is a chance for a typo that lands in a report, an invoice or a forecast.

## What Replaces It

A direct integration between the systems that hold the data. The build usually pays for itself within a quarter.$md$
),
(
  '5-signs-your-business-has-outgrown-its-systems',
  '5 Signs Your Business Has Outgrown Its Systems',
  'The tools that got you here will not get you to the next stage.',
  'Custom Software', false, true, '2026-08-05',
  $md$## 1. Spreadsheets Are the System of Record

When the truth lives in a file someone emails around, you have outgrown your tools.

## 2. Reports Take Days to Assemble

If a weekly number needs three people and a Friday afternoon, the data is fragmented.

## 3. Nobody Knows the Status

Status lives in inboxes and chat threads instead of a single view.

## 4. Onboarding Takes Months

New hires spend their first quarter learning workarounds rather than the work.

## 5. Every Change Breaks Something

Small process changes ripple into manual fixes across the team. That is the signal to redesign the system, not patch it.$md$
)
on conflict (slug) do nothing;
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
