import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { FormsModule }                   from '@angular/forms';
import { IonicModule }                   from '@ionic/angular';
import { RegisterCardPageRoutingModule } from './register-card-routing.module';
import { RegisterCardPage }              from './register-card.page';
import { MaterialModule }                from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCardPageRoutingModule,
    MaterialModule
  ],
  declarations: [RegisterCardPage]
})
export class RegisterCardPageModule {}
