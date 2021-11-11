import { FinishRegisterPageModule }        from './../finish-register/finish-register.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule }             from '@angular/forms';
import { IonicModule }                     from '@ionic/angular';
import { RegisterPagePageRoutingModule }   from './register-page-routing.module';
import { RegisterPagePage }                from './register-page.page';
import { MaterialModule }                  from '../material.module';
import { NgxMaskModule, IConfig }          from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPagePageRoutingModule,
    MaterialModule,
    FinishRegisterPageModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
     RegisterPagePage
  ],
  declarations: [RegisterPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPageModule {}
