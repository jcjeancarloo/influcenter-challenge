/* eslint-disable react-refresh/only-export-components */
import Card from '@components/Common/Card'
import { memo } from 'react'
import { FaPlus } from 'react-icons/fa'

type ItemProps = {
  count: number
  description: string
  children: React.ReactNode
  color: string
  isSale?: boolean
  handleAddSale?: () => void
}

const Item = ({ count, description, color, isSale, handleAddSale, children }: ItemProps) => {
  const colors = {
    indigo: 'border-indigo-700',
    yellow: 'border-yellow-700',
    red: 'border-red-700',
    emerald: 'border-emerald-700',
  }
  return (
    <Card width="md:w-1/4">
      <div className="flex flex-row gap-y-4 w-full gap-x-8 items-center">
        <div
          className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex flex-col items-center justify-center border ${
            colors[color as keyof typeof colors]
          }`}
        >
          {children}
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">{count}</span>
          <span className="text-gray-500 font-bold">{description}</span>
        </div>
        {isSale && handleAddSale && (
          <span
            onClick={handleAddSale}
            className="flex flex-row items-center gap-x-2 text-gray-500 hover:text-gray-200 transition cursor-pointer font-semibold"
          >
            <FaPlus className="text-md" /> Adicionar venda
          </span>
        )}
      </div>
    </Card>
  )
}

export default memo(Item)
