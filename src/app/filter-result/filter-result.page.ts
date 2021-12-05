import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parking } from '../interfaces/Parking';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.page.html',
  styleUrls: ['./filter-result.page.scss'],
})
export class FilterResultPage implements OnInit {

  public parkings: Array<Parking> = []

  constructor(
    public route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getFilterResults();
  }

  getFilterResults(){
    this.parkings = this.router.getCurrentNavigation().extras.state.example;
  }

  rating(rating: number){
    return new Array(rating);
  }
}
