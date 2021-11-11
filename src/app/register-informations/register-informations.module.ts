import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { IonicModule }    from '@ionic/angular';
import { RegisterInformationsPageRoutingModule } from './register-informations-routing.module';
import { RegisterInformationsPage }              from './register-informations.page';
import { MaterialModule }                        from '../material.module';
import { WebView }                               from '@ionic-native/ionic-webview/ngx';
import { Camera }                                from '@ionic-native/camera/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterInformationsPageRoutingModule,
    MaterialModule
  ],
  declarations: [RegisterInformationsPage],
  providers: [WebView, Camera]
})
export class RegisterInformationsPageModule {}
