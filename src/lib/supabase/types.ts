export type Post = {
  id: string
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  featured_image: string | null
  status: 'draft' | 'published'
  seo_title: string | null
  seo_description: string | null
  author_id: string
  created_at: string
  updated_at: string
  post_categories?: { 
    category_id: string;
    categories?: Category;
  }[]
  post_tags?: { 
    tag_id: string;
    tags?: Tag;
  }[]
  categories?: Category[]
  tags?: Tag[]
}

export type Category = {
  id: string
  name: string
  slug: string
  description: string | null
  created_at: string
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  category_id: string | null;
  description: string | null;
  created_at: string;
}

export type PostWithRelations = Post & {
  categories: Category[]
  tags: Tag[]
}
