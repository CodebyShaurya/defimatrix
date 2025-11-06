"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
  coverImage: string;
}

const BlogCard = ({ title, category, date, excerpt, slug, coverImage }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      className="group overflow-hidden rounded-xl bg-[#1a1f36] transition-all"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <img
            src={coverImage}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4">
            <span className="rounded-full bg-[#C450D5] px-3 py-1 text-sm capitalize text-white">{category}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 text-sm text-gray-400">{date}</div>
          <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#C450D5]">{title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-400">{excerpt}</p>
          <div className="flex items-center justify-between">
            <motion.span className="text-[#C450D5]" whileHover={{ x: 5 }}>
              Read more →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
