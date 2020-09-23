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
