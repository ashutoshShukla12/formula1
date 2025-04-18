"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { TypewriterEffect } from "./ui/typewriter-effect"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const words = [
    { text: "Speed." },
    { text: "Precision." },
    { text: "Engineering." },
    { text: "Passion." },
    { text: "Formula", className: "text-red-500 dark:text-red-500" },
    { text: "One.", className: "text-red-500 dark:text-red-500" },
  ]

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black/40 z-10" />
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <TypewriterEffect words={words} className="text-4xl sm:text-5xl md:text-6xl font-bold" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Explore the pinnacle of motorsport with the top teams battling for glory on the world&apos;s most challenging
            circuits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Latest Results
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Watch Highlights
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce text-white"
            onClick={() => {
              document.getElementById("teams")?.scrollIntoView({ behavior: "smooth" })
            }}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
