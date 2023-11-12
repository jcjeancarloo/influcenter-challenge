'use client'

import { Product, User } from '@shared/types'
import { ReactNode, createContext, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

type DashboardContextData = {
  users: User[]
  loadingUsers: boolean
  products: Product[]
  setUsers: (users: User[]) => void
  setLoadingUsers: (loading: boolean) => void
  setProducts: (products: Product[]) => void
}

export const DashboardContext = createContext({} as DashboardContextData)

export function DashboardContextProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<User[]>([])
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])

  return (
    <DashboardContext.Provider
      value={{ users, loadingUsers, products, setUsers, setLoadingUsers, setProducts }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
