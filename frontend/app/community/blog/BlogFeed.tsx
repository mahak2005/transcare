"use client"
import type React from "react"
import { BlogCard } from "./BlogCard"

// Mock data for demonstration
const blogs = [
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 1,
    title: "Embracing Diversity in Tech",
    author: "Alex Johnson",
    date: "2023-06-15",
    snippet: "Exploring the importance of inclusivity in the tech industry...",
    likes: 42,
    comments: 15,
    image: "/placeholder.svg?height=200&width=300",
  },
  // Add more blog objects here...
]

export const BlogFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

// export default BlogFeed;