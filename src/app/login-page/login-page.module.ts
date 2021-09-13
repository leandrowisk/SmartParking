import { NgModule, CUSTOM_ELEMENTS_SCHEMA }   from  '@angular/core';
import { CommonModule }                from '@angular/common';
import { FormsModule }                 from '@angular/forms';
import { IonicModule }                 from '@ionic/angular';
import { LoginPagePageRoutingModule }  from './login-page-routing.module';
import { LoginPagePage }               from './login-page.page';
import { MaterialModule }              from '../material.module';


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPagePageRoutingModule,
    MaterialModule
  ],
  declarations: [LoginPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPagePageModule {}
