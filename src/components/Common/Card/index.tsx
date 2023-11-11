import React from 'react'

type CardProps = {
  height?: string
  width?: string
  children: React.ReactNode
}

const Card = ({ width, height, children }: CardProps) => {
  return (
    <div
      className={`${width} ${height} flex flex-col items-center justify-center rounded-lg bg-card text-green-500 p-8`}
    >
      {children}
    </div>
  )
}

export default Card
