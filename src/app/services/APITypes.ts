import { PaymentMethod } from './user.service';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  productCategory: [ProductCategory];
}

export interface ProductCategory {
  categoryId: string;
  category: string | null;
}

export interface Category {
  id: number;
  name: string;
}

export interface Order {
  id?: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: PaymentMethod;
  totalPrice: number;
  status: number;
  orderRows: OrderRows[];
}

export interface OrderRows {
  productId: number;
  orderId?: number;
  amount: number;
}
