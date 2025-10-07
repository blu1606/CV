-- Create accounts table for connected third-party accounts
-- This stores OAuth connections like LinkedIn, GitHub, etc.

create table if not exists public.accounts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  provider text not null check (provider in ('linkedin', 'github', 'behance')),
  provider_account_id text not null,
  access_token text,
  refresh_token text,
  expires_at timestamptz,
  last_synced_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(provider, provider_account_id)
);

-- Enable Row Level Security
alter table public.accounts enable row level security;

-- RLS Policies for accounts
create policy "Users can view their own accounts"
  on public.accounts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own accounts"
  on public.accounts for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own accounts"
  on public.accounts for update
  using (auth.uid() = user_id);

create policy "Users can delete their own accounts"
  on public.accounts for delete
  using (auth.uid() = user_id);

-- Create index for faster lookups
create index if not exists accounts_user_id_idx on public.accounts(user_id);
create index if not exists accounts_provider_idx on public.accounts(provider);
