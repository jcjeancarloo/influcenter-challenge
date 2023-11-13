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
  sales: number
  setUsers: (users: User[]) => void
  setProducts: (products: Product[]) => void
  setCategories: (categories: string[]) => void
  // setSales: (value: number) => void

  setSales: (cb: (value: number) => number) => void
}

export const DashboardContext = createContext({} as DashboardContextData)

export function DashboardContextProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [sales, setSales] = useState<number>(25)

  return (
    <DashboardContext.Provider
      value={{
        users,
        products,
        categories,
        sales,
        setUsers,
        setProducts,
        setCategories,
        setSales,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
