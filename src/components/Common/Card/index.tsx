import React from 'react'

type CardProps = {
  height?: string
  width?: string
  children: React.ReactNode
  className?: string
}

const Card = ({ width, height, children, className }: CardProps) => {
  return (
    <div
      className={`${width} ${height} rounded-lg ${
        className ? className : 'bg-card'
      } p-8 text-white`}
    >
      {children}
    </div>
  )
}

export default Card
