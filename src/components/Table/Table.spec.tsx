import i18n from '@i18n/index'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import Table from './index'

const mockUsers = [
  {
    address: {
      geolocation: {
        lat: '50.3467',
        long: '-20.1310',
      },
      city: 'San Antonio',
      street: 'Hunters Creek Dr',
      number: 6454,
      zipcode: '98234-1734',
    },
    id: 4,
    email: 'don@gmail.com',
    username: 'donero',
    password: 'ewedon',
    name: {
      firstname: 'don',
      lastname: 'romer',
    },
    phone: '1-765-789-6734',
    __v: 0,
  },
]
test('Render users table', () => {
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Table data={mockUsers} isUserTable handleUpload={() => {}} />
    </I18nextProvider>
  )
  expect(getByText('Add users')).toBeInTheDocument()
})

test('Render product table', () => {
  const { getByText } = render(
    <I18nextProvider i18n={i18n}>
      <Table data={mockUsers} isUserTable={false} handleUpload={() => {}} />
    </I18nextProvider>
  )
  expect(getByText('Add products')).toBeInTheDocument()
})
