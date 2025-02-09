"use client"
import AppointmentScheduler from "@/components/hrt/AppointmentScheduler"
import VideoConsultation from "@/components/hrt/VideoConsultation"
import PrescriptionManagement from "@/components/hrt/PrescriptionManagement"
import MedicationDeliveryTracking from "@/components/hrt/MedicationDeliveryTracking"
import ProgressTracker from "@/components/hrt/ProgressTracker"
import { Navbar } from "@/components/navigation/navbar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      <h1 className="text-3xl text-center font-bold mb-8 text-purple-600 pt-8">TransCare: HRT Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppointmentScheduler />
        {/* <VideoConsultation /> */}
        <PrescriptionManagement />
        {/* <MedicationDeliveryTracking /> */}
        <ProgressTracker />
      </div>
    </div>
  )
}

