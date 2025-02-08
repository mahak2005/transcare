"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ProfileSidebar } from "@/components/profile/profile-sidebar";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="1 flex ">
        {/* Sidebar (Hidden on mobile, visible on large screens) */}
        <div className={`fixed lg:relative z-30 bg-white transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:w-64`}>
          <ProfileSidebar />
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <div className="fixed lg:hidden top-20 left-4 z-40">
          <Button variant="outline" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Main Content Area */}
        <motion.div 
          className="flex-1 p-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
