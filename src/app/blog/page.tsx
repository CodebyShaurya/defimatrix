import { supabase } from "@/utils/supabase";
import RealtimeBlogList from "@/components/RealtimeBlogList";

// Revalidate every 60 seconds instead of on every request for better performance
export const revalidate = 60;

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  status: string;
  seo_title: string;
  seo_description: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  categories?: { name: string; slug: string }[];
  author?: { email: string };
  coverImage: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  // Fetch posts from Supabase with limit for faster loading
  const { data: posts, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      post_categories(category_id),
      categories:post_categories(categories(name, slug))
    `,
    )
    .eq("status", "published")
    .order("created_at", { ascending: false })
    .limit(50); // Limit to 50 most recent posts for faster loading

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  // Transform the data to match our BlogPost interface and ensure all required fields are present
  return posts
    .filter(post => {
      // Filter out posts that don't have required fields
      return (
        post && 
        post.id && 
        post.title && 
        post.slug && 
        post.excerpt && 
        post.featured_image && // Ensure featured image exists
        post.status === "published" // Double check status is published
      );
    })
    .map((post) => ({
      ...post,
      coverImage: post.featured_image, // Map the DB field to our interface
      categories: post.categories?.map((cat: any) => cat.categories) || [],
    }));
}

export default async function BlogPage() {
  // Get initial posts from the server
  const posts = await getBlogPosts();
  
  // Make sure we have valid posts before proceeding
  const validPosts = posts.filter(post => 
    post && 
    post.id && 
    post.title && 
    post.slug && 
    post.excerpt && 
    post.coverImage // Ensure coverImage exists for display
  );

  return (
    <RealtimeBlogList initialPosts={validPosts} />
  );
}
