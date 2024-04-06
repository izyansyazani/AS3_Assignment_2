import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsianPage } from './asian.page';

const routes: Routes = [
  {
    path: '',
    component: AsianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsianPageRoutingModule {}
