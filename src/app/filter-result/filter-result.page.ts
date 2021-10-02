import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parking } from '../interfaces/Parking';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.page.html',
  styleUrls: ['./filter-result.page.scss'],
})
export class FilterResultPage implements OnInit {

  public parkings: Array<Parking> = []

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    if(JSON.parse(this.route.snapshot.params['parkings'])){
      this.parkings = JSON.parse(this.route.snapshot.params['parkings'])
    }
    console.log(this.parkings);
  }

}
