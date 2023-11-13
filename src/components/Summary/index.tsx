import { FaShoppingBasket, FaShoppingCart, FaTags, FaUser } from 'react-icons/fa'
import Item from './Item'

type SummaryProps = {
  totalUsers: number
  totalProducts: number
  totalCategories: number
}
const Summary = ({ totalUsers, totalProducts, totalCategories }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item count={totalUsers} description="Usuários" color="indigo">
        <FaUser className="text-xl md:text-4xl text-indigo-500" />
      </Item>
      <Item count={totalProducts} description="Produtos" color="red">
        <FaShoppingBasket className="text-xl md:text-4xl text-red-500" />
      </Item>
      <Item count={totalCategories} description="Categories" color="emerald">
        <FaTags className="text-xl md:text-4xl text-emerald-500" />
      </Item>
      <Item
        count={Math.floor(Math.random() * (100 - 10 + 1)) + 10}
        description="Vendas"
        color="yellow"
      >
        <FaShoppingCart className="text-xl md:text-4xl text-yellow-500" />
      </Item>
    </div>
  )
}

export default Summary
