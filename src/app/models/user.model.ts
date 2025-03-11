import { OrderModel } from "./order.model"

export interface UserModel {
    name: string
    email: string
    password: string
    orders: OrderModel[]
}