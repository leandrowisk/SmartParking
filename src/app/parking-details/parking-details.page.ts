import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { Parking }           from '../interfaces/Parking';
import { ParkingService }    from '../services/Parking.service';
import { Location }          from '@angular/common';
import { MatCheckbox }       from '@angular/material/checkbox';
import { UserService }       from '../services/user.service';
import { Lease }             from '../interfaces/Lease';


@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.page.html',
  styleUrls: ['./parking-details.page.scss'],
})

export class ParkingDetailsPage implements OnInit {

  constructor(public route: ActivatedRoute,
              private _userService: UserService,
              public parkingService:ParkingService,
              public location: Location,
              private router: Router) { }

  public rent: boolean = false;
  public parking: Parking;
  public totalServiceValue: number;
  public subtotal: number;
  public rating;
  public checked: boolean = false;
  public monthly: boolean = false;
  public reserveStart: Date;
  public reserveEnd: Date;
  public userId: number;
  public lease: Lease;

  ngOnInit() {
    this.getParking();
    // if (this.route.snapshot.params['parking']) 
    //     this.parking = JSON.parse(this.route.snapshot.params['parking']);
    //     this.rating = new Array(this.parking.user_avaliation);
    //     this.subtotal = this.parking.hour_price;
    //     console.log('parking detail: ',this.parking);
  }

  rentSpace() {
    this.rent = true;
  }

  getParking() {
    const id : number = Number (this.route.snapshot.paramMap.get('id'));
    this.parkingService.getParking(id).subscribe(parking => this.parking = parking);
    this.rating = new Array(this.parking.user_avaliation)
    this.totalServiceValue = 0;
    this.subtotal = this.parking.hour_price;
  }
  
  addMonthly(event) {
    this.checked = true;
    if (event && event.checked)
      this.monthly = true;
    else
      this.monthly = false;
  //   this.parkingService.getParking(id).subscribe(response => {this.parking = response;});
	// console.log(this.parking);
  //   this.rating = new Array(this.parking.user_avaliation);
  //   this.totalValue = this.parking.price;
  }

  addService(event) {
    this.checked = true;
    if(event && event.checked) {
      this.totalServiceValue += this.totalServiceValue + parseFloat(event.source.value);
      this.subtotal += parseFloat(event.source.value)
    }
    else {
      this.totalServiceValue -= this.totalServiceValue - parseFloat(event.source.value);
      this.subtotal -= parseFloat(event.source.value)
    } 
  }

  getUser() {
    this._userService.getUser().subscribe(user => {
      this.userId = user.id;
    })
  }
  goBack(): void {
    this.location.back();
  }

  rentVacancy() {
    if (this.monthly)
      this.router.navigate(['/payment-options', { monthly: this.monthly, value: this.subtotal, leaseValue: this.parking.monthly_price }])
    else {
      this.reserveStart = new Date();
      this.reserveStart = new Date();
      this.reserveStart.setMinutes(this.reserveStart.getMinutes() + 15);
      this.router.navigate(['/reserve'])
    }
  }

  reserveVacancy() {
    let reserveLease = {
      'user_id': this.userId,
      'reserve_start': this.reserveStart,
      'reserve_end': this.reserveStart,
    }
    console.log('reserva normal', reserveLease);
  }
 
}