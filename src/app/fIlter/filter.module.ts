import { NgxCurrencyModule }     from 'ngx-currency';
import { IonicModule }           from '@ionic/angular';
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule, ReactiveFormsModule }           from '@angular/forms';
import { FilterPage }                  from './filter.page';
import { FilterPageRoutingModule }     from './filter-routing.module';
import { MaterialModule }              from '../material.module';
import { NgbModule }                   from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FilterPageRoutingModule,
    MaterialModule,
    NgxCurrencyModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [FilterPage]
})
export class FilterPageModule {}
