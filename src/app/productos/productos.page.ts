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
  tasa = 0;
  totalConTasa = 0;

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
    console.log("pasa cancelar")
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // Chequear que el precio sea numerico
    if(!this.isNumberic(this.precio))
    {
      this.presentAlert('El precio debe ser numerico y no debe estar vacio')
      return;
    }

    this.productos.push({ nombre: this.name,precio : this.precio});
    this.modal.dismiss(this.name, 'confirm');

    this.habilitarCalcular = true;
    this.total = Number.parseInt(this.total.toString()) + Number.parseFloat(this.precio.toString());

    this.name = null;
    this.precio = null;
  }


  calcular() {
    this.tasa = this.tasa / 100;
    this.totalConTasa = this.total + (this.total * this.tasa);

  }

  onWillDismiss(event: Event) {
    if(!this.isNumberic(this.tasa))
    {
      this.presentAlert('La tasa debe ser numerica')
      return;
    }

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

  eliminarProducto(producto: string) {

    const index: number = this.productos.map(producto => producto.nombre).indexOf(producto)

    if (index !== -1) {
        this.productos.splice(index, 1);
    }

  }

  confirm2() {

    this.modal.dismiss(this.name, 'confirm');

  }
}
