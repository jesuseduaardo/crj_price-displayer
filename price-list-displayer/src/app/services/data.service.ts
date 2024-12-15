import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Display } from '../interfaces/display';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProducts(): Product[] {
    return (
      [
        {
          "id": 1,
          "name": "Picada especial /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/ed40169dbbe3d5d0cd6f3a37947adab07fad222c72766ba10a21b10afa2343fa323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7990",
              "type": "number"
            },
          ]
        },
        {
          "id": 2,
          "name": "Paleta /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/0ddb16c67fdd6bbe05e381a18c7e1bf5943504a4d79f986aad19bfa8e201387b323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "8290",
              "type": "number"
            },
          ]
        },
        {
          "id": 3,
          "name": "Bola de lomo /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/99fcfdd5c6a32b1e067496532e6a5f2b522170e3f336deb771207be417571a04323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 4,
          "name": "Cuadrada /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/52379f73046ef035d5a1f133c02bc9bbc19d17e883d06c1bd9dda53683f4c186323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 5,
          "name": "Osobuco con carne /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/af38c91a1e25ed28cfb2185fcafb1c536af3e1fbb74a693a4b28c292bf2247ba323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 6,
          "name": "Pata muslo /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/919ca99848d7271565a9850640e21215d1b299ca714c11e7ee6d306bd5b2e7bd323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 7,
          "name": "Milanesas de pollo preparadas /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/36495944b6399b37a9199ed6e9f5dd33b5587fae76734fd6f751b26cb48505e0323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 8,
          "name": "Suprema /por kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/fa5f64405dab284f28b34dbe312bd63495996bb29b794d523d94f14a6426ff65323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 9,
          "name": "Vacío /kg",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/af8bd0b4aa4515834c73c5fb9161fa68e0466b8c939bfdfb7adeed2c67c60d8e323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 10,
          "name": "Ojo de bife /kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/a51e89d69c8369f572a34c6a7d513e49eaf487bfc1adba50c89830dfd08fb898323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 11,
          "name": "Bife de chorizo /kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/49f9ce65b24b059c4605c8baa50fcd746e0b5c931b5bab645ffc4211b393c776323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
        {
          "id": 12,
          "name": "Lomo /kg.",
          "enabled": true,
          "attributes": [
            {
              "attribute": "imagen",
              "value": "https://d22fxaf9t8d39k.cloudfront.net/051bd2d0a2fd1c28b3e5a75d0561863f73a16f39bce7583e90e6fb8ac0f4e386323558.jpg",
              "type": "string"
            },
            {
              "attribute": "precio",
              "value": "7949.99",
              "type": "number"
            },
          ]
        },
      ]
    )
  }

  getDisplayData(): Display[] {
    return (
      [
        {
          "id": 4,
          "title": "Carniceria",
          "active": false,
          "enabled": true,
          "attributes": [],
          "elements": this.getProducts(),
          "childViews": []
        }
      ]
    );
  }
}
