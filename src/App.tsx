import Footer from '@components/Footer'
import Header from '@components/Header'
import Overview from '@components/Overview'
import Summary from '@components/Summary'
import Wrapper from '@components/Wrapper'
import useProducts from '@hooks/useProducts'
import useUsers from '@hooks/useUsers'
import { useEffect } from 'react'

function App() {
  const { totalUsers, fetchUsers, parsedUsers, loadingUsers } = useUsers()
  const { products, totalProducts, fetchProducts } = useProducts()

  useEffect(() => {
    fetchUsers()
    fetchProducts()
  }, [fetchUsers, fetchProducts])

  return (
    <main className="flex flex-col justify-center items-center w-full h-screen bg-main font-nunito">
      <Wrapper>
        <Header />
        <Summary totalUsers={totalUsers} totalProducts={totalProducts} />
        <Overview users={parsedUsers} products={products} loading={loadingUsers} />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default App
