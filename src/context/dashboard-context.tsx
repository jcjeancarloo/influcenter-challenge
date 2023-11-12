'use client'

import { ReactNode, createContext, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type User = {
  id: number
  email: string
  name: {
    firstname: string
    lastname: string
  }
}

type DashboardContextData = {
  users: User[]
  products: Product[]
  setUsers: (users: User[]) => void
  setProducts: (products: Product[]) => void
}

export const DashboardContext = createContext({} as DashboardContextData)

export function DashboardContextProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [products, setProducts] = useState<Product[]>([])

  return (
    <DashboardContext.Provider value={{ users, products, setUsers, setProducts }}>
      {children}
    </DashboardContext.Provider>
  )
}
