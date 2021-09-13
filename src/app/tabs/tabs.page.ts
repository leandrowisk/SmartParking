import { Component, Input } from '@angular/core';
import {ParkingDetailsPage} from '../parking-details/parking-details.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  @Input() rent: boolean;
  
  constructor() {}
  
  ngOnInit() {
    
  }

}
