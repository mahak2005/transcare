"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export function Hero() {
  const controls = useAnimation()
  const [text, setText] = useState("")
  const fullText = "Empowering Trans Healthcare Navigation"

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })

    let currentText = ""
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex]
        setText(currentText)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] via-[#00ff00] to-[#0000ff]">
            {text}
          </span>
        </h1>
        <p className="text-lg text-gray-600 md:text-xl">
          Your comprehensive platform for accessing inclusive healthcare services, telemedicine, and community support.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>

      <AppPreview />
    </div>
  )
}

function AppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative aspect-square max-w-md mx-auto">
        <Image
          src="/placeholder.svg?height=500&width=500"
          alt="TransCare App Preview"
          width={500}
          height={500}
          className="object-contain"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: `hsl(${i * 45}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

