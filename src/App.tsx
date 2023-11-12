import Footer from '@components/Footer'
import Header from '@components/Header'
import Overview from '@components/Overview'
import Summary from '@components/Summary'
import Wrapper from '@components/Wrapper'

import { DashboardContextProvider } from './context/dashboard-context'

function App() {
  return (
    <DashboardContextProvider>
      <main className="flex flex-col justify-center items-center w-full h-screen bg-main font-nunito">
        <Wrapper>
          <Header />
          <Summary />
          <Overview />
          <Footer />
        </Wrapper>
      </main>
    </DashboardContextProvider>
  )
}

export default App
