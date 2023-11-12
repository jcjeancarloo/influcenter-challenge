import { DashboardContext } from '@contexts/dashboard-context'
import { api } from '@services/fake-store-api'
import { useCallback, useContext, useMemo } from 'react'

const useProducts = () => {
  const { products, categories, setProducts, setCategories } = useContext(DashboardContext)

  const fetchProductAndCategories = useCallback(async () => {
    try {
      const fetchCategories = async () => {
        const { data } = await api.get('/products/categories')
        return data
      }

      const fetchProducts = async () => {
        const { data } = await api.get('/products?limit=20')
        return data
      }
      const [categories, products] = await Promise.all([fetchCategories(), fetchProducts()])

      setCategories(categories)
      setProducts(products)
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }, [setCategories, setProducts])

  const totalProducts = useMemo(() => products.length, [products])
  const totalCategories = useMemo(() => categories.length, [categories])

  return {
    products,
    totalCategories,
    totalProducts,
    fetchProductAndCategories,
  }
}

export default useProducts
