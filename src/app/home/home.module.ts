import { IonicModule }    from '@ionic/angular';
import { RouterModule }   from '@angular/router';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HomePage }              from '../home/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule }        from '../material.module';
import { HttpClientModule }      from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
