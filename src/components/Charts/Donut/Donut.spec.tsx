import i18n from '@i18n/index'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import Donut from './index'

const mockDonutData = { series: [1, 2, 3, 4] }

jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

test('Render donut graph', () => {
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Donut data={mockDonutData} />
    </I18nextProvider>
  )
  expect(getByText('General Info')).toBeInTheDocument()
})
