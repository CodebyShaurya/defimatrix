"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PostForm } from "@/components/blog/post-form";
import { useToast } from "@/components/ui/use-toast";
import { Category, Post, Tag } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams(); // ✅ Correct way to access dynamic params in App Router
  const supabase = createClientComponentClient();
  const { toast } = useToast();
  const [post, setPost] = useState<Post | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const postId = params.id as string; // ✅ Ensure `id` is treated as a string

  useEffect(() => {
    if (postId) {
      fetchData(postId);
    }
  }, [postId]);

  async function fetchData(postId: string) {
    try {
      // Fetch post
      const { data: postData, error: postError } = await supabase
        .from("posts")
        .select(
          `
          *,
          categories:post_categories(category:categories(*)),
          tags:post_tags(tag:tags(*))
        `,
        )
        .eq("id", postId)
        .single();

      if (postError) throw postError;

      // Transform data
      setPost({
        ...postData,
        categories: postData.categories?.map((c: any) => c.category) || [],
        tags: postData.tags?.map((t: any) => t.tag) || [],
        created_at: postData.created_at
          ? new Date(postData.created_at)
          : new Date(),
        updated_at: postData.updated_at
          ? new Date(postData.updated_at)
          : new Date(),
      });

      // Fetch categories and tags
      const [{ data: categoriesData }, { data: tagsData }] = await Promise.all([
        supabase.from("categories").select("*").order("name"),
        supabase.from("tags").select("*").order("name"),
      ]);

      setCategories(categoriesData || []);
      setTags(tagsData || []);
    } catch (error) {
      console.error("Error fetching post data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch post data",
        variant: "destructive",
      });
      router.push("/admin/blog");
    }
  }

  async function handleSubmit(data: any) {
    try {
      setIsSubmitting(true);
      setError(null);

      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError || !userData?.user) throw new Error("Not authenticated");

      // Always set updated_at to current time when updating
      const now = new Date();

      // Update post
      const { error: postError } = await supabase
        .from("posts")
        .update({
          title: data.title,
          slug: data.slug,
          content: data.content,
          excerpt: data.excerpt,
          featured_image: data.featured_image,
          status: data.status,
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          created_at: data.created_at,
          updated_at: now, // Always use current time for updates
        })
        .eq("id", postId);

      if (postError) {
        // Handle specific database errors
        if (
          postError.code === "23505" &&
          postError.message.includes("posts_slug_key")
        ) {
          throw new Error(
            "A post with this slug already exists. Please choose a different slug.",
          );
        }
        throw postError;
      }

      // Update categories
      await supabase.from("post_categories").delete().eq("post_id", postId);
      if (data.category_ids?.length) {
        const { error: categoryError } = await supabase
          .from("post_categories")
          .insert(
            data.category_ids.map((categoryId: string) => ({
              post_id: postId,
              category_id: categoryId,
            })),
          );
        if (categoryError) throw categoryError;
      }

      // Update tags
      await supabase.from("post_tags").delete().eq("post_id", postId);
      if (data.tag_ids?.length) {
        const { error: tagError } = await supabase.from("post_tags").insert(
          data.tag_ids.map((tagId: string) => ({
            post_id: postId,
            tag_id: tagId,
          })),
        );
        if (tagError) throw tagError;
      }

      toast({
        title: "Success",
        description: "Post updated successfully",
        duration: 3000,
      });
      router.push("/admin/blog");
    } catch (error) {
      console.error("Error updating post:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to update post. Please try again.";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isPending || !post) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex h-32 items-center justify-center">
          <div className="flex items-center gap-2">
            <svg
              className="text-primary h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="text-sm font-medium">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <Link href="/admin/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Posts
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Edit Post</h1>
        </div>
      </div>
      <PostForm
        post={post}
        onSubmit={handleSubmit}
        categories={categories}
        tags={tags}
        isSubmitting={isSubmitting}
        error={error}
      />
    </div>
  );
}
