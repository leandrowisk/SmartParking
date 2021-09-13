import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
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
              public location: Location) { }

  public rent: boolean = false;
  public parking: Parking;
  public totalValue: number;
  public rating;

  rentSpace() {
    this.rent = true;
  }

  getParking() {
    const id : number = Number (this.route.snapshot.paramMap.get('id'));
    this.parkingService.getParking(id).subscribe(parking => this.parking = parking);
    this.rating = new Array(this.parking.user_avaliation)
    this.totalValue = this.parking.price;
  }
  
  ngOnInit() {
    this.getParking();
  }

  addService($event) {
    if($event && $event.checked)
      this.totalValue = this.totalValue + parseFloat($event.source.value);
    else
      this.totalValue = this.totalValue - parseFloat($event.source.value);
  }

  goBack(): void {
    this.location.back();
  }

}