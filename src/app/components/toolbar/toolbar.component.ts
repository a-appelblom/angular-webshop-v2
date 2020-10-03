import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { APIService } from 'src/app/services/api.service';
import { Category } from 'src/app/services/APITypes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;
  @Input() categories: Category[];
  observer = {
    next: (i) => {
      this.categories = i.filter((category: Category) => category.name);
    },
    error: (error) => console.error(error),
    complete: () => {
      this.complete = true;
    },
  };
  complete = false;

  constructor(private cart: CartService, private API: APIService) {}

  ngOnInit(): void {
    this.API.getCategories().subscribe(this.observer);
  }

  getQuantity(): number {
    return this.cart.getProductQuantity();
  }
}
