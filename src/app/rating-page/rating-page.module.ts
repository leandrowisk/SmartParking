import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { FormsModule }                 from '@angular/forms';
import { IonicModule }                 from '@ionic/angular';
import { RatingPageRoutingModule }     from './rating-page-routing.module';
import { RatingPage }                  from './rating-page.page';
import { NgbModule }                   from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule }              from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
