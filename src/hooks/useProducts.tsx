import { DashboardContext } from '@contexts/dashboard-context'
import { api } from '@services/fake-store-api'
import { useCallback, useContext, useMemo } from 'react'

const useProducts = () => {
  const { products, setProducts } = useContext(DashboardContext)

  const fetchProducts = useCallback(async () => {
    try {
      // setLoadingUsers(true)
      const { data } = await api.get('/products?limit=20')
      setProducts(data)
      // setLoadingUsers(false)
    } catch (error) {
      console.log(error)
    }
  }, [setProducts])

  const totalProducts = useMemo(() => products.length, [products])

  return {
    products,
    totalProducts,
    fetchProducts,
  }
}

export default useProducts
