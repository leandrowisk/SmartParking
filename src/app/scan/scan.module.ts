import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { IonicModule }           from '@ionic/angular';
import { ScanPageRoutingModule } from './scan-routing.module';
import { ScanPage }              from './scan.page';
import { MaterialModule }        from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPageRoutingModule,
    MaterialModule
  ],
  declarations: [ScanPage]
})
export class ScanPageModule {}
