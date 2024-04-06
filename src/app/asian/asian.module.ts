import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsianPageRoutingModule } from './asian-routing.module';

import { AsianPage } from './asian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsianPageRoutingModule
  ],
  declarations: [AsianPage]
})
export class AsianPageModule {}
