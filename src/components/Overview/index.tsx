import Donut from '@components/Charts/Donut'
import Pie from '@components/Charts/Pie'
import Card from '@components/Common/Card'
import Table from '@components/Table'
import { motion } from 'framer-motion'

import { Product, User } from '@shared/types'

type OverviewProps = {
  users: Omit<User, 'address' | 'name'>[]
  products: Product[]
  chartData: {
    totalUsers: number
    totalProducts: number
    totalCategories: number
    totalSales: number
  }
  uploadUser: (data: any) => void
  uploadProduct: (data: any) => void
}

const Overview = ({ users, products, uploadUser, uploadProduct, chartData }: OverviewProps) => {
  const { totalUsers, totalProducts, totalCategories, totalSales } = chartData
  const donutData = { series: [totalUsers, totalProducts, totalCategories, totalSales] }
  const pieData = { series: [totalUsers, totalSales] }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 1 }}
      className="w-full md:h-[1024px] h-full flex flex-col md:flex-row gap-x-4 gap-y-4"
    >
      <div className="h-full flex flex-col gap-y-4 md:w-[70%] w-full">
        <Card width="w-full" height="md:h-1/2 h-full">
          <Table data={users} isUserTable handleUpload={uploadUser} />
        </Card>
        <Card width="w-full" height="md:h-1/2 h-full">
          <Table data={products} isUserTable={false} handleUpload={uploadProduct} />
        </Card>
      </div>
      <div className="h-full flex flex-col gap-y-4 md:w-[30%] w-full">
        <Card height="md:h-1/2 h-full">
          <Pie data={pieData} />
        </Card>
        <Card height="md:h-1/2 h-full">
          <Donut data={donutData} />
        </Card>
      </div>
    </motion.div>
  )
}

export default Overview
