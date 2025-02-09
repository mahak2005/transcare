// "use client"
// import type React from "react"
// import { BlogCard } from "./BlogCard"

// const blogs = [
  // {
  //   id: 1,
  //   title: "Navigating Hormone Replacement Therapy (HRT) Safely",
  //   author: "Dr. Priya Sharma",
  //   date: "2024-11-10",
  //   snippet: "Understanding the steps and precautions for a safe HRT journey...",
  //   likes: 58,
  //   comments: 22,
  //   image: "/hrt-guide.svg?height=200&width=300",
  // },
  // {
  //   id: 2,
  //   title: "Trans Healthcare in India: Breaking Barriers",
  //   author: "Ravi Singh",
  //   date: "2024-10-20",
  //   snippet: "An in-depth look at the evolving landscape of transgender healthcare in India...",
  //   likes: 76,
  //   comments: 30,
  //   image: "/trans-healthcare.svg?height=200&width=300",
  // },
  // {
  //   id: 3,
  //   title: "My HRT Journey: A Story of Courage and Self-Discovery",
  //   author: "Aanya Kapoor",
  //   date: "2024-09-12",
  //   snippet: "A personal narrative of transitioning and the challenges faced along the way...",
  //   likes: 105,
  //   comments: 45,
  //   image: "/personal-journey.svg?height=200&width=300",
  // },
  // {
  //   id: 4,
  //   title: "Legal Rights for Transgender Individuals in Healthcare",
  //   author: "Adv. Meera Patel",
  //   date: "2024-08-18",
  //   snippet: "A guide to understanding your rights as a transgender individual accessing healthcare...",
  //   likes: 64,
  //   comments: 19,
  //   image: "/legal-rights.svg?height=200&width=300",
  // },
  // {
  //   id: 5,
  //   title: "Mental Health Support During HRT: What to Expect",
  //   author: "Dr. Sameer Verma",
  //   date: "2024-07-25",
  //   snippet: "Navigating mental health challenges during the transition process...",
  //   likes: 89,
  //   comments: 33,
  //   image: "/mental-health.svg?height=200&width=300",
  // },
  // {
  //   id: 6,
  //   title: "Affordable Access to HRT Medications: Tips and Resources",
  //   author: "Neha Roy",
  //   date: "2024-06-30",
  //   snippet: "Exploring options for affordable HRT medications and reliable suppliers...",
  //   likes: 53,
  //   comments: 18,
  //   image: "/affordable-hrt.svg?height=200&width=300",
  // },
  // {
  //   id: 7,
  //   title: "Trans-Friendly Clinics Across India: A Comprehensive List",
  //   author: "TransCare Team",
  //   date: "2024-05-10",
  //   snippet: "Find trans-friendly clinics near you with this verified list...",
  //   likes: 112,
  //   comments: 50,
  //   image: "/clinic-list.svg?height=200&width=300",
  // },
  // {
  //   id: 8,
  //   title: "Family Support During Transition: How to Build Understanding",
  //   author: "Saanvi Desai",
  //   date: "2024-04-15",
  //   snippet: "Tips for fostering family support and open communication during your transition...",
  //   likes: 70,
  //   comments: 25,
  //   image: "/family-support.svg?height=200&width=300",
  // },
// ];


// export const BlogFeed: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {blogs.map((blog) => (
//         <BlogCard key={blog.id} blog={blog} />
//       ))}
//     </div>
//   )
// }

// // export default BlogFeed;
import type React from "react"
import { BlogCard } from "./BlogCard"

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

interface BlogFeedProps {
  blogs: Blog[]
  onBlogClick: (blog: Blog) => void
}


export const BlogFeed: React.FC<BlogFeedProps> = ({ blogs, onBlogClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} onClick={() => onBlogClick(blog)} />
      ))}
    </div>
  )
}

