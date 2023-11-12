import Card from '@components/Common/Card'
import { FaUser } from 'react-icons/fa'

const Item = () => {
  return (
    <Card width="md:w-1/4">
      <div className="flex flex-row gap-y-4 w-full gap-x-8 items-center">
        <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full flex flex-col items-center justify-center border border-indigo-700">
          <FaUser className="text-xl md:text-4xl text-indigo-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">R$ 25.500,00</span>
          <span className="text-slate-500 font-semibold">Today sales</span>
        </div>
      </div>
    </Card>
  )
}

export default Item
