import { NgModule }                        from '@angular/core';
import { BrowserModule }                   from '@angular/platform-browser';
import { RouteReuseStrategy }              from '@angular/router';
import { CommonModule }                    from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule }                from './app-routing.module';
import { AppComponent }                    from './app.component';
import { BrowserAnimationsModule }         from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA }          from '@angular/core';
import { QRCodePageModule }                from './QR-Code/qr-code.module';
import { MaterialModule }                  from './material.module';
import { CodeComponent }                   from './code/code.component';

@NgModule({
  declarations: [AppComponent, CodeComponent],
  entryComponents: [],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            IonicModule.forRoot(),
            CommonModule, 
            AppRoutingModule,
            QRCodePageModule,
            MaterialModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule {}
