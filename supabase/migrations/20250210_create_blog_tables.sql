-- Create tables for blog system
create table if not exists public.posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text,
  excerpt text,
  featured_image text,
  status text default 'draft' check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  author_id uuid references auth.users not null,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

create table if not exists public.categories (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table if not exists public.tags (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text not null unique,
  category_id uuid references categories on delete set null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

create table if not exists public.post_categories (
  post_id uuid references posts on delete cascade,
  category_id uuid references categories on delete cascade,
  primary key (post_id, category_id)
);

create table if not exists public.post_tags (
  post_id uuid references posts on delete cascade,
  tag_id uuid references tags on delete cascade,
  primary key (post_id, tag_id)
);

-- Create indexes for better query performance
create index if not exists posts_author_id_idx on posts(author_id);
create index if not exists posts_status_idx on posts(status);
create index if not exists posts_created_at_idx on posts(created_at);
create index if not exists tags_category_id_idx on tags(category_id);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create trigger for posts table
create trigger update_posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at_column();

-- Enable Row Level Security (RLS)
alter table posts enable row level security;
alter table categories enable row level security;
alter table tags enable row level security;
alter table post_categories enable row level security;
alter table post_tags enable row level security;

-- Create policies
-- Posts policies
create policy "Public posts are viewable by everyone"
  on posts for select
  using (status = 'published');

create policy "Users can create posts"
  on posts for insert
  with check (auth.uid() = author_id);

create policy "Users can update own posts"
  on posts for update
  using (auth.uid() = author_id)
  with check (auth.uid() = author_id);

create policy "Users can delete own posts"
  on posts for delete
  using (auth.uid() = author_id);

-- Categories policies
create policy "Categories are viewable by everyone"
  on categories for select
  to authenticated
  using (true);

create policy "Only authenticated users can create categories"
  on categories for insert
  to authenticated
  with check (true);

create policy "Only authenticated users can update categories"
  on categories for update
  to authenticated
  using (true);

create policy "Only authenticated users can delete categories"
  on categories for delete
  to authenticated
  using (true);

-- Tags policies
create policy "Tags are viewable by everyone"
  on tags for select
  to authenticated
  using (true);

create policy "Only authenticated users can create tags"
  on tags for insert
  to authenticated
  with check (true);

create policy "Only authenticated users can update tags"
  on tags for update
  to authenticated
  using (true);

create policy "Only authenticated users can delete tags"
  on tags for delete
  to authenticated
  using (true);
