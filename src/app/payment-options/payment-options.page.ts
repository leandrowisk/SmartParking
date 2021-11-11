import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.page.html',
  styleUrls: ['./payment-options.page.scss'],
})
export class PaymentOptionsPage implements OnInit {
  public leaseValue: any;

  constructor(private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('value'))
      this.leaseValue = this.route.snapshot.paramMap.get('value')
  }

  pay() {}

  goBack() {
    this.location.back();
  }

}
