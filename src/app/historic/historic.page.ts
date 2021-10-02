import { Component, OnInit }     from '@angular/core';
import { Location }              from '@angular/common';
import { Historic, ELEMENT_DATA} from '../interfaces/User';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {
  
  constructor(public location: Location) { }
  
  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
