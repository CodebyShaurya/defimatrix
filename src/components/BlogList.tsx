"use client";

import { memo, useMemo } from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  status: string;
  author_id: string;
  created_at: string;
  updated_at: string;
  categories?: { name: string; slug: string }[];
  author?: { email: string };
  coverImage: string;
}

interface BlogListProps {
  posts: BlogPost[];
  selectedCategory?: string;
}

const BlogList = memo(({ posts, selectedCategory }: BlogListProps) => {
  // Memoize filtered posts to prevent recalculation on every render
  const filteredPosts = useMemo(() => {
    return selectedCategory && selectedCategory !== "All"
      ? posts.filter((post) => {
          return post.categories?.some((cat) => cat.name === selectedCategory);
        })
      : posts;
  }, [posts, selectedCategory]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map((post) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          category={post.categories?.[0]?.name || "Uncategorized"}
          date={new Date(post.created_at).toLocaleDateString("en-US", {
            month: "numeric",
            day: "numeric",
            year: "numeric",
          })}
          excerpt={post.excerpt}
          slug={post.slug}
          coverImage={post.coverImage}
        />
      ))}
    </div>
  );
});

BlogList.displayName = "BlogList";

export default BlogList;
