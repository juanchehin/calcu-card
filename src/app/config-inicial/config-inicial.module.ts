import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigInicialPageRoutingModule } from './config-inicial-routing.module';

import { ConfigInicialPage } from './config-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigInicialPageRoutingModule
  ],
  declarations: [ConfigInicialPage]
})
export class ConfigInicialPageModule {}
