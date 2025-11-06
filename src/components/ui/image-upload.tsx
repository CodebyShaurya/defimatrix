"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Image, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useToast } from "./use-toast";

interface ImageUploadProps {
  value?: string;
  onChange?: (value: string) => void;
  onRemove?: () => void;
  className?: string;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  className,
}: ImageUploadProps) {
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setLoading(true);
        const file = acceptedFiles[0];
        if (!file) return;

        // Create a unique file name
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        // Remove the blog/ prefix since we're already using the blog-images bucket
        const filePath = fileName;

        // Upload the file to Supabase storage
        const { error: uploadError, data: uploadData } = await supabase.storage
          .from("blog-images")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
          });

        if (uploadError) {
          console.error("Upload error:", uploadError);
          throw new Error(uploadError.message || "Failed to upload image");
        }

        if (!uploadData) {
          throw new Error("No upload data returned");
        }

        // Get the public URL - using the correct method
        const { data } = await supabase.storage
          .from("blog-images")
          .createSignedUrl(filePath, 60 * 60 * 24 * 365); // 1 year expiry

        if (!data?.signedUrl) {
          throw new Error("Failed to generate public URL");
        }

        if (onChange) {
          onChange(data.signedUrl);
        }

        toast({
          title: "Success",
          description: "Image uploaded successfully",
        });
      } catch (error) {
        console.error("Error uploading image:", error);
        toast({
          title: "Error",
          description:
            error instanceof Error ? error.message : "Failed to upload image",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    },
    [supabase, onChange, toast],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
    disabled: loading,
  });

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "hover:bg-accent/50 cursor-pointer rounded-lg border-2 border-dashed p-4 transition",
          isDragActive && "border-primary",
          loading && "cursor-not-allowed opacity-50",
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2">
          <Image className="text-muted-foreground h-8 w-8" />
          {loading ? (
            <p className="text-muted-foreground text-sm">Uploading...</p>
          ) : (
            <p className="text-muted-foreground text-sm">
              {isDragActive
                ? "Drop the image here"
                : "Drag & drop an image here, or click to select"}
            </p>
          )}
        </div>
      </div>

      {value && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="Uploaded image"
            className="h-full w-full object-cover"
          />
          {onRemove && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={onRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
