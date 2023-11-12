import Card from '@components/Common/Card'
import { FaUser } from 'react-icons/fa'

type ItemProps = {
  count: number
  description: string
}
const Item = ({ count, description }: ItemProps) => {
  return (
    <Card width="md:w-1/4">
      <div className="flex flex-row gap-y-4 w-full gap-x-8 items-center">
        <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex flex-col items-center justify-center border border-indigo-700">
          <FaUser className="text-xl md:text-4xl text-indigo-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">{count}</span>
          <span className="text-slate-500 font-bold">{description}</span>
        </div>
      </div>
    </Card>
  )
}

export default Item
