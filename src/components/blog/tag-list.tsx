"use client";

import { useState, useEffect } from "react";
import { Tag, Category } from "@/lib/supabase/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Pencil, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const tagSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  category_id: z.string().optional(),
  description: z.string().optional(),
});

type TagFormValues = z.infer<typeof tagSchema>;

interface TagListProps {
  tags: Tag[];
  categories: Category[];
  onUpdate: () => void;
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

export function TagList({ tags, categories, onUpdate }: TagListProps) {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  const form = useForm<TagFormValues>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      name: selectedTag?.name || "",
      slug: selectedTag?.slug || "",
      category_id: selectedTag?.category_id || "",
      description: selectedTag?.description || "",
    },
  });

  // Watch the name field for changes
  const name = form.watch("name");

  // Update slug when name changes
  useEffect(() => {
    if (name && !selectedTag) {
      // Only auto-generate if it's a new tag
      const slug = slugify(name);
      form.setValue("slug", slug, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [name, form, selectedTag]);

  async function onSubmit(data: TagFormValues) {
    try {
      if (selectedTag) {
        const { error } = await supabase
          .from("tags")
          .update(data)
          .eq("id", selectedTag.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("tags").insert(data);
        if (error) throw error;
      }

      toast({
        title: "Success",
        description: `Tag ${selectedTag ? "updated" : "created"} successfully`,
      });

      setIsOpen(false);
      setSelectedTag(null);
      form.reset();
      onUpdate();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${selectedTag ? "update" : "create"} tag`,
        variant: "destructive",
      });
    }
  }

  async function handleDelete(tag: Tag) {
    try {
      const { error } = await supabase.from("tags").delete().eq("id", tag.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Tag deleted successfully",
      });

      onUpdate();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete tag",
        variant: "destructive",
      });
    }
  }

  function handleEdit(tag: Tag) {
    setSelectedTag(tag);
    form.reset({
      name: tag.name,
      slug: tag.slug,
      category_id: tag.category_id || "",
      description: tag.description || "",
    });
    setIsOpen(true);
  }

  // Helper function to get category name
  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return null;
    return categories.find((cat) => cat.id === categoryId)?.name || null;
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tags</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setSelectedTag(null);
                form.reset({
                  name: "",
                  slug: "",
                  category_id: "",
                  description: "",
                });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedTag ? "Edit Tag" : "New Tag"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Tag name" {...field} />
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
                          <Input placeholder="tag-slug" {...field} />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const slug = slugify(name);
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category_id"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category (optional)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Optionally assign this tag to a category
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Tag description (optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">
                  {selectedTag ? "Update" : "Create"}
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.id}>
                <TableCell>{tag.name}</TableCell>
                <TableCell>{tag.slug}</TableCell>
                <TableCell>
                  {tag.category_id && (
                    <Badge variant="secondary">
                      {getCategoryName(tag.category_id)}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{tag.description}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(tag)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(tag)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
