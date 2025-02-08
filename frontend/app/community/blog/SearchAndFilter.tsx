"use client"

import type React from "react"
import { Search, Filter } from "lucide-react"

export const SearchAndFilter: React.FC = () => {
    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
                <Filter size={20} />
                <span>Filter</span>
            </button>
        </div>
    )
}

// export default SearchAndFilter;