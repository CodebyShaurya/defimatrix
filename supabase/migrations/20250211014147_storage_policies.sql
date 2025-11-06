-- Create blog-images bucket if it doesn't exist
insert into storage.buckets (id, name)
values ('blog-images', 'blog-images')
on conflict (id) do nothing;

-- Storage policies for blog-images bucket
create policy "Public read access for blog images"
  on storage.objects for select
  using (bucket_id = 'blog-images');

create policy "Authenticated users can upload blog images"
  on storage.objects for insert
  with check (
    bucket_id = 'blog-images'
    and auth.role() = 'authenticated'
  );

create policy "Users can update their own blog images"
  on storage.objects for update
  using (
    bucket_id = 'blog-images'
    and auth.uid() = owner
  );

create policy "Users can delete their own blog images"
  on storage.objects for delete
  using (
    bucket_id = 'blog-images'
    and auth.uid() = owner
  ); 