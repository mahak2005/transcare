"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "./calender"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

interface BookingModalProps {
  therapist: {
    name: string
    specialty: string
  }
  onClose: () => void
}


export function BookingModal({ therapist, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState("")
  const [email, setEmail] = useState("")
  const [purpose, setPurpose] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    setStep(3) // Move to success step

    // Close the modal after 3 seconds
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Session with {therapist.name}</DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block font-medium">Select Date</label>
              {/* <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                // disabled={(date) => date < new Date()}
                disabled={(date: Date) => date < new Date()}

              /> */}
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                // disabled={(date) => date < new Date()}
                // disabled={(date: Date) => date < new Date()}
                
              />

            </div>

            {date && (
              <div className="space-y-2">
                <label className="block font-medium">Available Times</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((t) => (
                    <Button
                      key={t}
                      variant={time === t ? "default" : "outline"}
                      onClick={() => setTime(t)}
                      className="w-full"
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {date && time && (
              <Button onClick={() => setStep(2)} className="w-full">
                Next
              </Button>
            )}
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block font-medium">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">Purpose of Visit</label>
              <Textarea
                placeholder="Please briefly describe why you'd like to schedule this session..."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Appointment Details</h3>
              <p className="text-sm text-gray-600">
                {date && format(date, "MMMM do, yyyy")} at {time}
              </p>
            </div>

            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
        )}

        {step === 3 && (
          <div className="text-center space-y-4 py-6">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Appointment Confirmed!</h3>
              <p className="text-gray-600">A meet invite has been sent to your email.</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

