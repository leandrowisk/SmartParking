import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaidPagePageRoutingModule } from './paid-page-routing.module';
import { PaidPagePage } from './paid-page.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidPagePageRoutingModule,
    MaterialModule
  ],
  declarations: [PaidPagePage]
})
export class PaidPagePageModule {}
