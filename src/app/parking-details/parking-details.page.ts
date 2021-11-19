import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router }    from '@angular/router';
import { Parking }           from '../interfaces/Parking';
import { ParkingService }    from '../services/Parking.service';
import { Location }          from '@angular/common';
import { MatCheckbox }       from '@angular/material/checkbox';
import { UserService }       from '../services/user.service';
import { Lease }             from '../interfaces/Lease';
import { MessageService }            from './../services/message.service';


@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.page.html',
  styleUrls: ['./parking-details.page.scss'],
})

export class ParkingDetailsPage implements OnInit {

  constructor(public route: ActivatedRoute,
              public parkingService:ParkingService,
              private _messageService: MessageService,
              public location: Location,
              private router: Router) { }

  public rent: boolean = false;
  public parking: any;
  public totalServiceValue: number;
  public subtotal: number;
  public rating: number[];
  public checked: boolean = false;
  public monthly: boolean = false;
  public reserveStart: Date;
  public reserveEnd: Date;
  public userId: number;
  public lease: Lease;
  public servicesSelected: number[];

  ngOnInit() {
    this.parking = {
      "id":0,
      "name":"",
      "hour_price":0,
      "user_avaliation":1,
      "address":"",
      "reference_point":"",
      "image_url":"",
      "monthly":true,
      "available_vacancies":0,
      "services_available":[
         {
            "service_id": "",
            "service_name":"",
            "service_price":0
         }
      ]
   };
    this.getParking();
    this.servicesSelected = [];
    this.subtotal = 0;
    this.totalServiceValue = 0;
  }

  rentSpace() {
    this.rent = true;
  }

  getParking() {
    const id : number = Number (this.route.snapshot.paramMap.get('id'));
    this.parkingService.getParking(id).subscribe(parking => {
        this.parking = parking; 
        this.rating = new Array(this.parking.user_avaliation)
    });
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

  addService(event,service) {
    this.checked = true;
    if(event && event.checked) {
      this.servicesSelected.push(service.service_id);
      this.totalServiceValue = this.totalServiceValue + parseFloat(service.service_price);
      this.subtotal += parseFloat(service.service_price);
    }
    else {
      let index = this.servicesSelected.indexOf(service.service_id);
      this.servicesSelected = this.servicesSelected.splice(index,0);
      this.totalServiceValue = this.totalServiceValue - parseFloat(service.service_price);
      this.subtotal -= parseFloat(service.service_price);
    } 
  }

  goBack(): void {
    this.location.back();
  }

  rentVacancy() {
    if (this.monthly)
      this.router.navigate(['/payment-options', { 
        monthly: this.monthly, 
        value: this.subtotal, 
        leaseValue: this.parking.monthly_price, 
        id_establishment: this.parking.id
      }])
    else {
      this.reserveStart = new Date();
      this.reserveEnd = new Date();
      this.reserveEnd.setMinutes(this.reserveStart.getMinutes() + 15);

      let reserveLease = {
        'id_establishment':this.parking.id,
        'reserve_start': this.reserveStart,
        'reserve_end': this.reserveEnd,
        'servicesSelected':this.servicesSelected
      }

      this.parkingService.scheduleRents(reserveLease).subscribe(response => {
        if (response["mensagem"]=="true"){
          this.router.navigate(['/reserve']);
        }else{
          console.log(response["mensagem"]);
          this._messageService.showMessage(response["mensagem"], 5000);
        }
      })
    }
  }

  reserveVacancy() {
    let reserveLease = {
      'user_id': this.userId,
      'reserve_start': this.reserveStart,
      'reserve_end': this.reserveStart,
    }
  }
 
}