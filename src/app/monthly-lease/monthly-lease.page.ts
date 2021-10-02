import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';


@Component({
  selector: 'app-monthly-lease',
  templateUrl: './monthly-lease.page.html',
  styleUrls: ['./monthly-lease.page.scss'],
})
export class MonthlyLeasePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
