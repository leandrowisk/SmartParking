import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaidPagePage } from './paid-page.page';

const routes: Routes = [
  {
    path: '',
    component: PaidPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaidPagePageRoutingModule {}
