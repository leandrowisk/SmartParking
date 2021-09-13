import { NgModule }                        from '@angular/core';
import { BrowserModule }                   from '@angular/platform-browser';
import { RouteReuseStrategy }              from '@angular/router';
import { CommonModule }                    from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule }                from './app-routing.module';
import { AppComponent }                    from './app.component';
import { BrowserAnimationsModule }         from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA }          from '@angular/core';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            IonicModule.forRoot(),
            CommonModule, 
            AppRoutingModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule {}