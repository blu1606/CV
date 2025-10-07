-- Create components table for professional history pieces
-- This stores atomic pieces like experiences, projects, education, skills

create table if not exists public.components (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  account_id uuid references public.accounts(id) on delete set null,
  type text not null check (type in ('experience', 'project', 'education', 'skill')),
  title text not null,
  organization text,
  start_date date,
  end_date date,
  description text,
  highlights text[] default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.components enable row level security;

-- RLS Policies for components
create policy "Users can view their own components"
  on public.components for select
  using (auth.uid() = user_id);

create policy "Users can insert their own components"
  on public.components for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own components"
  on public.components for update
  using (auth.uid() = user_id);

create policy "Users can delete their own components"
  on public.components for delete
  using (auth.uid() = user_id);

-- Create indexes for faster queries
create index if not exists components_user_id_idx on public.components(user_id);
create index if not exists components_type_idx on public.components(type);
create index if not exists components_account_id_idx on public.components(account_id);
