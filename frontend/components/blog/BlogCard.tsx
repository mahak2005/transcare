import type React from "react"
import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"

interface BlogCardProps {
  blog: {
    id: number
    title: string
    author: string
    date: string
    snippet: string
    likes: number
    comments: number
    image: string
  }
  onClick: () => void
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={blog.image || "/placeholder.svg"}
        alt={blog.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-purple-600">{blog.title}</h2>
        <p className="text-sm text-gray-600 mb-2">
          By {blog.author} • {blog.date}
        </p>
        <p className="text-gray-700 mb-4">{blog.snippet}</p>
        <div className="flex justify-between items-center">
          <button className="flex items-center space-x-1 text-pink-500">
            <Heart size={20} />
            <span>{blog.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-blue-500">
            <MessageCircle size={20} />
            <span>{blog.comments}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

