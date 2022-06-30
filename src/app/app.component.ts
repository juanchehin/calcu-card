import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: 'productos', icon: 'tennisball' },
    { title: 'Configuraciones', url: 'configuraciones', icon: 'settings' },
    { title: 'Acerca de', url: 'acerca-de', icon: 'information-circle' }
  ];
  constructor() {}
}
