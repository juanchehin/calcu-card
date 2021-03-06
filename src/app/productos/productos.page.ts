import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AlertController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html'
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
  cantCuotas: number;
  cantCuotasStorage: number;
  divCuotas: number;

  constructor(public alertController: AlertController) { }

  ngOnInit() {

    this.dameCuotasStorage();

  }



  async presentAlert(pMensaje: string,pHeader: string,pSubHeader: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: pHeader,
      subHeader: pSubHeader,
      message: pMensaje,
      buttons: ['OK']
    });

    await alert.present();

  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }


  async dameCuotasStorage()
  {
    const { value } = await Storage.get({ key: 'num-cuotas' });
    this.cantCuotasStorage = Number(value);
  }

  confirm() {
    if(!this.isNumberic(this.precio))
    {
      this.presentAlert('El precio debe ser numerico y no debe estar vacio','Alerta','')
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
    if(this.tasa > 100)
    {
      this.presentAlert('La tasa de interes debe ser menor a 100','Alerta','')
      return;
    }

      if(this.cantCuotas > this.cantCuotasStorage )
      {
        this.tasa = this.tasa / 100;
        this.totalConTasa = this.total + (this.total * this.tasa);
        this.divCuotas = this.totalConTasa / this.cantCuotas;

        var mensj = `<h3>Valor de la compra : </h3> <h2>${this.total}</h2>
                      <br>
                      <h3>Valor con el aumento de tasa : </h3> <h2>${this.totalConTasa}</h2>
                      <br>
                      <h3>Valor por cuota : </h3> <h2>${this.divCuotas}</h2>`;

      }
      else
      {
        this.divCuotas = this.total / this.cantCuotas;

        var mensj = `<h3>Valor de la compra : </h3> <h2>${this.total}</h2>
                      <br>
                      <h3>Valor con el aumento de tasa : </h3> <h2>${this.total}</h2>
                      <br>
                      <h3>Valor por cuota : </h3> <h2>${this.divCuotas}</h2>`;

      }
      this.presentAlert(mensj,'Calculo','')
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


  onWillDismiss(event: Event) {
    if(!this.isNumberic(this.tasa))
    {
      this.presentAlert('La tasa debe ser numerica','Alerta','')
      return;
    }

    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
