export type Order = {
  id: number
  name: {
    first: string
    last: string
  }
  total: number
  status: string
  method: string
  date: string
}
