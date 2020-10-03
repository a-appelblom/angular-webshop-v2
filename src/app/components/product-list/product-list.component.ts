import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { APIService } from 'src/app/services/api.service';
import { Product } from 'src/app/services/APITypes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  observer = {
    next: (i) => {
      if (Array.isArray(i)) {
        this.products = i;
      }
    },

    error: (error) => console.error(error),
    complete: () => (this.complete = true),
  };
  searchString: string;
  products: Product[];
  complete = false;
  currentUrl: string;

  constructor(
    private API: APIService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchString = params.parameter;
    });
    if (this.searchString && this.searchString.length > 0) {
      this.API.search(this.searchString).subscribe(this.observer);
    } else if (!this.searchString || this.searchString.length === 0) {
      this.API.getProducts().subscribe(this.observer);
    }
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
}
