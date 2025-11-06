"use client";

import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BlogList = ({ posts, selectedCategory }: BlogListProps) => {
  // Filter posts by selected category if one is specified
  const filteredPosts =
    selectedCategory && selectedCategory !== "All"
      ? posts.filter((post) => {
          return post.categories?.some((cat) => cat.name === selectedCategory);
        })
      : posts;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
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
    </motion.div>
  );
};

export default BlogList;
