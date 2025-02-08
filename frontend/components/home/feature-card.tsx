"use client"

import { motion } from "framer-motion"
// import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  // icon: LucideIcon
  index: number
}

// export function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
export function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-lg 
                 hover:shadow-xl transition-all duration-300 cursor-pointer
                 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
    >
      {/* <Icon className="h-12 w-12 mb-4 text-purple-500 group-hover:text-pink-500 transition-colors" /> */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700 transition-colors">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
    </motion.div>
  )
}

