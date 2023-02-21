import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobile: boolean = false;
  @Input() productList:  Product[] = [];
  @Output() productListChange = new EventEmitter<Product[]>();

  isCartSelected: boolean = false;
  noProducts: string ='Your cart is empty.';

  showHideCart() {
    this.isCartSelected = !this.isCartSelected;
  }

  delProduct(id: number) {
    this.productList = this.productList.filter((product) => product.id !== id);
    this.productListChange.emit(this.productList)
  }

  enableDisableNavbar() {
    this.isMobile = !this.isMobile;
  }
}
