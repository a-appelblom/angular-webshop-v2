import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from 'src/app/services/api.service';
import { Product } from 'src/app/services/APITypes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  observer = {
    next: (i) => {
      if (Array.isArray(i)) {
        if (this.category) {
          this.products = i.filter((item: Product) =>
            item.productCategory.some(
              (productCategory) =>
                parseInt(productCategory.categoryId, 0) === this.category
            )
          );
        } else {
          this.products = i;
        }
      }
    },

    error: (error) => console.error(error),
    complete: () => (this.complete = true),
  };
  searchString: string;
  category: number;
  products: Product[];
  complete = false;
  currentUrl: string;

  constructor(
    private API: APIService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.hasOwnProperty('searchString')) {
        this.searchString = params.searchString;

        if (this.searchString && this.searchString.length > 0) {
          this.API.search(this.searchString).subscribe(this.observer);
        } else if (!this.searchString || this.searchString.length === 0) {
          this.API.getProducts().subscribe(this.observer);
        }
      } else if (params.hasOwnProperty('categoryId')) {
        this.category = parseInt(params.categoryId, 0);

        this.API.getProducts().subscribe(this.observer);
      }
    });
  }
  search(): void {
    this.updateUrl();
    if (this.searchString && this.searchString.length > 0) {
      this.API.search(this.searchString).subscribe(this.observer);
    } else if (!this.searchString || this.searchString.length === 0) {
      this.API.getProducts().subscribe(this.observer);
    }
  }
  reRoute(id: number): void {
    this.router.navigate([`product/${id}`]);
  }

  updateUrl(): void {
    this.location.go(`products/${this.searchString}`);
  }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }
}
