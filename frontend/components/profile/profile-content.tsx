

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function ProfileContent() {
  const [moods, setMoods] = useState<string[]>([])
  const [newMood, setNewMood] = useState("")

  const [medicalInfo, setMedicalInfo] = useState<string[]>([])
  const [newMedicalInfo, setNewMedicalInfo] = useState("")

  const [prescriptions, setPrescriptions] = useState<{ name: string; url: string }[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  
  // Add new mood
  const handleAddMood = () => {
    if (newMood.trim() !== "") {
      setMoods([...moods, newMood])
      setNewMood("")
    }
  }

  // Add new medical info
  const handleAddMedicalInfo = () => {
    if (newMedicalInfo.trim() !== "") {
      setMedicalInfo([...medicalInfo, newMedicalInfo])
      setNewMedicalInfo("")
    }
  }



  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file)
      setPrescriptions([...prescriptions, { name: file.name, url }])
      setSelectedFile(null)
    }
  }

  return (
    <div className="flex-1 space-y-6 ">
      {/* MOOD TRACKER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">MOOD TRACKER</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                ADD
              </Button>
            </DialogTrigger>
            <DialogContent>
              <h3 className="text-lg font-semibold mb-2">Add Mood Entry</h3>
              <input
                type="text"
                value={newMood}
                onChange={(e) => setNewMood(e.target.value)}
                placeholder="Enter your current mood..."
                className="w-full py-2 px-3 border rounded-lg"
              />
              <Button className="mt-3 w-full" onClick={handleAddMood}>
                Save Mood
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Display stored moods */}
        {moods.length > 0 ? (
          <ul className="space-y-2">
            {moods.map((mood, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-lg">
                {mood}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No moods added yet.</p>
        )}
      </motion.section>

      {/* MEDICAL INFO & PRESCRIPTIONS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* MEDICAL INFO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">MEDICAL INFO</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                  ADD
                </Button>
              </DialogTrigger>
              <DialogContent>
                <h3 className="text-lg font-semibold mb-2">Add Medical Info</h3>
                <input
                  type="text"
                  value={newMedicalInfo}
                  onChange={(e) => setNewMedicalInfo(e.target.value)}
                  placeholder="Enter medical info..."
                  className="w-full py-2 px-3 border rounded-lg"
                />
                <Button className="mt-3 w-full" onClick={handleAddMedicalInfo}>
                  Save
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          {/* Display stored medical info */}
          {medicalInfo.length > 0 ? (
            <ul className="space-y-2">
              {medicalInfo.map((info, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded-lg">
                  {info}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No medical info added yet.</p>
          )}
        </motion.section>

        {/* PRESCRIPTION */}
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">PRESCRIPTION</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">ADD</Button>
            </DialogTrigger>
            <DialogContent>
              <h3 className="text-lg font-semibold mb-2">Upload Prescription</h3>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="w-full p-2 border rounded-lg"
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Display Uploaded Prescriptions */}
        {prescriptions.length > 0 ? (
          <ul className="space-y-2">
            {prescriptions.map((file, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-lg flex justify-between items-center">
                <span>{file.name}</span>
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View PDF
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No prescriptions added yet.</p>
        )}
      </motion.section>
      </div>
    </div>
  )
}

