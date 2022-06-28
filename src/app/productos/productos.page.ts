import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: [],
})
export class ProductosPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  productos = []

  name: string;
  precio: string;

  message: string;

  constructor() { }

  ngOnInit() {
  }

  abrirModal() {

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.productos.push({ nombre: this.name,precio : this.precio});
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
