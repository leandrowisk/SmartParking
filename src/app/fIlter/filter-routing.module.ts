import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPage }           from './filter.page';
import { NgxCurrencyModule }    from "ngx-currency";

const routes: Routes = [
  {
    path: '',
    component: FilterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ,
            NgxCurrencyModule],
  exports: [RouterModule]
})
export class FilterPageRoutingModule {}
