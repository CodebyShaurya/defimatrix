"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  onBlur?: (range: any, source: any, editor: any) => void;
  onFocus?: (range: any, source: any, editor: any) => void;
}

// Dynamically import ReactQuill so that it only runs in the browser.
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

export const Editor: React.FC<EditorProps> = ({
  content,
  onChange,
  placeholder = "Write something awesome...",
  readOnly = false,
  onBlur,
  onFocus,
}) => {
  // Memoize modules and formats to avoid re-creating them on every render.
  const modules = useMemo(
    () => ({
      toolbar: [
        // Header dropdown (h1-h6 and normal text)
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        // Font family dropdown
        [{ font: [] }],
        // Font size dropdown
        [{ size: ["small", false, "large", "huge"] }],
        // Toggle buttons for bold, italic, underline, strike, and blockquote
        ["bold", "italic", "underline", "strike", "blockquote"],
        // List options: ordered and bullet.
        [{ list: "ordered" }, { list: "bullet" }],
        // Indent options: decrease/increase
        [{ indent: "-1" }, { indent: "+1" }],
        // Color and background dropdowns
        [{ color: [] }, { background: [] }],
        // Text alignment options
        [{ align: [] }],
        // Link, image, and video buttons
        ["link", "image", "video"],
        // Remove formatting button
        ["clean"],
      ],
    }),
    [],
  );

  const formats = useMemo(
    () => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "indent",
      "color",
      "background",
      "align",
      "link",
      "image",
      "video",
    ],
    [],
  );

  // Wrap the onChange callback to only pass the HTML content.
  const handleChange = (
    content: string,
    _delta: any,
    _source: any,
    _editor: any,
  ) => {
    onChange(content);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
        readOnly={readOnly}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        style={{
          height: "800px",
          width: "100%",
          marginBottom: "84px",
        }}
      />
    </div>
  );
};

export default Editor;
