import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { FormsModule }                   from '@angular/forms';
import { IonicModule }                   from '@ionic/angular';
import { RegisterCardPageRoutingModule } from './register-card-routing.module';
import { RegisterCardPage }              from './register-card.page';
import { MaterialModule }                from '../material.module';
import { NgxMaskModule, IConfig }          from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCardPageRoutingModule,
    MaterialModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [RegisterCardPage]
})
export class RegisterCardPageModule {}
