import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Order } from 'src/app/services/APITypes';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  observer = {
    next: (i) => {
      this.orders = i;
      const check = this.orders.some(
        (item) => item.companyId === this.myCompanyInt
      );

      if (!check) {
        this.orders = [];
      }
    },
    error: (e) => {
      console.error(e);
    },
    complete: () => {
      this.complete = true;
    },
  };
  complete = false;
  myCompany: string;
  myCompanyInt: number;
  orders: Order[];

  constructor(private API: APIService) {}

  ngOnInit(): void {}
  logger(): void {
    console.log(this.myCompany);
  }
  submit(): void {
    this.complete = false;
    this.myCompanyInt = parseInt(this.myCompany, 0);
    this.API.getOrders(this.myCompanyInt).subscribe(this.observer);
  }
}
