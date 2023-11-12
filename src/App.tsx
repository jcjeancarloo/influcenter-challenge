import Footer from '@components/Footer'
import Header from '@components/Header'
import Overview from '@components/Overview'
import Summary from '@components/Summary'
import Wrapper from '@components/Wrapper'
import useUsers from '@hooks/useUsers'

import { useEffect } from 'react'

function App() {
  const { users, countUsers, fetchUsers } = useUsers()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-main font-nunito">
      <Wrapper>
        <Header />
        <Summary countUsers={countUsers} />
        <Overview />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default App
