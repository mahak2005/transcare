"use client"

import type React from "react"
import Image from "next/image"
import { X, Heart, MessageCircle } from "lucide-react"

interface BlogPostProps {
  blog: {
    title: string
    author: string
    date: string
    content: string
    likes: number
    comments: number
    image: string
  }
  onClose: () => void
}

export const BlogPost: React.FC<BlogPostProps> = ({ blog, onClose }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-purple-600">{blog.title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <Image
        src={blog.image || "/placeholder.svg"}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-600 mb-4">
        By {blog.author} • {blog.date}
      </p>
      <div className="prose max-w-none mb-6">{blog.content}</div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-pink-500">
          <Heart size={20} />
          <span>{blog.likes} Likes</span>
        </button>
        <button className="flex items-center space-x-1 text-blue-500">
          <MessageCircle size={20} />
          <span>{blog.comments} Comments</span>
        </button>
      </div>
    </div>
  )
}

