import { Injectable } from '@angular/core';

export enum PaymentMethod {
  'MasterCard',
  'Visa',
  'Paypal',
  'BitCoin',
  'Cups of coffee',
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  username: string;
  companyId: number;
  payment: PaymentMethod;

  constructor() {}

  saveUsername(newName: string): void {
    this.username = newName;
  }

  saveId(newId: number): void {
    this.companyId = newId;
  }

  savePayment(paymentMethod: PaymentMethod): void {
    this.payment = paymentMethod;
  }

  getUsername(): string {
    return this.username;
  }

  getCompany(): number {
    return this.companyId;
  }

  getPayment(): PaymentMethod {
    return this.payment;
  }
}
