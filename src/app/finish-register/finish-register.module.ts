import { CUSTOM_ELEMENTS_SCHEMA, 
         NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule }             from '@angular/forms';
import { IonicModule }                     from '@ionic/angular';
import { FinishRegisterPageRoutingModule } from './finish-register-routing.module';
import { FinishRegisterPage }              from './finish-register.page';
import { MaterialModule }                  from '../material.module';
import { NgxMaskModule }                   from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishRegisterPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FinishRegisterPage],
  exports:[FinishRegisterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FinishRegisterPageModule {}
