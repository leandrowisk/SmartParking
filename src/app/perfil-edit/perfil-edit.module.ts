import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { IonicModule }                  from '@ionic/angular';
import { PerfilEditPageRoutingModule }  from './perfil-edit-routing.module';
import { PerfilEditPage }               from './perfil-edit.page';
import { MaterialModule }               from '../material.module';
<<<<<<< Updated upstream
=======
import { NgxMaskModule }                from 'ngx-mask';
import { WebView }                      from '@ionic-native/ionic-webview/ngx';
import { Camera,  CameraOptions }     from '@ionic-native/camera/ngx';
>>>>>>> Stashed changes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditPageRoutingModule,
    MaterialModule,
  ],
  declarations: [PerfilEditPage],
  providers:[Camera,WebView]
})
export class PerfilEditPageModule {}
