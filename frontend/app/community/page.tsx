"use client"

import type React from "react";
import { useState } from "react";
import {Navbar} from "@/components/navigation/navbar"; // Adjust path based on your folder structure
import { SearchAndFilter } from "./blog/SearchAndFilter";
import { WriteBlogButton } from "./blog/WriteBlogButton";
import { BlogFeed } from "./blog/BlogFeed";
import { Pagination } from "./blog/Plagination";
import { WriteBlogForm } from "./blog/WriteBlogForm";

const BlogSection: React.FC = () => {
  const [isWritingBlog, setIsWritingBlog] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
          Community Blog
        </h1>
        <div className="flex justify-between items-center mb-6">
          <SearchAndFilter />
          <WriteBlogButton onClick={() => setIsWritingBlog(true)} />
        </div>
        {isWritingBlog ? (
          <WriteBlogForm onClose={() => setIsWritingBlog(false)} />
        ) : (
          <>
            <BlogFeed />
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogSection;
