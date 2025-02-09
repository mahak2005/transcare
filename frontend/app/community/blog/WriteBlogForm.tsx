"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"

interface WriteBlogFormProps {
  onClose: () => void
  onSubmit: (blog: {
    title: string
    author: string
    date: string
    snippet: string
    content: string
    image: string
  }) => void
}

export const WriteBlogForm: React.FC<WriteBlogFormProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newBlog = {
      title,
      author,
      date: new Date().toISOString().split("T")[0],
      snippet: content.slice(0, 100) + "...",
      content,
      image: "/placeholder.svg?height=200&width=300",
    }
    onSubmit(newBlog)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-purple-600">Write a Blog</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
            rows={6}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit Blog
        </button>
      </form>
    </div>
  )
}

