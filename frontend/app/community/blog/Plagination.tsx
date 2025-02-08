"use client"

import type React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <span className="text-purple-600">Page 1 of 5</span>
      <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

