import { motion } from 'framer-motion'
import React from 'react'

type CardProps = {
  height?: string
  width?: string
  motionDelay?: number
  children: React.ReactNode
}

const Card = ({ width, height, motionDelay, children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: motionDelay }}
      className={`${width} ${height} rounded-lg bg-card p-8 text-white`}
    >
      {children}
    </motion.div>
  )
}

export default Card
