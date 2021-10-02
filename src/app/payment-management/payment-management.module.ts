import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { IonicModule }  from '@ionic/angular';
import { PaymentManagementPageRoutingModule } from './payment-management-routing.module';
import { PaymentManagementPage }              from './payment-management.page';
import { MaterialModule }                     from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentManagementPageRoutingModule,
    MaterialModule
  ],
  declarations: [PaymentManagementPage]
})
export class PaymentManagementPageModule {}
