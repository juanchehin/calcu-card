import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Storage } from '@capacitor/storage';


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
    this.getValue();
  }

  // Obtengo el valor del storage
  async getValue(){
    const { value } = await Storage.get({ key: 'num-cuotas' });

    console.log("mostrar value : ",value)

    if(value == null)
    {
      console.log("pasa if")
      this.router.navigate(['/config-inicial']);
    }
    else{
      console.log("pasa else")
      this.router.navigate(['/productos']);
      // Storage.set({
      //   key: 'cant-cuotas',
      //   value: '3',
      // });
    }
  }


}
