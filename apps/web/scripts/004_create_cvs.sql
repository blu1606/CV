-- Create cvs table for generated curriculum vitae
-- This stores curated assemblies of components

create table if not exists public.cvs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  job_description text not null,
  match_score integer default 0 check (match_score >= 0 and match_score <= 100),
  content jsonb not null default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.cvs enable row level security;

-- RLS Policies for cvs
create policy "Users can view their own cvs"
  on public.cvs for select
  using (auth.uid() = user_id);

create policy "Users can insert their own cvs"
  on public.cvs for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own cvs"
  on public.cvs for update
  using (auth.uid() = user_id);

create policy "Users can delete their own cvs"
  on public.cvs for delete
  using (auth.uid() = user_id);

-- Create indexes for faster queries
create index if not exists cvs_user_id_idx on public.cvs(user_id);
create index if not exists cvs_created_at_idx on public.cvs(created_at desc);
