import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddataPageRoutingModule } from './adddata-routing.module';

import { AdddataPage } from './adddata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddataPageRoutingModule
  ],
  declarations: [AdddataPage]
})
export class AdddataPageModule {}
