import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Category, Order } from './APITypes';

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

  postOrder(order: Order): void {
    this.http
      .post(`${this.APIUrl}/orders`, order, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((i) => {
        console.log(i);
      });
  }

  deleteOrder(id: number): Observable<any> {
    const deleted = this.http.delete(`${this.APIUrl}/orders/${id}`);
    return deleted;
  }

  search(searchString: string): Observable<Product[]> {
    const data = this.http.get<Product[]>(
      `${this.APIUrl}/search?searchText=${searchString}`
    );
    return data;
  }
}
