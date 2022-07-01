import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Productos', url: 'productos', icon: 'tennisball' },
    { title: 'Configuraciones', url: 'configuraciones', icon: 'settings' },
    { title: 'Acerca de', url: 'acerca-de', icon: 'information-circle' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {

    if(this.getValue())
    {
      console.log("pasa if")
      this.router.navigate(['/productos']);
    }
    else{
      console.log("pasa else")
      this.router.navigate(['/config-inicial']);
      // Storage.set({
      //   key: 'cant-cuotas',
      //   value: '3',
      // });
    }
  }

  // Obtengo el valor del storage
  async getValue(){
    const { value } = await Storage.get({ key: 'name' });

    console.log("mostrar value : ",value)
    return value;
  }


}
