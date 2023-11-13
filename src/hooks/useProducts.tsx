import { DashboardContext } from '@contexts/dashboard-context'
import productsList from '@data/products-list.json'
import { Product } from '@shared/types'
import { useCallback, useContext, useMemo } from 'react'

const useProducts = () => {
  const { products, categories, setProducts, setCategories } = useContext(DashboardContext)

  const fetchProductAndCategories = useCallback(() => {
    setTimeout(() => {
      setCategories(['electronics', 'jewelery', "men's clothing", "women's clothing"])
      setProducts(productsList)
    }, 100)
  }, [setCategories, setProducts])

  const uploadProduct = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target?.files?.[0]
      const fileReader = new FileReader()
      if (file) {
        fileReader.onload = function (event: any) {
          const data = event.target.result
          const list: Product[] = [...products]
          const parsed: Product[] = JSON.parse(data)
          parsed.map((product) => list.push({ ...product, id: list[list.length - 1].id + 1 }))
          setProducts(list)
        }
        fileReader.readAsText(file)
      }
    },
    [products, setProducts]
  )

  const totalProducts = useMemo(() => products.length, [products])
  const totalCategories = useMemo(() => categories.length, [categories])

  return {
    products,
    totalCategories,
    totalProducts,
    totalSales: 25,
    fetchProductAndCategories,
    uploadProduct,
  }
}

export default useProducts
