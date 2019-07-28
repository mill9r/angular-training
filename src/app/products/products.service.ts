import {Injectable} from '@angular/core';
import {Category} from './product-list/product/product.component';

export interface Product {
  name: string;
  description: string;
  price: number;
  groceryCategories: Category;
  isAvailable: boolean;
  shelfLife: number;
  availableInStates: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productList: Array<Product> = [
    {
      name: 'Apple',
      description: 'Ripe and sweet',
      price: 0.99,
      groceryCategories: Category.Produce,
      isAvailable: true,
      shelfLife: 1,
      availableInStates: ['CA', 'CT']
    },
    {
      name: 'Pinapple',
      description: 'big and sweet',
      price: 4.99,
      groceryCategories: Category.Produce,
      isAvailable: true,
      shelfLife: 5,
      availableInStates: ['CA', 'CT', 'AZ']
    },
    {
      name: 'Apricot',
      description: 'small and sweet',
      price: 2.99,
      groceryCategories: Category.Produce,
      isAvailable: false,
      shelfLife: 1,
      availableInStates: ['CA', 'CT', 'AZ', 'AR']
    },
    {
      name: 'Pork steak',
      description: 'fresh and soft',
      price: 9.99,
      groceryCategories: Category.Meat,
      isAvailable: true,
      shelfLife: 1,
      availableInStates: ['CT', 'AZ', 'AR']
    }
  ];

  getProducts(): Array<Product> {
    return this.productList;
  }

  constructor() {
  }
}
