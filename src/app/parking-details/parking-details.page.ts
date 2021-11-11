import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { Parking }           from '../interfaces/Parking';
import { ParkingService }    from '../services/Parking.service';
import { Location }          from '@angular/common';
import { MatCheckbox }       from '@angular/material/checkbox';


@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.page.html',
  styleUrls: ['./parking-details.page.scss'],
})

export class ParkingDetailsPage implements OnInit {

  constructor(public route: ActivatedRoute,
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

  ngOnInit() {
    this.getParking();
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

  goBack(): void {
    this.location.back();
  }

  rentVacancy() {
    if (this.monthly)
      this.router.navigate(['/payment-options', { monthly: this.monthly, value: this.subtotal }])
    else
      this.router.navigate(['/tabs/QRCode'])
  }

}