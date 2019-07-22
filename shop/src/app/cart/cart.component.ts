import {Component, OnInit} from '@angular/core';
import {CartServiceService} from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart: CartServiceService) {
  }

  ngOnInit() {
  }

}
