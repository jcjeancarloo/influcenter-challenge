import Wrapper from '@components/Common/Wrapper'
import Summary from '@components/Summary'

function App() {
  return (
    <main className="flex flex-row  justify-center w-full h-screen bg-yellow-200">
      <Wrapper>
        <Summary />
        <div className="bg-yellow-200 w-full h-[1024px] grid grid-cols-2">
          <div className="bg-red-300">
            <div className="bg-purple-400 w-full">
              <h1>Grafico 1</h1>
            </div>
            <div className="bg-green-200 w-full">
              <h1>Grafico 2</h1>
            </div>
          </div>
          <div className="bg-gray-400">
            <div className="bg-orange-200 w-full">
              <h1>Grafico3</h1>
            </div>
            <div className="bg-blue-300 w-full">
              <h1>Grafico 4</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default App
