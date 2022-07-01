import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html'
})
export class ConfiguracionesPage implements OnInit {

  constructor() { }

  cantCuotasStorage: string;

  ngOnInit() {
    this.dameCuotasStorage();
  }

  async dameCuotasStorage()
  {
    const { value } = await Storage.get({ key: 'num-cuotas' });
    this.cantCuotasStorage = value;
  }

  async modificarCantCuotas(event: Event)
  {
    await Storage.set({
      key: 'num-cuotas',
      value: String(this.cantCuotasStorage)
    });
  }




}
