"use client";

import { useState, useEffect } from "react";
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
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(
    posts.length > 0 ? posts[0] : null
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique category names for filtering
  const allCategories = posts
    .flatMap((post) => post.categories?.map((cat) => cat.name) || [])
    .filter((value, index, self) => self.indexOf(value) === index);

  useEffect(() => {
    // Filter out invalid posts
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

    // Update featured post
    if (validPosts.length > 0) {
      setFeaturedPost(validPosts[0]);
    } else {
      setFeaturedPost(null);
    }
  }, [posts]);

  useEffect(() => {
    // Set up realtime subscription
    const subscription = supabase
      .channel("public:posts")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "posts" },
        async (payload) => {
          console.log("Change received!", payload);
          
          // Fetch the updated post data including categories
          if (payload.eventType === "INSERT" || payload.eventType === "UPDATE") {
            const { data: updatedPost, error } = await supabase
              .from("posts")
              .select(
                `
                *,
                post_categories(category_id),
                categories:post_categories(categories(name, slug))
              `
              )
              .eq("id", payload.new.id)
              .single();

            if (!error && updatedPost) {
              // Transform the post to match our interface
              const transformedPost = {
                ...updatedPost,
                coverImage: updatedPost.featured_image,
                categories: updatedPost.categories?.map((cat: any) => cat.categories) || [],
              };

              // Update posts state based on event type
              if (payload.eventType === "INSERT") {
                setPosts((currentPosts) => [transformedPost, ...currentPosts]);
              } else if (payload.eventType === "UPDATE") {
                setPosts((currentPosts) =>
                  currentPosts.map((post) =>
                    post.id === transformedPost.id ? transformedPost : post
                  )
                );
              }
            }
          } else if (payload.eventType === "DELETE") {
            // Remove deleted post from state
            setPosts((currentPosts) =>
              currentPosts.filter((post) => post.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(subscription);
    };
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
