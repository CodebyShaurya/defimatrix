"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    slug: string;
    content?: string;
    excerpt: string;
    featured_image?: string;
    status?: string;
    created_at: string;
    updated_at?: string;
    categories?: { name: string; slug: string }[];
    author?: { email: string };
    coverImage: string;
  };
}

const FeaturedPost = memo(({ post }: FeaturedPostProps) => {
  return (
    <div className="relative overflow-hidden bg-black py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative z-10">
            <span className="mb-2 inline-block rounded-full bg-[#C450D5] px-3 py-1 text-sm capitalize text-white">
              {post.categories?.[0]?.name || "Uncategorized"}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">{post.title}</h2>
            <p className="mb-6 line-clamp-2 text-lg text-gray-400">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <Link href={`/blog/${post.slug}`} className="group inline-flex items-center gap-2 text-white">
                Read more
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-[3/2]">
            <Image src={post.coverImage} alt={post.title} className="object-cover" width={800} height={600} priority />
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturedPost.displayName = "FeaturedPost";

export default FeaturedPost;
