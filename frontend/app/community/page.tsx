"use client"

import type React from "react"
import { useState } from "react"
import { SearchAndFilter } from "./blog/SearchAndFilter"
import { WriteBlogButton } from "./blog/WriteBlogButton"
import { BlogFeed } from "./blog/BlogFeed"
import { Pagination } from "./blog/Plagination"
import { WriteBlogForm } from "./blog/WriteBlogForm"
import { BlogPost } from "./blog/BlogPost"
import { Navbar } from "@/components/navigation/navbar"

interface Blog {
  id: number
  title: string
  author: string
  date: string
  snippet: string
  content: string
  likes: number
  comments: number
  image: string
}

export const BlogSection: React.FC = () => {
  const [isWritingBlog, setIsWritingBlog] = useState(false)
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Navigating Hormone Replacement Therapy (HRT) Safely",
      author: "Dr. Priya Sharma",
      date: "2024-11-10",
      snippet: "Understanding the steps and precautions for a safe HRT journey...",
      content: "Full content of the blog post goes here...",
      likes: 58,
      comments: 22,
      image: "/lgbtimg.jpg",
    },
    {
      id: 2,
      title: "Trans Healthcare in India: Breaking Barriers",
      author: "Ravi Singh",
      date: "2024-10-20",
      snippet: "An in-depth look at the evolving landscape of transgender healthcare in India...",
      content: "Full content of the blog post goes here...",
      likes: 76,
      comments: 30,
      image: "/img.jpg",
    },
    {
      id: 3,
      title: "My HRT Journey: A Story of Courage and Self-Discovery",
      author: "Aanya Kapoor",
      date: "2024-09-12",
      snippet: "A personal narrative of transitioning and the challenges faced along the way...",
      content: "Full content of the blog post goes here...",
      likes: 105,
      comments: 45,
      image: "/lgbtimg.jpg",
    },
    {
      id: 4,
      title: "Legal Rights for Transgender Individuals in Healthcare",
      author: "Adv. Meera Patel",
      date: "2024-08-18",
      snippet: "A guide to understanding your rights as a transgender individual accessing healthcare...",
      content: "Full content of the blog post goes here...",
      likes: 64,
      comments: 19,
      image: "/project.jpg",
    },
    {
      id: 5,
      title: "Mental Health Support During HRT: What to Expect",
      author: "Dr. Sameer Verma",
      date: "2024-07-25",
      snippet: "Navigating mental health challenges during the transition process...",
      content: "Full content of the blog post goes here...",
      likes: 89,
      comments: 33,
      image: "/lgbtimg.jpg",
    },
    {
      id: 6,
      title: "Affordable Access to HRT Medications: Tips and Resources",
      author: "Neha Roy",
      date: "2024-06-30",
      snippet: "Exploring options for affordable HRT medications and reliable suppliers...",
      content: "Full content of the blog post goes here...",
      likes: 53,
      comments: 18,
      image: "/project.jpg",
    },
    {
      id: 7,
      title: "Trans-Friendly Clinics Across India: A Comprehensive List",
      author: "TransCare Team",
      date: "2024-05-10",
      snippet: "Find trans-friendly clinics near you with this verified list...",
      content: "Full content of the blog post goes here...",
      likes: 112,
      comments: 50,
      image: "/lgbtimg.jpg",
    },
    {
      id: 8,
      title: "Family Support During Transition: How to Build Understanding",
      author: "Saanvi Desai",
      date: "2024-04-15",
      snippet: "Tips for fostering family support and open communication during your transition...",
      content: "Full content of the blog post goes here...",
      likes: 70,
      comments: 25,
      image: "/img.jpg",
    },
    // Add more initial blog posts here
  ])
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleAddBlog = (newBlog: Omit<Blog, "id" | "likes" | "comments">) => {
    const blogWithId: Blog = {
      ...newBlog,
      id: blogs.length + 1,
      likes: 0,
      comments: 0,
    }
    setBlogs([blogWithId, ...blogs])
    setIsWritingBlog(false)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
        <Navbar/>
    <div className="container mx-auto px-4 py-8">
      
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">Community Blog</h1> */}
      <div className="flex justify-between items-center mb-6">
        <SearchAndFilter onSearch={handleSearch} />
        <WriteBlogButton onClick={() => setIsWritingBlog(true)} />
      </div>
      {isWritingBlog ? (
        <WriteBlogForm onClose={() => setIsWritingBlog(false)} onSubmit={handleAddBlog} />
      ) : selectedBlog ? (
        <BlogPost blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      ) : (
        <>
          <BlogFeed blogs={filteredBlogs} onBlogClick={setSelectedBlog} />
          <Pagination />
        </>
      )}
    </div>
    </div>
  )
}

export default BlogSection;