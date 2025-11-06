"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BlogDetailProps {
  content: string;
  frontmatter: {
    title: string;
    categories?: { name: string }[];
    created_at: string;
    excerpt: string;
    author_name?: string;
    author_role?: string;
    coverImage: string;
  };
}

const BlogDetail = ({ content, frontmatter }: BlogDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-4xl px-4 py-8"
    >
      <div className="overflow-hidden rounded-xl bg-black shadow-xl">
        <div className="relative h-full w-full">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            className="h-full w-full object-cover"
            width={1200}
            height={630}
            priority
          />
        </div>

        <div className="p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-[#C450D5] px-4 py-2 capitalize text-white">
                {frontmatter.categories && frontmatter.categories.length > 0
                  ? frontmatter.categories[0].name
                  : "Uncategorized"}
              </span>
              <span className="text-gray-400">
                {new Date(frontmatter.created_at).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-white lg:text-4xl">{frontmatter.title}</h1>

            <p className="mb-6 text-sm font-normal text-white/70">{frontmatter.excerpt}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert max-w-none"
          >
            <style jsx global>{`
              .prose p,
              .prose li,
              .prose h1,
              .prose h2,
              .prose h3,
              .prose h4,
              .prose h5,
              .prose h6,
              .prose strong,
              .prose em,
              .prose blockquote {
                color: white !important;
              }
              .prose a {
                color: #c450d5 !important;
              }
              .prose code {
                color: #e2e8f0 !important;
                background-color: #1a202c !important;
              }
              /* Ensure all content has white text */
              .blog-content * {
                color: white !important;
              }
              .blog-content span,
              .blog-content div {
                color: white !important;
              }
              /* Preserve link colors */
              .blog-content a {
                color: #c450d5 !important;
              }
            `}</style>
            <div className="blog-content text-white" dangerouslySetInnerHTML={{ __html: content }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
