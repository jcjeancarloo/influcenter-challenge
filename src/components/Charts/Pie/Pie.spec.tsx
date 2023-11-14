import i18n from '@i18n/index'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import Pie from './index'

const pieData = { series: [1, 2] }

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

test('Render pie graph', () => {
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Pie data={pieData} />
    </I18nextProvider>
  )
  expect(getByText('Users x Sales')).toBeInTheDocument()
})
