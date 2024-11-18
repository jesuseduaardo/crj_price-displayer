import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    ChildComponent
  ],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {

  @Input()
  view: any;

  col: string = 'col';

  ngOnInit(): void {
    this.setColSize();
  }

  setColSize() {
    const eleLength = this.view.elements.length;
    if (eleLength > 12 && eleLength < 19) {
      this.col = 'col-2';
    }
    if (eleLength > 9 && eleLength <= 12) {
      this.col = 'col-3';
    }
    if (eleLength > 6 && eleLength <= 9) {
      this.col = 'col-4';
    }
    if (eleLength > 2 && eleLength <= 6) {
      this.col = 'col-6';
    }
  }

  getViewTitle() {
    return this.view.title.toUpperCase() || "";
  }


}
