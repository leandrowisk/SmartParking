import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCodePage }           from './qr-code.page';

const routes: Routes = [
  {
    path: '',
    component: QRCodePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QRCodePageRoutingModule {}
