import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItalianPageRoutingModule } from './italian-routing.module';

import { ItalianPage } from './italian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItalianPageRoutingModule
  ],
  declarations: [ItalianPage]
})
export class ItalianPageModule {}
