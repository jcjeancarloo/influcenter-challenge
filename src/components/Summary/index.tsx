import { FaShoppingBasket, FaUser } from 'react-icons/fa'
import Item from './Item'

type SummaryProps = {
  totalUsers: number
  totalProducts: number
}
const Summary = ({ totalUsers, totalProducts }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full">
      <Item count={totalUsers} description="Current users on platform" color="indigo">
        <FaUser className="text-xl md:text-4xl text-indigo-500" />
      </Item>
      <Item count={totalProducts} description="Current products on platform" color="orange">
        <FaShoppingBasket className="text-xl md:text-4xl text-orange-500" />
      </Item>
      <Item />
      <Item />
    </div>
  )
}

export default Summary
