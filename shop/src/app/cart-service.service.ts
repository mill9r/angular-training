import {Injectable} from '@angular/core';
import {Product} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart: Array<Product> = [];

  constructor() {
  }

  addToCart(item: Product): void {
    console.log('add to cart');
    this.cart.push(item);
  }

  getCards(): Product[] {
    return this.cart.length !== 0 ? this.cart : [];
  }
}
