'use client'

import { Product, User } from '@shared/types'
import { ReactNode, createContext, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

type DashboardContextData = {
  users: User[]
  products: Product[]
  categories: string[]
  setUsers: (users: User[]) => void
  setProducts: (products: Product[]) => void
  setCategories: (categories: string[]) => void
}

export const DashboardContext = createContext({} as DashboardContextData)

export function DashboardContextProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])

  return (
    <DashboardContext.Provider
      value={{
        users,
        products,
        categories,
        setUsers,
        setProducts,
        setCategories,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
