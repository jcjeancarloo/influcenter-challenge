import i18n from '@i18n/index'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import Summary from './index'

test('Render summary', () => {
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Summary
        totalUsers={10}
        totalProducts={20}
        totalCategories={5}
        totalSales={50}
        handleAddSale={() => {}}
      />
    </I18nextProvider>
  )
  expect(getByText('Add sale')).toBeInTheDocument()
})
