import { Suspense, lazy, useEffect } from 'react'
import { PuffLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Wrapper from '@components/Wrapper'

import useProducts from '@hooks/useProducts'
import useUsers from '@hooks/useUsers'

const Overview = lazy(() => import('@components/Overview'))
const Summary = lazy(() => import('@components/Summary'))

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
      <Suspense
        fallback={
          <div>
            <PuffLoader color="white" />
          </div>
        }
      >
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
          <ToastContainer />
        </Wrapper>
      </Suspense>
    </main>
  )
}

export default App
