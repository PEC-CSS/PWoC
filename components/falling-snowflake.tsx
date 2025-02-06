"use client"

import { motion } from "framer-motion"

export function FallingSnowflake() {
  return (
    <motion.div
      className="absolute text-4xl text-white opacity-70 pointer-events-none"
      initial={{ y: -20, x: Math.random() * 100 - 50 }}
      animate={{
        y: "100vh",
        x: Math.random() * 100 - 50,
        rotate: 360,
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      ❄
    </motion.div>
  )
}

