import { DashboardContext } from '@contexts/dashboard-context'
import productsList from '@data/products-list.json'
import { useCallback, useContext, useMemo } from 'react'

const useProducts = () => {
  const { products, categories, setProducts, setCategories } = useContext(DashboardContext)

  const fetchProductAndCategories = useCallback(() => {
    setTimeout(() => {
      setCategories(['electronics', 'jewelery', "men's clothing", "women's clothing"])
      setProducts(productsList)
    }, 100)
  }, [setCategories, setProducts])

  const totalProducts = useMemo(() => products.length, [products])
  const totalCategories = useMemo(() => categories.length, [categories])

  return {
    products,
    totalCategories,
    totalProducts,
    totalSales: 25,
    fetchProductAndCategories,
  }
}

export default useProducts
