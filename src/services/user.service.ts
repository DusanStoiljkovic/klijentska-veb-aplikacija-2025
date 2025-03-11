import { empty } from "rxjs"
import { UserModel } from "../app/models/user.model"
import { OrderModel } from "../app/models/order.model"

export class UserService {
    static retrieveUsers(): UserModel[] {
        if (!localStorage.getItem('users')) {
            const arr = [{
                email: 'user@example.com',
                password: 'user123',
                orders: []
            }]
            
            localStorage.setItem('users', JSON.stringify(arr))
        }
    
        return JSON.parse(localStorage.getItem('users')!)
    }

    static login(email: string, password: string): boolean {
        for(let user of this.retrieveUsers()) {
            if(user.email === email && user.password === password) {
                localStorage.setItem('active', user.email)
                return true
            }
        }
        return false
    }

    static signUp(user: UserModel): boolean {
        if(user.name != '' && user.email != '' && user.password != '') {
            let users = this.retrieveUsers()
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
            return true
        }
        return false
    }

    static getActiveUser(): UserModel | null {
        if(!localStorage.getItem('active'))
            return null

        for(let user of this.retrieveUsers()) {
            if(user.email == localStorage.getItem('active')) 
                return user
        }

        return null
    }

    static createOrder(order: OrderModel) {
        const arr = this.retrieveUsers()
        for(let user of arr) {
            if(user.email == localStorage.getItem('active')) {
                user.orders.push(order)
                localStorage.setItem('users', JSON.stringify(arr))
                return true
            }
        }
        return false
    }

    static changePassword(newPassword: string): boolean {
        const arr = this.retrieveUsers()
        for(let user of arr) {
            if(user.email === localStorage.getItem('active')) {
                user.password = newPassword
                localStorage.setItem('users', JSON.stringify(arr))
                return true
            }
        }
        return false
    }

    static changeOrderStatus(state: 'ordered' | 'paid' | 'canceled', id: number) {
        const active = this.getActiveUser()
        if(active) {
            const arr = this.retrieveUsers()
            for (let user of arr) {
                if(user.email == active.email) {
                    for(let order of user.orders) {
                        if(order.id == id) {
                            order.status = state
                        }
                    }
                    localStorage.setItem('users', JSON.stringify(arr))
                    return true
                }
            }
        }
        return false
    }

    static changeRating(r: boolean, id: number) {
        const active = this.getActiveUser() 
        if(active) {
            const arr = this.retrieveUsers()
            for(let user of arr) {
                if(user.email == active.email) {
                    for(let order of user.orders) {
                        if(order.id == id && order.status == 'paid') {
                            order.rating = r
                        }
                    }
                    localStorage.setItem('users', JSON.stringify(arr))
                    return true
                }
            }
        }
        return false
    }
}