import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule, ReactiveFormsModule }                  from '@angular/forms';
import { IonicModule }                  from '@ionic/angular';
import { PerfilEditPageRoutingModule }  from './perfil-edit-routing.module';
import { PerfilEditPage }               from './perfil-edit.page';
import { MaterialModule }               from '../material.module';
import { NgxMaskModule }                from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [PerfilEditPage]
})
export class PerfilEditPageModule {}
