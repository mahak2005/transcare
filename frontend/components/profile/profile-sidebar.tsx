"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Briefcase,
  Calendar,
  Users,
  Compass,
  Settings,
  BarChart,
} from "lucide-react"

const mainMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/profile/dashboard" },
  { icon: BarChart, label: "Campaigns", href: "/profile/campaigns" },
  { icon: MessageSquare, label: "Messages", href: "/profile/messages" },
  { icon: FileText, label: "Applications", href: "/profile/applications" },
  { icon: Briefcase, label: "Proposals", href: "/profile/proposals" },
  { icon: Settings, label: "Deals", href: "/profile/deals" },
  { icon: Calendar, label: "My Schedule", href: "/profile/schedule" },
]

const toolsMenuItems = [
  { icon: Users, label: "Manage Profiles", href: "/profile/manage" },
  { icon: Compass, label: "Explore OS", href: "/profile/explore" },
]

export function ProfileSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-64 space-y-8"
    >
      <div>
        <h2 className="px-4 text-xs font-semibold text-slate-500 mb-2">MAIN</h2>
        <nav className="space-y-1">
          {mainMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <h2 className="px-4 text-xs font-semibold text-slate-500 mb-2">TOOLS</h2>
        <nav className="space-y-1">
          {toolsMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
