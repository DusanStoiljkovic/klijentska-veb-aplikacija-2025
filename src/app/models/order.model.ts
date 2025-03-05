export interface OrderModel {
    flightId: number
    flightNumber: string
    airline: string
    destination: string 
    count: number
    pricePerItem: number
    status: 'ordered' | 'paid' | 'canceled'
    rating: null | boolean
}