import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './product/product.component.css',
    './navbar/navbar.component.css'
  ]
})
export class AppComponent {
  title = 'ecommerce product page main';
  productList: Product[] = []

  addToKartList(product: Product){

    if (this.productList.some((element) => element.id = product.id)) {
      let index = this.productList.findIndex((element) => element.id = product.id);
      this.productList[index].count += product.count;
    } else {
      this.productList.push(new Product(
        product.id,
        product.company,
        product.name,
        product.description,
        product.price,
        product.discount,
        product.count,
        product.images,
        product.thumbnails
      ));
    } 
  }
}
