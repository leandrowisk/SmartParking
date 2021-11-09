import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-monthly-lease',
  templateUrl: './monthly-lease.page.html',
  styleUrls: ['./monthly-lease.page.scss'],
})
export class MonthlyLeasePage implements OnInit {

  constructor(
    private location: Location,    
    private userService : UserService,
    private router : Router) { }

  public monthlyLeases : String[];

  ngOnInit() {
    this.getCreditCard();
  }

  getCreditCard(){
    this.userService.getMonthlyLease().subscribe(response => {
      this.monthlyLeases = response;
    })
  }

  goBack() {
    this.location.back();
  }

}
