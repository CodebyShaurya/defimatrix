"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Post, Category, Tag } from "@/lib/supabase/types";
import { PostList } from "@/components/blog/post-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const POSTS_PER_PAGE = 10;

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    tag: "",
  });

  const supabase = createClientComponentClient();
  const { toast } = useToast();

  // Fetch all data initially
  useEffect(() => {
    fetchData();
  }, []);

  // Apply filters and pagination
  useEffect(() => {
    applyFilters();
  }, [posts, filters]);

  async function fetchData() {
    try {
      setLoading(true);

      const [postsData, categoriesData, tagsData] = await Promise.all([
        supabase
          .from("posts")
          .select(
            `
            *,
            post_categories(
              category_id,
              categories(id, name)
            ),
            post_tags(
              tag_id,
              tags(id, name, category_id)
            )
          `,
          )
          .order("created_at", { ascending: false }),
        supabase.from("categories").select("*").order("name"),
        supabase.from("tags").select("*").order("name"),
      ]);

      if (postsData.error) throw postsData.error;
      if (categoriesData.error) throw categoriesData.error;
      if (tagsData.error) throw tagsData.error;

      setPosts(postsData.data || []);
      setFilteredPosts(postsData.data || []);
      setCategories(categoriesData.data || []);
      setTags(tagsData.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  function applyFilters() {
    let result = [...posts];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (post) =>
          post.title?.toLowerCase().includes(searchTerm) ||
          post.content?.toLowerCase().includes(searchTerm) ||
          post.excerpt?.toLowerCase().includes(searchTerm),
      );
    }

    // Apply category filter
    if (filters.category && filters.category !== "all") {
      result = result.filter((post) =>
        post.post_categories?.some((pc) => pc.category_id === filters.category),
      );
    }

    // Apply tag filter
    if (filters.tag && filters.tag !== "all") {
      result = result.filter((post) =>
        post.post_tags?.some((pt) => pt.tag_id === filters.tag),
      );
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }

  function handleSearch(term: string) {
    setFilters((prev) => ({ ...prev, search: term }));
  }

  function handleFilterChange(type: "category" | "tag", value: string) {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }

  async function handleDelete(post: Post) {
    try {
      const { error } = await supabase.from("posts").delete().eq("id", post.id);
      if (error) throw error;

      setPosts((prev) => prev.filter((p) => p.id !== post.id));
      setTotalPosts((prev) => prev - 1);
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
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

  // Calculate paginated posts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <PostList
        posts={paginatedPosts}
        categories={categories}
        tags={tags}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onDelete={handleDelete}
        searchTerm={filters.search}
        selectedCategory={filters.category}
        selectedTag={filters.tag}
      >
        <Select
          value={filters.tag}
          onValueChange={(value) => handleFilterChange("tag", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {categories.map((category) => (
              <SelectGroup key={category.id}>
                <SelectLabel>{category.name}</SelectLabel>
                {tags
                  .filter((tag) => tag.category_id === category.id)
                  .map((tag) => (
                    <SelectItem key={tag.id} value={tag.id}>
                      {tag.name}
                    </SelectItem>
                  ))}
              </SelectGroup>
            ))}
            <SelectGroup>
              <SelectLabel>Uncategorized</SelectLabel>
              {tags
                .filter((tag) => !tag.category_id)
                .map((tag) => (
                  <SelectItem key={tag.id} value={tag.id}>
                    {tag.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </PostList>
    </div>
  );
}
