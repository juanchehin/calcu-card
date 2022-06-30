import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigInicialPage } from './config-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigInicialPageRoutingModule {}
