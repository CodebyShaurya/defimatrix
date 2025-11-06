'use client'

import { useState, useCallback } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Editor } from '@tiptap/react'
import { Image } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ImageUpload } from '@/components/ui/image-upload'

interface ImageUploadPluginProps {
  editor: Editor | null
}

export function ImageUploadPlugin({ editor }: ImageUploadPluginProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleImageUpload = useCallback(
    (url: string) => {
      if (editor) {
        editor
          .chain()
          .focus()
          .insertContent({
            type: 'image',
            attrs: { src: url, alt: 'Blog post image' }
          })
          .run()
        setIsOpen(false)
      }
    },
    [editor]
  )

  if (!editor) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Image className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>
        <ImageUpload onChange={handleImageUpload} />
      </DialogContent>
    </Dialog>
  )
}
