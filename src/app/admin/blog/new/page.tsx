"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PostForm } from "@/components/blog/post-form";
import { useToast } from "@/components/ui/use-toast";
import { Category, Tag } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewPostPage() {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [categoriesData, tagsData] = await Promise.all([
        supabase.from("categories").select("*").order("name"),
        supabase.from("tags").select("*").order("name"),
      ]);

      if (categoriesData.error) throw categoriesData.error;
      if (tagsData.error) throw tagsData.error;

      setCategories(categoriesData.data || []);
      setTags(tagsData.data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load categories and tags",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(data: any) {
    try {
      setSubmitting(true);
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        throw new Error("Not authenticated");
      }

      // Set both created_at and updated_at to current time for new posts
      const now = new Date();

      // First create the post
      const { data: post, error: postError } = await supabase
        .from("posts")
        .insert({
          title: data.title,
          slug: data.slug,
          content: data.content,
          excerpt: data.excerpt,
          featured_image: data.featured_image,
          status: data.status,
          seo_title: data.seo_title,
          seo_description: data.seo_description,
          author_id: user.id,
          created_at: data.created_at || now,
          updated_at: now, // Always use current time for new posts
        })
        .select()
        .single();

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

      // Then create the category relationships
      if (data.category_ids?.length) {
        const categoryRelations = data.category_ids.map(
          (categoryId: string) => ({
            post_id: post.id,
            category_id: categoryId,
          }),
        );

        const { error: categoryError } = await supabase
          .from("post_categories")
          .insert(categoryRelations);

        if (categoryError) throw categoryError;
      }

      // Finally create the tag relationships
      if (data.tag_ids?.length) {
        const tagRelations = data.tag_ids.map((tagId: string) => ({
          post_id: post.id,
          tag_id: tagId,
        }));

        const { error: tagError } = await supabase
          .from("post_tags")
          .insert(tagRelations);

        if (tagError) throw tagError;
      }

      toast({
        title: "Success",
        description: "Post created successfully",
        duration: 3000,
      });

      router.push("/admin/blog");
    } catch (error) {
      console.error("Error creating post:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to create post. Please try again.";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
      setError(errorMessage);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
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
          <h1 className="text-3xl font-bold">Create New Post</h1>
        </div>
      </div>
      <PostForm
        onSubmit={async (data) => {
          try {
            await handleSubmit(data);
          } catch (error) {
            throw error;
          }
        }}
        categories={categories}
        tags={tags}
        isSubmitting={submitting}
        error={error}
      />
    </div>
  );
}
