import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Under30minsPage } from './under30mins.page';

const routes: Routes = [
  {
    path: '',
    component: Under30minsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Under30minsPageRoutingModule {}
