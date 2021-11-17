import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
<<<<<<< Updated upstream
=======
import { ActivatedRoute, Router }    from '@angular/router';
import { Lease }             from '../interfaces/Lease';
import { UserService } from '../services/user.service';
import { ParkingService }    from '../services/Parking.service';
import { MessageService }            from './../services/message.service';
>>>>>>> Stashed changes


@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.page.html',
  styleUrls: ['./payment-options.page.scss'],
})
export class PaymentOptionsPage implements OnInit {
<<<<<<< Updated upstream

  constructor(private location: Location) { }

  ngOnInit() {
=======
  public monthly: boolean = false;
  public userId: number;
  public lease: Lease;
  public leaseValue: any;
  public totalValue: any;
  public id_establishment: any
  public id_credit_card:number;
  public creditCards: any[];
  public asDefaultBoolean: boolean = false;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private _userService: UserService,
              private _messageService: MessageService,
              private parkingService:ParkingService) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('leaseValue'))
      this.leaseValue = this.route.snapshot.paramMap.get('leaseValue');
    if (this.route.snapshot.paramMap.get('monthly'))
      this.monthly = true;
    if (this.route.snapshot.paramMap.get('value'))
      this.totalValue = this.route.snapshot.paramMap.get('value');
    if (this.route.snapshot.paramMap.get('id_establishment'))
      this.id_establishment = this.route.snapshot.paramMap.get('id_establishment');

    this.creditCards = [];

    this.lease = {
      'id_establishment': 0,
      'creditCard':{},
      'monthly': true,
      'monthly_price': 0,
      'hour': false,
      'hour_price': 0,
      'start_lease': new Date(),
      'end_lease': new Date(),
    }
    
    this.getCreditCards();
  }

  generateLease(leaseType?: string) {
    this.lease.id_establishment = this.id_establishment
    this.lease.creditCard = {
      "id_card": this.id_credit_card,
      "asDefault": this.asDefaultBoolean
    };
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
      this.addMonthlyLease();
    }
    else {
      this.generateLease()
      this.router.navigate(['/reserve'])
    }
  }

  getUser() {
    this._userService.getUser().subscribe(user => {
      this.userId = user.id
    })
>>>>>>> Stashed changes
  }

  addMonthlyLease(){
    this.parkingService.addMonthlyLease(this.lease).subscribe(response => {
      if (response["mensagem"]=="true"){
         this.router.navigate(['/paid']);
    }else{
      console.log(response["mensagem"]);
      this._messageService.showMessage(response["mensagem"], 5000);
      }
    }
    )
  }

  getCreditCards(){
    this._userService.getCreditCards().subscribe(response => {
        this.creditCards = response;
     });
  }

  goBack() {
    this.location.back();
  }

  setIdCreditCard(id){
    this.id_credit_card = id;
  }

}
