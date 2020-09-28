import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/services/APITypes';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  complete = false;
  id: number;
  product: Product;
  constructor(
    public cart: CartService,
    private API: APIService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
    });
    this.API.getProduct(this.id).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.complete = true;
      }
    );
  }

  addToCart(): void {
    this.cart.addToCart(this.product);
  }
  addToFavorites(): void {
    console.log('addToFavorites');
  }
}
