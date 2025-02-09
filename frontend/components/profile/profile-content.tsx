"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

export function ProfileContent() {
  const [moods, setMoods] = useState<string[]>([])
  const [newMood, setNewMood] = useState("")

  const [medicalInfo, setMedicalInfo] = useState<string[]>([])
  const [newMedicalInfo, setNewMedicalInfo] = useState("")

  const [prescriptions, setPrescriptions] = useState<{ name: string; url: string }[]>([])

  const [appointments, setAppointments] = useState<{ date: string; time: string; doctor: string }[]>([])
  const [newAppointment, setNewAppointment] = useState({ date: "", time: "", doctor: "" })

  const handleAddMood = () => {
    if (newMood.trim() !== "") {
      setMoods([...moods, newMood])
      setNewMood("")
    }
  }

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
    }
  }

  const handleAddAppointment = () => {
    const { date, time, doctor } = newAppointment
    if (date && time && doctor) {
      setAppointments([...appointments, newAppointment])
      setNewAppointment({ date: "", time: "", doctor: "" })
    }
  }

  return (
    <div className="flex-1 space-y-6 p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Health Dashboard</h1>

      {/* MOOD TRACKER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Mood Tracker</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Mood</Button>
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

        {moods.length > 0 ? (
          <ul className="space-y-2">
            {moods.map((mood, index) => (
              <Card key={index}>
                <CardContent className="p-3">{mood}</CardContent>
              </Card>
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
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Medical Information</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Add Info</Button>
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
                  Save Info
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          {medicalInfo.length > 0 ? (
            <ul className="space-y-2">
              {medicalInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-3">{info}</CardContent>
                </Card>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No medical info added yet.</p>
          )}
        </motion.section>

        {/* PRESCRIPTIONS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Prescriptions</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Upload PDF</Button>
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

          {prescriptions.length > 0 ? (
            <ul className="space-y-2">
              {prescriptions.map((file, index) => (
                <Card key={index}>
                  <CardContent className="p-3 flex justify-between items-center">
                    <span>{file.name}</span>
                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View PDF
                    </a>
                  </CardContent>
                </Card>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No prescriptions added yet.</p>
          )}
        </motion.section>
      </div>

      {/* APPOINTMENT SCHEDULER */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Schedule</Button>
            </DialogTrigger>
            <DialogContent>
              <h3 className="text-lg font-semibold mb-2">Schedule Appointment</h3>
              <input
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                className="w-full py-2 px-3 border rounded-lg mb-2"
              />
              <input
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                className="w-full py-2 px-3 border rounded-lg mb-2"
              />
              <input
                type="text"
                value={newAppointment.doctor}
                onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })}
                placeholder="Doctor's name..."
                className="w-full py-2 px-3 border rounded-lg"
              />
              <Button className="mt-3 w-full" onClick={handleAddAppointment}>
                Save Appointment
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {appointments.length > 0 ? (
          <ul className="space-y-2">
            {appointments.map((appt, index) => (
              <Card key={index}>
                <CardContent className="p-3">
                  <p className="font-medium">{appt.doctor}</p>
                  <p>{appt.date} at {appt.time}</p>
                </CardContent>
              </Card>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No appointments scheduled yet.</p>
        )}
      </motion.section>
    </div>
  )
}