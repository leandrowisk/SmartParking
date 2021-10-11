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
  }

}
