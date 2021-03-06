import { IonicModule }             from '@ionic/angular';
import { RouterModule }            from '@angular/router';
import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { QRCodePage }              from './qr-code.page';
import { QRCodePageRoutingModule } from './qr-code-routing.module';
import { ScanPage }                from '../scan/scan.page';
import { MaterialModule }          from '../material.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QRCodePage }]),
    QRCodePageRoutingModule,
    MaterialModule
  ],
  exports: [QRCodePage],
  declarations: [
    QRCodePage,
    ScanPage,
  ]
})
export class QRCodePageModule {}
