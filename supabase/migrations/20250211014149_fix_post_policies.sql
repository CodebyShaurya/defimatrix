-- Drop existing policies
drop policy if exists "Public posts are viewable by everyone" on posts;
drop policy if exists "Users can create posts" on posts;
drop policy if exists "Users can update own posts" on posts;
drop policy if exists "Users can delete own posts" on posts;

-- Create updated policies
create policy "Posts are viewable by everyone"
  on posts for select
  using (
    status = 'published' 
    or 
    auth.uid() = author_id
  );

create policy "Authenticated users can create posts"
  on posts for insert
  to authenticated
  with check (auth.uid() = author_id);

create policy "Users can update own posts"
  on posts for update
  using (auth.uid() = author_id)
  with check (auth.uid() = author_id);

create policy "Users can delete own posts"
  on posts for delete
  using (auth.uid() = author_id); 