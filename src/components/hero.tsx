"use client"
/*
Made with ❤️ by Ashutosh Shukla
Student Number - 8960611 
*/
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link" // Import Link for navigation
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { TypewriterEffect } from "./ui/typewriter-effect"
import Image from "next/image"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
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
      <div className="absolute inset-0 w-full h-full bg-black/60 z-10" />

      {isMobile ? (
        <Image
          src="/mobile.png"
          alt="Mobile Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      ) : (
        <>
          <div className="absolute inset-0 w-[68%] h-[80%] mx-auto my-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://streamable.com/e/i9igpm?autoplay=1&muted=1"
              allow="fullscreen;autoplay"
              allowFullScreen
              title="F1 Racing Video"
              className="w-fit h-full"
              style={{
                border: "none",
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                background: "black",
              }}
            />
          </div>
        </>
      )}

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
            <Link href="https://www.formula1.com/en/results/2025/races" passHref>
              <Button size="lg" className="bg-transparent border hover:bg-red-700 text-white">
                Latest Results
              </Button>
            </Link>
            <Link href="https://www.formula1.com/en/video" passHref>
              <Button size="lg" className="bg-transparent border hover:bg-red-700 text-white">
                Watch Highligts
              </Button>
            </Link>
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