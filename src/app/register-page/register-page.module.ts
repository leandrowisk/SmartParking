import { FinishRegisterPageModule } from './../finish-register/finish-register.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule }                     from '@angular/forms';
import { IonicModule }                     from '@ionic/angular';
import { RegisterPagePageRoutingModule }   from './register-page-routing.module';
import { RegisterPagePage }                from './register-page.page';
import { MaterialModule }                  from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPagePageRoutingModule,
    MaterialModule,
    FinishRegisterPageModule
  ],
  exports: [
     RegisterPagePage
  ],
  declarations: [RegisterPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPageModule {}
