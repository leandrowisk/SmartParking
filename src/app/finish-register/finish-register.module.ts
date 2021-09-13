import { CUSTOM_ELEMENTS_SCHEMA, NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { FormsModule }                     from '@angular/forms';
import { IonicModule }                     from '@ionic/angular';
import { FinishRegisterPageRoutingModule } from './finish-register-routing.module';
import { FinishRegisterPage }              from './finish-register.page';
import { MaterialModule }                  from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishRegisterPageRoutingModule,
    MaterialModule
  ],
  declarations: [FinishRegisterPage],
  exports:[FinishRegisterPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FinishRegisterPageModule {}
