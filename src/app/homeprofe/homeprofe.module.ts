import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprofePageRoutingModule } from './homeprofe-routing.module';

import { HomeprofePage } from './homeprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprofePageRoutingModule
  ],
  declarations: [HomeprofePage]
})
export class HomeprofePageModule {}
