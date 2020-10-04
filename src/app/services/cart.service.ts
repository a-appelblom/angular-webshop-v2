import { Injectable } from '@angular/core';
import { Product } from './APITypes';

export interface CartProduct extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private inCart: CartProduct[] = [];

  constructor() {}

  getCart(): CartProduct[] {
    return this.inCart;
  }

  getProductQuantity(): number {
    const quantities = this.inCart.map((i) => i.quantity);

    return quantities.reduce((a, b) => a + b, 0);
  }

  addToCart(product: Product): void {
    if (this.inCart) {
      const temp = this.inCart.find(
        (item: CartProduct) => item.id === product.id
      );
      if (temp) {
        temp.quantity++;
      } else if (!temp) {
        const newProduct: CartProduct = Object.assign(product, { quantity: 1 });
        this.inCart.push(newProduct);
      }
    } else if (this.inCart.length < 1) {
      const newProduct: CartProduct = Object.assign(product, { quantity: 1 });
      this.inCart.push(newProduct);
    }
  }

  removeFromCart(id: number): void {
    console.log(id);
  }

  getCartTotal(): number {
    const totals = this.inCart.map((i) => {
      return i.quantity * i.price;
    });
    const total = totals.reduce((a, b) => a + b, 0);
    return total;
  }
}
