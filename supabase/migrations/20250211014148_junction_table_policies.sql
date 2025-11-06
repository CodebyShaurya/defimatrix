-- Drop existing category and tag policies
drop policy if exists "Categories are viewable by everyone" on categories;
drop policy if exists "Tags are viewable by everyone" on tags;

-- Create new public policies
create policy "Categories are viewable by everyone"
  on categories for select
  using (true);

create policy "Tags are viewable by everyone"
  on tags for select
  using (true);

-- Post Categories policies
create policy "Post categories are viewable by everyone"
  on post_categories for select
  using (true);

create policy "Authenticated users can manage post categories"
  on post_categories for insert
  with check (
    exists (
      select 1 from posts
      where id = post_id
      and author_id = auth.uid()
    )
  );

create policy "Users can delete their own post categories"
  on post_categories for delete
  using (
    exists (
      select 1 from posts
      where id = post_id
      and author_id = auth.uid()
    )
  );

-- Post Tags policies
create policy "Post tags are viewable by everyone"
  on post_tags for select
  using (true);

create policy "Authenticated users can manage post tags"
  on post_tags for insert
  with check (
    exists (
      select 1 from posts
      where id = post_id
      and author_id = auth.uid()
    )
  );

create policy "Users can delete their own post tags"
  on post_tags for delete
  using (
    exists (
      select 1 from posts
      where id = post_id
      and author_id = auth.uid()
    )
  ); 