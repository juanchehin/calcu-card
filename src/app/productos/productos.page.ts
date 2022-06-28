import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: [],
})
export class ProductosPage implements OnInit {

  // productos = ['balon','medias','zapatilas'];
  // precios: string[] = ['19600','11000','12000']

  productos = [
    { nombre: 'balon', precio: '19600' },
    { nombre: 'medias', precio: '11000' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
