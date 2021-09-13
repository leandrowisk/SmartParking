import { IonicModule }    from '@ionic/angular';
import { RouterModule }   from '@angular/router';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HomePage }       from '../home/home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    MaterialModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
