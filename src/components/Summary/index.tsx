import { useTranslation } from 'react-i18next'
import { FaShoppingBasket, FaShoppingCart, FaTags, FaUser } from 'react-icons/fa'
import Item from './Item'

type SummaryProps = {
  totalUsers: number
  totalProducts: number
  totalCategories: number
  totalSales: number
  handleAddSale: () => void
}
const Summary = ({
  totalUsers,
  totalProducts,
  totalCategories,
  totalSales,
  handleAddSale,
}: SummaryProps) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item count={totalUsers} description={t('summary.users')} color="indigo" motionDelay={0.1}>
        <FaUser className="text-xl xl:text-4xl text-indigo-500" />
      </Item>
      <Item count={totalProducts} description={t('summary.products')} color="red" motionDelay={0.3}>
        <FaShoppingBasket className="text-xl xl:text-4xl text-red-500" />
      </Item>
      <Item
        count={totalCategories}
        description={t('summary.categories')}
        color="emerald"
        motionDelay={0.5}
      >
        <FaTags className="text-xl xl:text-4xl text-emerald-500" />
      </Item>
      <Item
        count={totalSales}
        description={t('summary.sales')}
        color="yellow"
        isSale
        handleAddSale={handleAddSale}
        motionDelay={0.8}
      >
        <FaShoppingCart className="text-xl xl:text-4xl text-yellow-500" />
      </Item>
    </div>
  )
}

export default Summary
