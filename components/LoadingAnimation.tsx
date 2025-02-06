import type React from "react"
import { motion } from "framer-motion"

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <motion.div
        className="w-16 h-16 border-4 border-[#0B4F6C] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4 text-lg font-semibold text-[#0B4F6C]"
      >
        Loading leaderboard...
      </motion.p>
    </div>
  )
}

export default LoadingAnimation

