"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
// import { Camera, Plus } from "lucide-react"

export function ProfileContent() {
  return (
    <div className="flex-1 space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">MOOD TRACKER</h2>
          <Button variant="ghost" size="sm">
            EDIT
          </Button>
        </div>
        <button className="w-full py-3 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
          + Add Description
        </button>
      </motion.section>

      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-lg shadow-sm p-6"
      > */}
        {/* <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">NOTES</h2>
          <Button variant="ghost" size="sm">
            EDIT
          </Button>
        </div> */}
        {/* <button className="w-full py-3 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
          + Add Interests
        </button> */}
      {/* </motion.section> */}

      <div className="grid md:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">MEDICAL INFO</h2>
            <Button variant="ghost" size="sm">
              ADD
            </Button>
          </div>
          <button className="w-full py-3 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            + Add Info
          </button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">PRESCRIPTION</h2>
            <Button variant="ghost" size="sm">
              ADD
            </Button>
          </div>
          <div className="aspect-square border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-slate-400" />
              <span className="text-sm text-slate-500">Add Photos</span>
            </div>
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">REFERENCES</h2>
          <Button variant="ghost" size="sm">
            EDIT
          </Button>
        </div>
        <button className="w-full py-3 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
          + Add References
        </button>
      </motion.section>
    </div>
  )
}
