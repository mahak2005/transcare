
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// import { Plus } from "lucide-react"

export function ProfileInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-80 space-y-6"
    >
      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">PRIMARY INFO</h2>
          <Button variant="ghost" size="sm">
            EDIT
          </Button>
        </div>
        <div className="space-y-2">
          <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            + Add Birthdate
          </button>
          <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            + Add Gender
          </button>
          <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            + Add Location
          </button>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">MORE INFO</h2>
          <Button variant="ghost" size="sm">
            EDIT
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-slate-600">PROFILE STATUS</h3>
            <p className="text-sm text-slate-500">Professional</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-2">TEAM</h3>
            <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              + Add Team
            </button>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-600 mb-2">COLLEGE</h3>
            <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              + Add School
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
