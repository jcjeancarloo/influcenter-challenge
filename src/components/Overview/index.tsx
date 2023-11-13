import Area from '@components/Charts/Area'
import Donut from '@components/Charts/Donut'
import Card from '@components/Common/Card'
import Table from '@components/Table'

import { Product, User } from '@shared/types'

type OverviewProps = {
  users: Omit<User, 'address' | 'name'>[]
  products: Product[]
  loading: boolean
  chartData: {
    totalUsers: number
    totalProducts: number
    totalCategories: number
    totalSales: number
  }
  uploadUser: (data: any) => void
}

const areaData = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    // {
    //   name: 'series2',
    //   data: [11, 32, 45, 32, 34, 52, 41],
    // },
  ],
}

const Overview = ({ users, products, loading, uploadUser, chartData }: OverviewProps) => {
  const { totalUsers, totalProducts, totalCategories, totalSales } = chartData
  const donutData = { series: [totalUsers, totalProducts, totalCategories, totalSales] }

  return (
    <div className="w-full md:h-[1024px] h-full flex flex-col md:flex-row gap-x-4 gap-y-4">
      <div className="h-full flex flex-col gap-y-4 md:w-[70%] w-full">
        <Card width="w-full" height="md:h-1/2 h-full">
          <Table data={users} isUserTable handleUpload={uploadUser} />
        </Card>
        <Card width="w-full" height="md:h-1/2 h-full">
          <Table data={products} isUserTable={false} handleUpload={uploadUser} />
        </Card>
      </div>
      <div className="h-full flex flex-col gap-y-4 md:w-[30%] w-full">
        <Card height="md:h-1/2 h-full">
          <h1 className="text-2xl">Grafico 1</h1>
          <Area data={areaData} />
        </Card>
        <Card height="md:h-1/2 h-full">
          <Donut data={donutData} />
        </Card>
      </div>
    </div>
  )
}

export default Overview
