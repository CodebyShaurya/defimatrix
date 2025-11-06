import { notFound } from "next/navigation";
import { supabase } from "@/utils/supabase";
import BlogDetail from "@/components/BlogDetail";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  // Fetch the post from Supabase
  const { data: post, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      categories:post_categories(categories(name, slug))
    `,
    )
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !post) {
    console.error("Error fetching blog post:", error);
    return null;
  }

  // Get author details if available
  const { data: author } = await supabase.from("profiles").select("name, role").eq("id", post.author_id).single();

  return {
    frontmatter: {
      title: post.title,
      categories: post.categories?.map((cat: any) => cat.categories),
      created_at: post.created_at,
      excerpt: post.excerpt,
      author_name: author?.name,
      author_role: author?.role,
      coverImage: post.featured_image,
    },
    content: post.content,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back to blog link */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M5 12L12 19M5 12L12 5" />
          </svg>
          Back to blog
        </a>
      </div>

      {/* Article Content */}
      <BlogDetail {...post} />

      {/* Newsletter Section */}
      {/* <Newsletter /> */}
    </div>
  );
}

// Set dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching
