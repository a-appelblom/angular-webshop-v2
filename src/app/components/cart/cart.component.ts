import { Component, OnChanges, OnInit } from '@angular/core';
import { CartProduct, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  inCart: CartProduct[];

  constructor(public cart: CartService) {}

  ngOnInit(): void {
    this.inCart = this.cart.getCart();
    console.log(this.inCart);
  }
  ngOnChanges(): void {}
}
