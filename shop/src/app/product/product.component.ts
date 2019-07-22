import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../products.service";

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

  @Input() product: Product;

  // name: string;
  // description: string;
  // price: number;
  // groceryCategories: Category;
  // isAvailable: boolean;
  // shelfLife: number;
  // availableInStates: Array<String>;

  constructor() {
  }

  ngOnInit() {
  }

  onBuy() {
    console.log('Yahoo! You bought smth.')
  }

}
