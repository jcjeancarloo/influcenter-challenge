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

const mockProduct = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
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
      <Table data={mockProduct} isUserTable={false} handleUpload={() => {}} />
    </I18nextProvider>
  )
  expect(getByText('Add products')).toBeInTheDocument()
})
