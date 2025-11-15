"use client";

import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/utils/supabase";
import BlogList from "./BlogList";
import FeaturedPost from "./FeaturedPost";

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

interface RealtimeBlogListProps {
  initialPosts: BlogPost[];
}

const RealtimeBlogList = ({ initialPosts }: RealtimeBlogListProps) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Memoize featured post to prevent unnecessary re-renders
  const featuredPost = useMemo(() => {
    const validPosts = posts.filter(
      (post) =>
        post &&
        post.id &&
        post.title &&
        post.slug &&
        post.excerpt &&
        post.coverImage &&
        post.status === "published"
    );
    return validPosts.length > 0 ? validPosts[0] : null;
  }, [posts]);

  // Memoize category list to prevent recalculation on every render
  const allCategories = useMemo(() => {
    return posts
      .flatMap((post) => post.categories?.map((cat) => cat.name) || [])
      .filter((value, index, self) => self.indexOf(value) === index);
  }, [posts]);

  useEffect(() => {
    // Disable realtime subscription to improve performance
    // Posts will update on page refresh instead
    // If realtime is needed, consider implementing debouncing and batch updates
    
    // Optional: Uncomment below to re-enable realtime with optimizations
    /*
    let updateTimeout: NodeJS.Timeout;
    const subscription = supabase
      .channel("public:posts")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "posts" },
        async (payload) => {
          // Debounce updates to prevent excessive re-renders
          clearTimeout(updateTimeout);
          updateTimeout = setTimeout(async () => {
            if (payload.eventType === "INSERT" || payload.eventType === "UPDATE") {
              const { data: updatedPost, error } = await supabase
                .from("posts")
                .select(`*, post_categories(category_id), categories:post_categories(categories(name, slug))`)
                .eq("id", payload.new.id)
                .eq("status", "published")
                .single();

              if (!error && updatedPost) {
                const transformedPost = {
                  ...updatedPost,
                  coverImage: updatedPost.featured_image,
                  categories: updatedPost.categories?.map((cat: any) => cat.categories) || [],
                };

                setPosts((currentPosts) => {
                  if (payload.eventType === "INSERT") {
                    return [transformedPost, ...currentPosts];
                  }
                  return currentPosts.map((post) =>
                    post.id === transformedPost.id ? transformedPost : post
                  );
                });
              }
            } else if (payload.eventType === "DELETE") {
              setPosts((currentPosts) =>
                currentPosts.filter((post) => post.id !== payload.old.id)
              );
            }
          }, 500);
        }
      )
      .subscribe();

    return () => {
      clearTimeout(updateTimeout);
      supabase.removeChannel(subscription);
    };
    */
  }, []);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Featured Post */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Latest Posts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">Latest posts</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              key="All"
              onClick={() => handleCategorySelect("All")}
              className={`rounded-full border px-6 py-2 text-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C450D5] focus:ring-offset-2 focus:ring-offset-gray-950 ${
                selectedCategory === "All"
                  ? "border-[#C450D5] bg-[#C450D5]"
                  : "border-gray-700 hover:border-[#C450D5] hover:bg-[#C450D5]"
              }`}
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`rounded-full border px-6 py-2 text-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C450D5] focus:ring-offset-2 focus:ring-offset-gray-950 ${
                  selectedCategory === category
                    ? "border-[#C450D5] bg-[#C450D5]"
                    : "border-gray-700 hover:border-[#C450D5] hover:bg-[#C450D5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {featuredPost ? (
          <BlogList
            posts={posts.filter((post) => post.id !== featuredPost.id)}
            selectedCategory={selectedCategory}
          />
        ) : (
          <div className="py-8 text-center text-white">
            <p>No blog posts found. Check back soon for new content!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default RealtimeBlogList;
