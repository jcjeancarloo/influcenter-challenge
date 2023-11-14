import { DashboardContext } from '@contexts/dashboard-context'
import productsList from '@data/products-list.json'
import { Product } from '@shared/types'
import { useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

const useProducts = () => {
  const { products, categories, sales, setSales, setProducts, setCategories } =
    useContext(DashboardContext)

  const { t } = useTranslation()

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
          if (!parsed[0].price)
            return toast.error(`${t('common.invalidFile')}`, { theme: 'colored' })
          parsed.map((product) => list.push({ ...product, id: list[list.length - 1].id + 1 }))
          setProducts(list)
          toast.success(`${t('common.successItem')}`, { theme: 'colored' })
        }
        fileReader.readAsText(file)
      }
    },
    [products, setProducts, t]
  )

  const handleAddSale = () => setSales((sales) => sales + 1)

  const totalProducts = useMemo(() => products.length, [products])
  const totalCategories = useMemo(() => categories.length, [categories])

  return {
    products,
    totalCategories,
    totalProducts,
    totalSales: sales,
    fetchProductAndCategories,
    uploadProduct,
    handleAddSale,
  }
}

export default useProducts
