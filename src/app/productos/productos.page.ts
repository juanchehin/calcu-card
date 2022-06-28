import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: [],
})
export class ProductosPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  productos = []

  habilitarCalcular = false;

  name: string;
  precio: number;
  total = 0;

  message: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Mensaje',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();

  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // Chequear que el precio sea numerico
    if(!this.isNumberic(this.precio))
    {
      this.presentAlert('El precio debe ser numerico')
      return;
    }

    this.productos.push({ nombre: this.name,precio : this.precio});
    this.modal.dismiss(this.name, 'confirm');
    this.calcular(this.precio);
  }


  calcular(precio: number) {
    this.total += precio;
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  isNumberic(value: string | number): boolean
  {
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }
}
