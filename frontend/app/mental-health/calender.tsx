"use client"
import * as React from "react"
import { DayPicker } from "react-day-picker"
import type { DayPickerSingleProps } from "react-day-picker"
import "react-day-picker/dist/style.css"

// Extend DayPickerSingleProps to include 'disabled'
interface CalendarProps extends DayPickerSingleProps {}

export function Calendar({ ...props }: CalendarProps) {
  return (
    <DayPicker
      className="rounded-md border"
      {...props}  // Forward all props to DayPicker
    />
  )
}
