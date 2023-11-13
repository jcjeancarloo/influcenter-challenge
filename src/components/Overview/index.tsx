import Area from '@components/Charts/Area'
import Donut from '@components/Charts/Donut'
import Card from '@components/Common/Card'
import Title from '@components/Common/Title'
import Table from '@components/Table'

import { Product, User } from '@shared/types'

import { useTranslation } from 'react-i18next'

type OverviewProps = {
  users: Omit<User, 'address' | 'name'>[]
  products: Product[]
  loading: boolean
}

const donutData = { series: [44, 55, 41, 17, 15] }
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

const Overview = ({ users, products, loading }: OverviewProps) => {
  const { t } = useTranslation()
  return (
    <div className="w-full md:h-[1024px] h-full flex flex-col md:flex-row gap-x-4 gap-y-4">
      <div className="h-full flex flex-col gap-y-4 md:w-[70%] w-full">
        <Card width="w-full" height="md:h-1/2 h-full">
          <div className="flex flex-col gap-y-4 h-full">
            <Title name={t('overview.users')} />
            <Table data={users} isUserTable />
          </div>
        </Card>
        <Card width="w-full" height="md:h-1/2 h-full">
          <div className="flex flex-col gap-y-4 h-full">
            <Title name={t('overview.products')} />
            <Table data={products} isUserTable={false} />
          </div>
        </Card>
      </div>
      <div className="h-full flex flex-col gap-y-4 md:w-[30%] w-full">
        <Card height="md:h-1/2 h-full">
          <h1 className="text-2xl">Grafico 1</h1>
          <Area data={areaData} />
        </Card>
        <Card height="md:h-1/2 h-full">
          <h1 className="text-2xl">Grafico 1</h1>
          <Donut data={donutData} />
        </Card>
      </div>
    </div>
  )
}

export default Overview
