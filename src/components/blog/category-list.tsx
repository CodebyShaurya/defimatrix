"use client";

import { useState, useEffect } from "react";
import { Category } from "@/lib/supabase/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useToast } from "@/components/ui/use-toast";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
});

type CategoryFormValues = z.infer<typeof categorySchema>;

interface CategoryListProps {
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

export function CategoryList({ categories, onUpdate }: CategoryListProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: selectedCategory?.name || "",
      slug: selectedCategory?.slug || "",
      description: selectedCategory?.description || "",
    },
  });

  // Watch the name field for changes
  const name = form.watch("name");

  // Update slug when name changes
  useEffect(() => {
    if (name && !selectedCategory) {
      // Only auto-generate if it's a new category
      const slug = slugify(name);
      form.setValue("slug", slug, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [name, form, selectedCategory]);

  async function onSubmit(data: CategoryFormValues) {
    try {
      if (selectedCategory) {
        const { error } = await supabase.from("categories").update(data).eq("id", selectedCategory.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("categories").insert(data);
        if (error) throw error;
      }

      toast({
        title: "Success",
        description: `Category ${selectedCategory ? "updated" : "created"} successfully`,
      });

      setIsOpen(false);
      setSelectedCategory(null);
      form.reset();
      onUpdate();
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${selectedCategory ? "update" : "create"} category`,
        variant: "destructive",
      });
    }
  }

  async function handleDelete(category: Category) {
    try {
      const { error } = await supabase.from("categories").delete().eq("id", category.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Category deleted successfully",
      });

      onUpdate();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete category",
        variant: "destructive",
      });
    }
  }

  function handleEdit(category: Category) {
    setSelectedCategory(category);
    form.reset({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
    });
    setIsOpen(true);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setSelectedCategory(null);
                form.reset({
                  name: "",
                  slug: "",
                  description: "",
                });
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              New Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedCategory ? "Edit Category" : "New Category"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Category name" {...field} />
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
                          <Input placeholder="category-slug" {...field} />
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
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Category description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">{selectedCategory ? "Update" : "Create"}</Button>
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
              <TableHead>Description</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(category)}>
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
