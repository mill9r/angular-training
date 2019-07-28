import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../products.service';
import {CartService} from '../../../cart/cart.service';

export enum Category {
  Beverages,
  Meat,
  Dairy,
  Bakery,
  Produce
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
  }

  addProductToCart(): void {
    this.addToCart.emit(this.product);
  }

}
