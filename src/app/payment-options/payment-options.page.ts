import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { ActivatedRoute, Router }    from '@angular/router';
import { Lease }             from '../interfaces/Lease';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.page.html',
  styleUrls: ['./payment-options.page.scss'],
})
export class PaymentOptionsPage implements OnInit {
  public monthly: boolean = false;
  public userId: number;
  public lease: Lease;
  public leaseValue: any;
  public totalValue: any;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('leaseValue'))
      this.leaseValue = this.route.snapshot.paramMap.get('leaseValue');
    if (this.route.snapshot.paramMap.get('monthly'))
      this.monthly = true;
    if (this.route.snapshot.paramMap.get('value'))
      this.totalValue = this.route.snapshot.paramMap.get('value');
  }

  generateLease(leaseType?: string) {
    this.lease.user_id = this.userId;
    this.lease.start_lease = new Date();
    this.lease.end_lease = new Date();
    if (leaseType == 'monthly') {
      this.lease.monthly = true;
      this.lease.end_lease.setMonth(this.lease.end_lease.getMonth() + 1);
      this.lease.hour = false;
      this.lease.monthly_price = this.leaseValue;
    }
    else {
      this.lease.monthly = false;
      this.lease.hour = true;
      this.lease.hour_price = this.leaseValue;
    }
  }

  pay() {
    if (this.monthly) {
      this.generateLease('monthly');
      this.router.navigate(['/paid-page']);
    }
    else {
      this.generateLease()
      this.router.navigate(['/reserve'])
    }
      
    console.log('locação', this.lease)
    
  }

  getUser() {
    this._userService.getUser().subscribe(user => {
      this.userId = user.id
    })
  }

  goBack() {
    this.location.back();
  }

}
