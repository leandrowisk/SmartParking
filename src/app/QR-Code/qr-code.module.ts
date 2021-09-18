import { IonicModule }             from '@ionic/angular';
import { RouterModule }            from '@angular/router';
import { NgModule, NO_ERRORS_SCHEMA }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule }             from '@angular/forms';
import { QRCodePage }              from './qr-code.page';
import { QRCodePageRoutingModule } from './qr-code-routing.module';
import { ScanComponent }           from '../scan/scan.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QRCodePage }]),
    QRCodePageRoutingModule
  ],
  exports: [QRCodePage],
  declarations: [
    QRCodePage,
    ScanComponent
  ]
})
export class QRCodePageModule {}
