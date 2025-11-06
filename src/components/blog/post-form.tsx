"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Category, Post, Tag } from "@/lib/supabase/types";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Editor } from "@/components/editor";
import { ImageUpload } from "@/components/ui/image-upload";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  featured_image: z.string().optional(),
  status: z.enum(["draft", "published"]),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  category_ids: z.array(z.string()).optional(),
  tag_ids: z.array(z.string()).optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

type PostFormValues = z.infer<typeof postSchema>;

interface PostFormProps {
  post?: Post;
  categories: Category[];
  tags: Tag[];
  onSubmit: (data: PostFormValues) => Promise<void>;
  isSubmitting?: boolean;
  error?: string | null;
}

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function PostForm({ post, categories, tags, onSubmit, isSubmitting = false, error }: PostFormProps) {
  const { toast } = useToast();
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      excerpt: post?.excerpt || "",
      featured_image: post?.featured_image || "",
      status: post?.status || "draft",
      seo_title: post?.seo_title || "",
      seo_description: post?.seo_description || "",
      category_ids: post?.categories?.map((category) => category.id) || [],
      tag_ids: post?.tags?.map((tag) => tag.id) || [],
      created_at: post?.created_at ? new Date(post.created_at) : new Date(),
      updated_at: post?.updated_at ? new Date(post.updated_at) : new Date(),
    },
  });

  // Watch the title field for changes
  const title = form.watch("title");

  // Update slug when title changes
  useEffect(() => {
    if (title && !post) {
      // Only auto-generate if it's a new post
      const slug = slugify(title);
      form.setValue("slug", slug, {
        shouldValidate: true,
        shouldDirty: true,
      });

      // Also update SEO title if it's empty
      const currentSeoTitle = form.getValues("seo_title");
      if (!currentSeoTitle) {
        form.setValue("seo_title", title, {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }, [title, form, post]);

  const handleSubmit = async (data: PostFormValues) => {
    try {
      await onSubmit(data);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="grid gap-8">
          {/* Main Content Section */}
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Post title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input placeholder="post-slug" {...field} />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const slug = slugify(title);
                            form.setValue("slug", slug, {
                              shouldValidate: true,
                              shouldDirty: true,
                            });
                          }}
                        >
                          Generate
                        </Button>
                      </div>
                    </FormControl>
                    <FormDescription>The URL-friendly version of the title</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Editor content={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Brief description of the post" className="h-24" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Sidebar Content */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-medium">Publishing</h3>
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-medium">Featured Image</h3>
                <FormField
                  control={form.control}
                  name="featured_image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ImageUpload
                          value={field.value}
                          onChange={field.onChange}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-medium">Categories and Tags</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="category_ids"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categories</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            const current = field.value || [];
                            const updated = current.includes(value)
                              ? current.filter((id) => id !== value)
                              : [...current, value];
                            field.onChange(updated);
                          }}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select categories">
                                {field.value && field.value.length > 0
                                  ? `${field.value.length} selected`
                                  : "Select categories"}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                <div className="flex items-center gap-2">
                                  <div
                                    className={cn(
                                      "border-primary h-4 w-4 rounded-sm border",
                                      field.value?.includes(category.id) ? "bg-primary" : "bg-transparent",
                                    )}
                                  />
                                  {category.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {field.value && field.value.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {field.value.map((categoryId) => {
                              const category = categories.find((c) => c.id === categoryId);
                              if (!category) return null;
                              return (
                                <Badge key={category.id} variant="secondary" className="gap-1">
                                  {category.name}
                                  <button
                                    type="button"
                                    className="hover:text-destructive ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                                    onClick={() => {
                                      field.onChange(field.value?.filter((id) => id !== category.id) || []);
                                    }}
                                  >
                                    <X className="h-3 w-3" />
                                    <span className="sr-only">Remove</span>
                                  </button>
                                </Badge>
                              );
                            })}
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tag_ids"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            const current = field.value || [];
                            const updated = current.includes(value)
                              ? current.filter((id) => id !== value)
                              : [...current, value];
                            field.onChange(updated);
                          }}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select tags">
                                {field.value && field.value.length > 0
                                  ? `${field.value.length} selected`
                                  : "Select tags"}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectGroup key={category.id}>
                                <SelectLabel>{category.name}</SelectLabel>
                                {tags
                                  .filter((tag) => tag.category_id === category.id)
                                  .map((tag) => (
                                    <SelectItem key={tag.id} value={tag.id}>
                                      <div className="flex items-center gap-2">
                                        <div
                                          className={cn(
                                            "border-primary h-4 w-4 rounded-sm border",
                                            field.value?.includes(tag.id) ? "bg-primary" : "bg-transparent",
                                          )}
                                        />
                                        {tag.name}
                                      </div>
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
                                    <div className="flex items-center gap-2">
                                      <div
                                        className={cn(
                                          "border-primary h-4 w-4 rounded-sm border",
                                          field.value?.includes(tag.id) ? "bg-primary" : "bg-transparent",
                                        )}
                                      />
                                      {tag.name}
                                    </div>
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {field.value && field.value.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {field.value.map((tagId) => {
                              const tag = tags.find((t) => t.id === tagId);
                              if (!tag) return null;
                              return (
                                <Badge key={tag.id} variant="secondary" className="gap-1">
                                  {tag.name}
                                  <button
                                    type="button"
                                    className="hover:text-destructive ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                                    onClick={() => {
                                      field.onChange(field.value?.filter((id) => id !== tag.id) || []);
                                    }}
                                  >
                                    <X className="h-3 w-3" />
                                    <span className="sr-only">Remove</span>
                                  </button>
                                </Badge>
                              );
                            })}
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-medium">SEO Settings</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="seo_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                          <Input placeholder="SEO-optimized title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="seo_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="SEO meta description" className="h-20" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Date Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="created_at"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Created Date</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date | null) => field.onChange(date || new Date())}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      maxDate={new Date()}
                      minDate={new Date("2019-01-01")}
                      placeholderText="Select date and time"
                      showYearDropdown
                      scrollableYearDropdown
                      customInput={
                        <div className="flex items-center">
                          <Input
                            value={field.value ? field.value.toLocaleString() : ""}
                            readOnly
                            placeholder="Select date and time"
                            className="cursor-pointer"
                          />
                          <CalendarIcon className="absolute right-3 h-4 w-4 text-gray-400" />
                        </div>
                      }
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="updated_at"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Last Updated</FormLabel>
                <FormControl>
                  <div className="relative">
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date | null) => field.onChange(date || new Date())}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      maxDate={new Date()}
                      minDate={new Date("2019-01-01")}
                      placeholderText="Select date and time"
                      showYearDropdown
                      scrollableYearDropdown
                      customInput={
                        <div className="flex items-center">
                          <Input
                            value={field.value ? field.value.toLocaleString() : ""}
                            readOnly
                            placeholder="Select date and time"
                            className="cursor-pointer"
                          />
                          <CalendarIcon className="absolute right-3 h-4 w-4 text-gray-400" />
                        </div>
                      }
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Error Display */}
        {(error || form.formState.errors.root) && (
          <div className="bg-destructive/15 mb-6 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="text-destructive h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-destructive text-sm font-medium">Error submitting form</h3>
                <div className="text-destructive mt-2 text-sm">{error || form.formState.errors.root?.message}</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving...
              </>
            ) : post ? (
              "Update Post"
            ) : (
              "Create Post"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
