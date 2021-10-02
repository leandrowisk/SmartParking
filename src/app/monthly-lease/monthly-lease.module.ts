import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { IonicModule }  from '@ionic/angular';
import { MonthlyLeasePageRoutingModule } from './monthly-lease-routing.module';
import { MonthlyLeasePage }              from './monthly-lease.page';
import { MaterialModule }                from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyLeasePageRoutingModule,
    MaterialModule
  ],
  declarations: [MonthlyLeasePage]
})
export class MonthlyLeasePageModule {}
