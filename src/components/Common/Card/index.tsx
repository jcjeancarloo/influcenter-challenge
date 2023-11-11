import React from 'react'

type CardProps = {
  height?: string
  width?: string
  children: React.ReactNode
}

const Card = ({ width, height, children }: CardProps) => {
  return <div className={`${width} ${height} rounded-lg bg-card p-8`}>{children}</div>
}

export default Card
