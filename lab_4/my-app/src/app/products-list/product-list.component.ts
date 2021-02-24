import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  currentRate = 0;
  share(link: String) {
    window.open('https://telegram.me/share/url?url='+link, '_blank')
  }
}