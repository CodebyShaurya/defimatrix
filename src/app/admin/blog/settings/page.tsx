"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Category, Tag } from "@/lib/supabase/types";
import { CategoryList } from "@/components/blog/category-list";
import { TagList } from "@/components/blog/tag-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

export default function BlogSettingsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  async function fetchData() {
    try {
      setLoading(true);
      const [categoriesData, tagsData] = await Promise.all([
        supabase.from("categories").select("*").order("name"),
        supabase
          .from("tags")
          .select(
            `
            *,
            category:categories (
              id,
              name
            )
          `,
          )
          .order("name"),
      ]);

      if (categoriesData.error) throw categoriesData.error;
      if (tagsData.error) throw tagsData.error;

      setCategories(categoriesData.data || []);
      setTags(tagsData.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to load settings data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <h1 className="mb-8 text-3xl font-bold">Blog Settings</h1>

      <Tabs defaultValue="categories">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="tags">Tags</TabsTrigger>
        </TabsList>
        <TabsContent value="categories" className="mt-6">
          <CategoryList categories={categories} onUpdate={fetchData} />
        </TabsContent>
        <TabsContent value="tags" className="mt-6">
          <TagList tags={tags} categories={categories} onUpdate={fetchData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
