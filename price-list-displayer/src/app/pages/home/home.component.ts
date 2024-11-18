import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ViewComponent } from "../../components/view/view.component";


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

  activeId = 0;

  products = [
    {
      "id": 0,
      "name": "",
      "enabled": true,
      "attributes": [
        {
          "attribute": "imagen",
          "value": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.familier.co.za%2Fwp-content%2Fuploads%2F2020%2F04%2FTop-Sirloin-Steak-1.jpeg%3Ffit%3D2048%252C1536%26ssl%3D1&f=1&nofb=1&ipt=7f3ea0fb35be58376042d880518aba74d65f9d56d9f674b7fa165a14eb55f69b&ipo=images",
          "type": "string"
        },
        {
          "attribute": "precio",
          "value": "12500",
          "type": "number"
        },
      ]
    },
    {
      "id": 1,
      "name": "Bife con lomo y pimenton",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.familier.co.za%2Fwp-content%2Fuploads%2F2020%2F04%2FTop-Sirloin-Steak-1.jpeg%3Ffit%3D2048%252C1536%26ssl%3D1&f=1&nofb=1&ipt=7f3ea0fb35be58376042d880518aba74d65f9d56d9f674b7fa165a14eb55f69b&ipo=images",
          "type": "string"
        }
      ]
    },
    {
      "id": 2,
      "name": "Pollo Grande",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fxn--losmaos-8za.com%2Fwp-content%2Fuploads%2F2020%2F06%2FiStock-924479518.jpg&f=1&nofb=1&ipt=b77eb20de5eab3a23ecefb62f6120789838826bb8fb488e14293bcc4a61322a9&ipo=images",
          "type": "string"
        }
      ]
    },
    {
      "id": 3,
      "name": "Chuleta Ahumada",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://www.shopcateringbutcher.co.uk/uploads/1/3/1/5/131500665/s896082012407529186_p145_i1_w1200.jpeg",
          "type": "string"
        }
      ]
    },
    {
      "id": 4,
      "name": "Chorizo Portuano",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "900",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://saboratutierra.com/wp-content/uploads/2020/10/chorizo-barbacoa.jpg",
          "type": "string"
        }
      ]
    }
  ]

  products1 = [
    {
      "id": 1,
      "name": "Bife con lomo y pimenton",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.familier.co.za%2Fwp-content%2Fuploads%2F2020%2F04%2FTop-Sirloin-Steak-1.jpeg%3Ffit%3D2048%252C1536%26ssl%3D1&f=1&nofb=1&ipt=7f3ea0fb35be58376042d880518aba74d65f9d56d9f674b7fa165a14eb55f69b&ipo=images",
          "type": "string"
        }
      ]
    },
    {
      "id": 2,
      "name": "Pollo",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fxn--losmaos-8za.com%2Fwp-content%2Fuploads%2F2020%2F06%2FiStock-924479518.jpg&f=1&nofb=1&ipt=b77eb20de5eab3a23ecefb62f6120789838826bb8fb488e14293bcc4a61322a9&ipo=images",
          "type": "string"
        }
      ]
    },
    {
      "id": 3,
      "name": "Chuleta",
      "enabled": true,
      "attributes": [
        {
          "attribute": "precio",
          "value": "500",
          "type": "number"
        },
        {
          "attribute": "imagen",
          "value": "https://www.shopcateringbutcher.co.uk/uploads/1/3/1/5/131500665/s896082012407529186_p145_i1_w1200.jpeg",
          "type": "string"
        }
      ]
    },
  ]

  views = [
    {
      "id": 4,
      "title": "Carniceria",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [...this.products, this.products[0], this.products[1], this.products[2], this.products[3]],
      /* "elements": [...this.products, ...this.products, ...this.products, this.products[2], this.products[3], this.products[1]], */
      "childViews": []
    },
  /*   {
      "id": 4,
      "title": "Carniceria",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [...this.products, ...this.products, ...this.products],
      "childViews": []
    },
    {
      "id": 4,
      "title": "Carniceria",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [...this.products, ...this.products, this.products[0]],
      "childViews": []
    },
    {
      "id": 4,
      "title": "Carniceria",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [...this.products, this.products[0], this.products[0]],
      "childViews": []
    },
    {
      "id": 4,
      "title": "Panaderia",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [],
      "childViews": [
        {
          "id": 5,
          "title": "Sandwiches",
          "active": false,
          "enabled": false,
          "attributes": [],
          "elements": [...this.products1, ...this.products1],
          "childViews": []
        },
        {
          "id": 5,
          "title": "Sandwiches",
          "active": false,
          "enabled": false,
          "attributes": [],
          "elements": [...this.products1, ...this.products1],
          "childViews": []
        },
      ]
    },
    {
      "id": 4,
      "title": "",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [this.products[0]],
      "childViews": []
    },
    {
      "id": 4,
      "title": "",
      "active": false,
      "enabled": true,
      "attributes": [],
      "elements": [],
      "childViews": [
        {
          "id": 5,
          "title": "Sandwiches",
          "active": false,
          "enabled": false,
          "attributes": [],
          "elements": [this.products[0]],
          "childViews": []
        },
        {
          "id": 5,
          "title": "Sandwiches",
          "active": false,
          "enabled": false,
          "attributes": [],
          "elements": [this.products[1]],
          "childViews": []
        },
      ]
    }, */
  ]

  //slideInterval = 11000;
  slideInterval = 11000;

  onSlide(slideEvent: NgbSlideEvent) {
    console.log(slideEvent)
    const splitedSlide = slideEvent.current.split("-");
    console.log("Current ", splitedSlide[2]);
    this.activeId = Number(splitedSlide[2]) || 0;
  }

}
