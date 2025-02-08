"use client"

import { useState } from "react"
import { TimerIcon as Timeline, Smile, ThermometerSun } from "lucide-react"

const milestones = [
  { id: 1, title: "Started HRT", date: "2023-01-01" },
  { id: 2, title: "First Dose Adjustment", date: "2023-03-15" },
  { id: 3, title: "Three-Month Check-Up", date: "2023-04-01" },
  { id: 4, title: "Six-Month Check-Up", date: "2023-07-01" },
]

export default function ProgressTracker() {
  const [mood, setMood] = useState("")
  const [physicalChanges, setPhysicalChanges] = useState("")
  const [sideEffects, setSideEffects] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ mood, physicalChanges, sideEffects })
    alert("Symptom tracking data saved locally")
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Timeline className="mr-2" /> Progress Tracker
      </h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Milestones</h3>
        <ul className="space-y-2">
          {milestones.map((milestone) => (
            <li key={milestone.id} className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm">
                {milestone.title} - {milestone.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-2">Symptom Tracker</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="mood" className="block text-sm font-medium text-gray-700 mb-1">
              <Smile className="inline mr-1 w-4 h-4" /> Mood
            </label>
            <input
              type="text"
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="How are you feeling today?"
            />
          </div>
          <div>
            <label htmlFor="physicalChanges" className="block text-sm font-medium text-gray-700 mb-1">
              <ThermometerSun className="inline mr-1 w-4 h-4" /> Physical Changes
            </label>
            <textarea
              id="physicalChanges"
              value={physicalChanges}
              onChange={(e) => setPhysicalChanges(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Notice any physical changes?"
              rows={3}
            ></textarea>
          </div>
          <div>
            <label htmlFor="sideEffects" className="block text-sm font-medium text-gray-700 mb-1">
              Side Effects
            </label>
            <textarea
              id="sideEffects"
              value={sideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Any side effects to report?"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Symptoms
          </button>
        </form>
      </div>
    </div>
  )
}

