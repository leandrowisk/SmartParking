import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyLeasePage } from './monthly-lease.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyLeasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyLeasePageRoutingModule {}
