"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navigation/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function CommunityPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-[1fr,2fr] gap-8">
          {/* Left Column - Posts List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Posts</h2>
              <Button>New Post</Button>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  isSelected={selectedPost?.id === post.id}
                  onClick={() => setSelectedPost(post)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Selected Post */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {selectedPost ? (
              <FullPost post={selectedPost} />
            ) : (
              <div className="text-center text-gray-500 py-12">Select a post to view details</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  likes: number
  comments: number
  tags: string[]
}

interface PostCardProps {
  post: Post
  isSelected: boolean
  onClick: () => void
}

function PostCard({ post, isSelected, onClick }: PostCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} onClick={onClick}>
      <Card
        className={`p-4 cursor-pointer transition-colors ${
          isSelected ? "border-purple-500 bg-purple-50" : "hover:bg-gray-50"
        }`}
      >
        <h3 className="font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{post.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" /> {post.likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" /> {post.comments}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function FullPost({ post }: { post: Post }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <span>
            By {post.author} • {post.date}
          </span>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" /> {post.likes}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Add a Comment</h3>
        <Textarea placeholder="Share your thoughts..." className="min-h-[100px]" />
        <Button>Post Comment</Button>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Comments</h3>
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Sample data
const posts: Post[] = [
  {
    id: 1,
    title: "Seeking Support: Starting My Transition Journey",
    content:
      "Hello everyone, I'm about to begin my transition journey and looking for advice and support from those who've been through this...",
    author: "Alex M.",
    date: "2h ago",
    likes: 24,
    comments: 12,
    tags: ["support", "transition"],
  },
  // Add more posts...
]

const comments = [
  {
    id: 1,
    author: "Sam P.",
    date: "1h ago",
    content: "Thank you for sharing your story. I went through something similar last year...",
  },
  // Add more comments...
]

