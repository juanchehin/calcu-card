import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html'
})
export class ConfiguracionesPage implements OnInit {

  constructor(private sqlite: SQLite) { }
  // constructor() { }

  ngOnInit() {
    this.crearBD();
  }

  crearBD(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {


        // db.executeSql('create table configuraciones(cant_cuotas int)', [])
        //   .then(() => console.log('Executed SQL'))
        //   .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

}
