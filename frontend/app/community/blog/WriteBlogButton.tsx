"use client"

import type React from "react"
import { PenTool } from "lucide-react"

interface WriteBlogButtonProps {
  onClick: () => void
}

export const WriteBlogButton: React.FC<WriteBlogButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
    >
      <PenTool size={20} />
      <span>Write a Blog</span>
    </button>
  )
}

