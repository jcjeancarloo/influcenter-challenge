import { useTranslation } from 'react-i18next'
import { FaShoppingBasket, FaShoppingCart, FaTags, FaUser } from 'react-icons/fa'
import Item from './Item'

type SummaryProps = {
  totalUsers: number
  totalProducts: number
  totalCategories: number
}
const Summary = ({ totalUsers, totalProducts, totalCategories }: SummaryProps) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item count={totalUsers} description={t('summary.users')} color="indigo">
        <FaUser className="text-xl md:text-4xl text-indigo-500" />
      </Item>
      <Item count={totalProducts} description={t('summary.products')} color="red">
        <FaShoppingBasket className="text-xl md:text-4xl text-red-500" />
      </Item>
      <Item count={totalCategories} description={t('summary.categories')} color="emerald">
        <FaTags className="text-xl md:text-4xl text-emerald-500" />
      </Item>
      <Item
        count={Math.floor(Math.random() * (100 - 10 + 1)) + 10}
        description={t('summary.sales')}
        color="yellow"
      >
        <FaShoppingCart className="text-xl md:text-4xl text-yellow-500" />
      </Item>
    </div>
  )
}

export default Summary
