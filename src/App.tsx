import Footer from '@components/Footer'
import Header from '@components/Header'
import Overview from '@components/Overview'
import Summary from '@components/Summary'
import Wrapper from '@components/Wrapper'

function App() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-yellow-200">
      <Wrapper>
        <Header />
        <Summary />
        <Overview />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default App
