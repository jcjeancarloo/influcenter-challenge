import Card from '@components/Common/Card'
import Table from '@components/Table'
import Donut from '../Charts/Donut'

const donutData = { series: [44, 55, 41, 17, 15] }

const Overview = () => {
  return (
    <div className="w-full h-[1024px] flex flex-col md:flex-row gap-x-4 gap-y-4">
      <div className="h-full flex flex-col gap-y-4 md:w-[70%] w-full">
        <Card width="w-full" height="md:h-1/2 h-full">
          <div className="flex flex-col gap-y-4 h-full">
            <h1 className="text-2xl">Tabela 1</h1>
            <Table />
          </div>
        </Card>
        <Card height="h-1/2">
          <div className="bg-green-200 w-full">
            <h1>Grafico 2</h1>
          </div>
        </Card>
      </div>
      <div className="h-full flex flex-col gap-y-4 md:w-[30%] w-full">
        <Card height="h-1/2">
          <div className="bg-orange-200 w-full">
            <h1>Grafico3</h1>
          </div>
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
