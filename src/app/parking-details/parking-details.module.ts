import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { IonicModule }                      from '@ionic/angular';
import { ParkingDetailsPageRoutingModule }  from './parking-details-routing.module';
import { ParkingDetailsPage }               from './parking-details.page';
import { MaterialModule }                   from '../material.module';
import { TabsPageModule }                   from '../tabs/tabs.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingDetailsPageRoutingModule,
    MaterialModule,
    TabsPageModule
  ],
  exports: [
    ParkingDetailsPage
  ],
  declarations: [ParkingDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ParkingDetailsPageModule {}
