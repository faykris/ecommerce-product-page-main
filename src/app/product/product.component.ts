import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  selected: string = 'first';
  selectedLb: string = 'first';
  isLightbox: boolean = false;
  index: number = 0;
  product: Product = {
    id: 1,
    company: 'sneaker company',
    name: 'Fall Limited Edition Sneakers',
		description: "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
		price: 250,
		discount: 50,
		count: 0,
    images: [
      '../../assets/images/image-product-1.jpg',
      '../../assets/images/image-product-2.jpg',
      '../../assets/images/image-product-3.jpg',
      '../../assets/images/image-product-4.jpg'
    ],
    thumbnails: [
      '../../assets/images/image-product-1-thumbnail.jpg',
      '../../assets/images/image-product-2-thumbnail.jpg',
      '../../assets/images/image-product-3-thumbnail.jpg',
      '../../assets/images/image-product-4-thumbnail.jpg',
    ]
  }

  selectedImgUrl: string = this.product.images[0];
  selectedLbImgUrl: string = this.product.images[0];

  @Output() addedToKart = new EventEmitter<Product>()

  addProduct() {
    this.product.count = this.product.count + 1;
  }

  removeProduct() {
    if (this.product.count > 0) {
      this.product.count = this.product.count - 1;
    }
  }

  addtoKart() {
    if (this.product.count > 0) {
      this.addedToKart.emit(this.product);
      this.product.count = 0;
    }
  }

  selectImg(url: string) {
    this.selectedImgUrl = url;
  }

  selectLbImg(url: string) {
    this.selectedLbImgUrl = url;
  }

  enableLightbox() {
    this.isLightbox = true;
  }

  disableLightbox() {
    this.isLightbox = false;
  }

  nextImage() {
    this.index = this.product.images.indexOf(this.selectedLbImgUrl);
    if (this.index + 1 > 3) {
      this.index = 0;
    }
    else {
      this.index += 1;
    }
    this.selectedLbImgUrl = this.product.images[this.index];

    this.setSelectedLb(this.index);
  }

  prevImage() {
    this.index = this.product.images.indexOf(this.selectedLbImgUrl);
    if (this.index - 1 < 0) {
      this.index = 3;
    }
    else {
      this.index -= 1;
    }
    this.selectedLbImgUrl = this.product.images[this.index];

    this.setSelectedLb(this.index);
    this.selectLbImg(this.product.images[this.index]);
  }

  private setSelectedLb(i: number){
    switch(i) {
      case 0:
        this.selectedLb = 'first';
        break;
      case 1:
        this.selectedLb ='second';
        break;
      case 2:  
        this.selectedLb = 'third';
        break;
      case 3:
        this.selectedLb = 'fourth';
        break;
    }
  }
}
