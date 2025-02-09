"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, delay = 0, speed = 50 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  // const controls = useAnimation()

  useEffect(() => {
    let currentText = ""
    let currentIndex = 0

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex]
          setDisplayText(currentText)
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] via-[#00ff00] to-[#0000ff]"
    >
      {displayText}
    </motion.span>
  )
}

