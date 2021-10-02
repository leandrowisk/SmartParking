import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterInformationsPage } from './register-informations.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterInformationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterInformationsPageRoutingModule {}
