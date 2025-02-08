// "use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
// import {
//   LayoutDashboard,
//   MessageSquare,
//   FileText,
//   BarChart,
// } from "lucide-react"

// const mainMenuItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/profile" },
//   { icon: BarChart, label: "Mood", href: "/profile/campaigns" },
//   { icon: MessageSquare, label: "Notes", href: "/profile/messages" },
//   { icon: FileText, label: "HRT", href: "/profile/applications" },
  
// ]


// export function ProfileSidebar() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full lg:w-64 space-y-8"
//     >
//       <div>
//         <h2 className="px-4 text-xs font-semibold text-slate-500 mb-2">MAIN</h2>
//         <nav className="space-y-1">
//           {mainMenuItems.map((item) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>

     
//     </motion.div>
//   )
// }


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, FileText, BarChart } from "lucide-react";

const mainMenuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/profile" },
  { icon: BarChart, label: "Mood", href: "/profile/campaigns" },
  { icon: MessageSquare, label: "Notes", href: "/profile/messages" },
  { icon: FileText, label: "HRT", href: "/profile/applications" },
];

export function ProfileSidebar() {
  const [username, setUsername] = useState("Mahak Mahak"); // Replace with actual user data

  useEffect(() => {
    // Fetch user data from backend or local storage here
    // Example: setUsername(fetchUserName());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-64 space-y-8 bg-white p-4 rounded-lg shadow-md"
    >
      {/* Username Display */}
      <div className="text-center py-4 border-b">
        <h1 className="text-lg font-semibold text-gray-700">{username}</h1>
      </div>

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
    </motion.div>
  );
}
