export type User = {
  id: number
  email: string
  name: {
    firstname: string
    lastname: string
  },
  username: string
  phone: string
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}