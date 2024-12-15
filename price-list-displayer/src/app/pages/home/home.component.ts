import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ViewComponent } from "../../components/view/view.component";
import { DataService } from '../../services/data.service';
import { Display } from '../../interfaces/display';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule,
    ViewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('slideInOut', [
      state('enter', style({
        opacity: 1
      })),
      state('leave', style({
        opacity: 0
      })),
      transition('enter => leave', animate('1100ms ease-in-out')),
      transition('leave => enter', animate('1100ms ease-in-out'))
    ])
  ]
})
export class HomeComponent {

  views: Display[];

  constructor(_dataService: DataService) {
    this.views = _dataService.getDisplayData();
  }

  activeId = 0;

  //slideInterval = 11000;
  slideInterval = 11000;

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent)
    const splitedSlide = slideEvent.current.split("-");
    console.log("Current ", splitedSlide[2]);
    this.activeId = Number(splitedSlide[2]) || 0;
  }

}
