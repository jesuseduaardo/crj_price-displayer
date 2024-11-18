import { Component, Input, SecurityContext } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgStyle, MaterialModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private _sanitizer: DomSanitizer) {

  }

  @Input()
  product: any;

  @Input()
  isOneProduct: boolean = false;


  getProductName() {
    return this.product.name;
  }

  existProductName() {
    return this.product.name.length;
  }

  getProductImage() {
    let image = null;
    this.product.attributes.forEach((attr: any) => {
      if (attr.attribute === 'imagen') {
        image = this._sanitizer.sanitize(SecurityContext.URL, attr.value);
      }
    });
    return image ? `url(${image})` : '';
  }

  existProductPrice() {
    for (const element of this.product.attributes) {
      if (element.attribute === 'precio') {
        return true;
      }
    }
    return false;
  }

  getProductPrice() {
    let precio = null;
    this.product.attributes.forEach((attr: any) => {
      if (attr.attribute === 'precio') {
        precio = attr.value;
      }
    });
    const formatter = new Intl.NumberFormat('es-Es', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `$${formatter.format(Number(precio))}`;
  }
}
