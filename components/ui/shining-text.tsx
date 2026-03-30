"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface ShiningTextProps {
  text: string
  className?: string
  duration?: number
  repeatDelay?: number
}

export function ShiningText({ text, className, duration = 6, repeatDelay = 0 }: ShiningTextProps) {
  return (
    <motion.span
      className={`bg-[linear-gradient(110deg,#67b4c1,35%,#fff,50%,#67b4c1,75%,#67b4c1)] bg-[length:200%_100%] bg-clip-text text-transparent ${className ?? ""}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
        repeatDelay,
      }}
    >
      {text}
    </motion.span>
  )
}
