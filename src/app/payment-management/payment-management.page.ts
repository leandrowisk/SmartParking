import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';


@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.page.html',
  styleUrls: ['./payment-management.page.scss'],
})
export class PaymentManagementPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
