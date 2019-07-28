import {Component, OnInit} from '@angular/core';
import {Product, ProductsService} from '../products.service';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductsService, private cartService: CartService) {
  }

  ngOnInit() {
  }

  addToCart(product: Product): void {
    console.log('ProductListComponent', product);
    this.cartService.addToCart(product);
  }


}
