import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Order, OrderRows } from './APITypes';
import { CartProduct, CartService } from './cart.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  inCart: CartProduct[];
  orderObject: Order;

  constructor(
    private API: APIService,
    private cart: CartService,
    private userService: UserService
  ) {}

  createOrder(): void {
    this.constructOrder();
    this.API.postOrder(this.orderObject);
  }

  constructOrder(): Order {
    this.inCart = this.cart.getCart();
    this.orderObject = {
      companyId: this.userService.companyId,
      created: this.getDate(),
      createdBy: this.userService.getUsername(),
      paymentMethod: this.userService.getPayment(),
      totalPrice: this.cart.getCartTotal(),
      status: 1,
      orderRows: this.inCart.map(
        (item): OrderRows => {
          return {
            amount: item.quantity,
            productId: item.id,
          };
        }
      ),
    };
    return this.orderObject;
  }

  getDate(): string {
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}T${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return date;
  }
}
