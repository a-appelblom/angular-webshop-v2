import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Category, Order } from './APITypes';
import { CartProduct } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  APIUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const data = this.http.get<Product[]>(`${this.APIUrl}/products`);
    return data;
  }

  getProduct(id: number): Observable<Product> {
    const data = this.http.get<Product>(`${this.APIUrl}/products/${id}`);
    return data;
  }

  getCategories(): Observable<Category[]> {
    const data = this.http.get<Category[]>(`${this.APIUrl}/categories`);
    return data;
  }

  getOrders(companyId: number): Observable<Order[]> {
    console.log(companyId);

    const data = this.http.get<Order[]>(
      `${this.APIUrl}/orders?companyId=${companyId}`
    );
    return data;
  }

  postOrder(cartProducts: CartProduct): void {
    console.log(cartProducts);
  }
}
