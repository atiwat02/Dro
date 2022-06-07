import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PadPageRoutingModule } from './pad-routing.module';

import { PadPage } from './pad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PadPageRoutingModule
  ],
  declarations: [PadPage]
})
export class PadPageModule {}
