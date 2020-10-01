import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { Product } from 'src/app/services/APITypes';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  observer = {
    next: (i) => (this.products = i),
    error: (error) => console.error(error),
    complete: () => (this.complete = true),
  };
  searchString: string;
  products: Product[];
  complete = false;

  constructor(private API: APIService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchString = params.parameter;
      console.log(this.searchString);
    });
    this.API.search(this.searchString).subscribe(this.observer);
  }
  search(): void {
    console.log(this.searchString);
    this.API.search(this.searchString).subscribe(this.observer);
  }
}
