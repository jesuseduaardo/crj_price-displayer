import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  @Input()
  view: any;

  ngOnInit(): void {
    console.log(this.view);
  }

  getViewTitle() {
    return this.view.title.toUpperCase();
  }

}
