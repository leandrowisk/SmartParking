import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule }                      from '@ionic/angular';
import { ForgetPasswordPageRoutingModule }  from './forget-password-routing.module';
import { ForgetPasswordPage }               from './forget-password.page';
import { MaterialModule }                   from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPasswordPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ForgetPasswordPage]
})
export class ForgetPasswordPageModule {}
