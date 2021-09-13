import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPagePageRoutingModule } from './rating-page-routing.module';

import { RatingPagePage }              from './rating-page.page';
import { NgbModule }                   from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPagePageRoutingModule,
    NgbModule
  ],
  declarations: [RatingPagePage]
})
export class RatingPagePageModule {}
