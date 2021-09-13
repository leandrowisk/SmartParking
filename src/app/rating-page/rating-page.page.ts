import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.page.html',
  styleUrls: ['./rating-page.page.scss'],
})
export class RatingPagePage implements OnInit {

  constructor() { }

  currentRate: number = 0;

  ngOnInit() {
  }

}
