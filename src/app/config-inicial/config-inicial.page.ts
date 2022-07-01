import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-config-inicial',
  templateUrl: './config-inicial.page.html'
})
export class ConfigInicialPage implements OnInit {

  cuotas = 0;
  habilitarContinuar = false;

  constructor(public alertController: AlertController,public router: Router) { }

  ngOnInit() {
  }

  // Crear BD y almacenar los valores de cuotas....
  async continuar(){

    await Storage.set({
      key: 'num-cuotas',
      value: String(this.cuotas)
    });

    // Chequeo si realmente selecciono una cuota
    this.chequear();

    // Llamar a la pantalla de 'configuracion exitosa'
    this.showAlert();

    this.router.navigate(['/productos']);
  }

  chequear()
  {
    console.log("this.cuotas es : ",this.cuotas)
    if(this.cuotas != 0)
    {
      this.habilitarContinuar = true;
    }
  }


  // Configuracion exitosa!
  showAlert() {

    this.alertController.create({
      header: 'Mensaje',
      message: 'Configuracion exitosa.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });



  }

  seCambio(event: any) {
    this.chequear();
  }

}
