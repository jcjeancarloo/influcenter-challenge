import Footer from '@components/Footer'
import Header from '@components/Header'
import Overview from '@components/Overview'
import Summary from '@components/Summary'
import Wrapper from '@components/Wrapper'
import useProducts from '@hooks/useProducts'
import useUsers from '@hooks/useUsers'
import { useEffect } from 'react'

function App() {
  const { totalUsers, fetchUsers, parsedUsers, uploadUser } = useUsers()
  const {
    products,
    totalProducts,
    totalCategories,
    totalSales,
    fetchProductAndCategories,
    uploadProduct,
    handleAddSale,
  } = useProducts()

  useEffect(() => {
    fetchUsers()
    fetchProductAndCategories()
  }, [fetchUsers, fetchProductAndCategories])

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen h-full bg-[#1e1e1e] font-nunito">
      <Wrapper>
        <Header />
        <Summary
          totalUsers={totalUsers}
          totalProducts={totalProducts}
          totalCategories={totalCategories}
          totalSales={totalSales}
          handleAddSale={handleAddSale}
        />
        <Overview
          users={parsedUsers}
          products={products}
          uploadUser={uploadUser}
          uploadProduct={uploadProduct}
          chartData={{
            totalUsers,
            totalProducts,
            totalCategories,
            totalSales,
          }}
        />
        <Footer />
      </Wrapper>
    </main>
  )
}

export default App
