"use client";

import { memo } from "react";
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

const BlogCard = memo(({ title, category, date, excerpt, slug, coverImage }: BlogCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-[#1a1f36] transition-all hover:scale-[1.02]">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <Image
            src={coverImage}
            alt={title}
            width={400}
            height={225}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
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
            <span className="text-[#C450D5] transition-transform group-hover:translate-x-1">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
