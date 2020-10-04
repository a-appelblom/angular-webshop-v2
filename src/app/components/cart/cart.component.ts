import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CartProduct, CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentMethod, UserService } from 'src/app/services/user.service';
import { UsernameInputComponent } from '../username-input/username-input.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  inCart: CartProduct[];
  cartTotal: number;

  username: string;
  companyId: number;
  payment: PaymentMethod;

  constructor(
    private cart: CartService,
    private orderService: OrderService,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inCart = this.cart.getCart();
    this.cartTotal = this.cart.getCartTotal();
  }
  confirmPurchase(): void {
    this.openDialog();
  }

  delete(item: CartProduct): void {
    this.inCart = this.cart.removeFromCart(item.id);
    this.cartTotal = this.cart.getCartTotal();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UsernameInputComponent, {
      width: '50%',
      data: {
        username: this.username,
        companyId: this.companyId,
        payment: this.payment,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);

      this.username = result.username;
      this.companyId = result.companyId;
      this.payment = result.payment;

      this.userService.saveUsername(this.username);
      this.userService.saveId(this.companyId);
      this.userService.savePayment(this.payment);
      this.orderService.createOrder();

      this.cart.clearCart();
      this.router.navigate(['']);
    });
  }
}
