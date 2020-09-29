import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { CartProduct, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent implements OnInit {
  myCompany: number;

  constructor(private API: APIService) {}

  ngOnInit(): void {}
}
