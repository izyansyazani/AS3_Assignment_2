import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Under30minsPageRoutingModule } from './under30mins-routing.module';

import { Under30minsPage } from './under30mins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Under30minsPageRoutingModule
  ],
  declarations: [Under30minsPage]
})
export class Under30minsPageModule {}
