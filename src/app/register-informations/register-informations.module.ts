import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { IonicModule }    from '@ionic/angular';
import { RegisterInformationsPageRoutingModule } from './register-informations-routing.module';
import { RegisterInformationsPage }              from './register-informations.page';
import { MaterialModule }                        from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterInformationsPageRoutingModule,
    MaterialModule
  ],
  declarations: [RegisterInformationsPage]
})
export class RegisterInformationsPageModule {}
