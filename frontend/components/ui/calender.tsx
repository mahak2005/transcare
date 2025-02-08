
"use client"
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      required 
    />
  )

}
