import Card from '@components/Common/Card'

const Overview = () => {
  return (
    <div className="w-full h-[1024px] flex flex-col md:flex-row gap-x-4 gap-y-4">
      <div className="h-full flex flex-col gap-y-4 md:w-[70%] w-full">
        <Card height="h-1/2">
          <div className="bg-purple-400 w-full">
            <h1>Grafico 1</h1>
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
        <Card height="h-1/2">
          <div className="bg-blue-300 w-full">
            <h1>Grafico 4</h1>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Overview
