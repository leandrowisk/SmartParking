import { MessageService }            from './../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { ParkingService }    from '../services/Parking.service';
import { Router }            from '@angular/router';
import { FormBuilder, 
  FormGroup, 
  Validators,   
  FormControl }                   from '@angular/forms';

@Component({
  selector: 'app-monthly-lease',
  templateUrl: './monthly-lease.page.html',
  styleUrls: ['./monthly-lease.page.scss'],
})
export class MonthlyLeasePage implements OnInit {
  public acess: boolean;
  form: FormGroup;
  idLease: number;
  password: String;
  public hide = true;
  public sucessMessage: string = 'Dados atualizados com sucesso!'
  
  constructor(
    private location: Location,    
    private parkingService : ParkingService,
    private _messageService: MessageService,
    private router : Router,
    private formBuilder: FormBuilder) { }

  public monthlyLeases : String[];
  public mLeases: any;

  ngOnInit() {
    this.getMonthlyLease();
    this.acess = true;
    this.validateFormFields();
    this.mLeases = {
      "idLease" : 0,
      "password": ""
    };
  }

  validateFormFields() {
    this.form = this.formBuilder.group({
      password: [this.password, Validators.required],
    });
  }

   getMonthlyLease(){
     this.parkingService.getMonthlyLease().subscribe(response => {
       this.monthlyLeases = response;
     })
   }

  save(){
    this.mLeases.idLease = this.idLease;
    this.mLeases.password = this.form.value.password;
    this.parkingService.cancelMonthlyLease(this.mLeases).subscribe(response => {
      if (response["mensagem"]=="true"){
        this.router.navigate(['/tabs/options']);
        this._messageService.showMessage(this.sucessMessage, 5000)
      }else{
        console.log(response["mensagem"]);
        this._messageService.showMessage(response["mensagem"], 5000);
      }
    })
  }

  goBack() {
    this.location.back();
  }

  accept(id) {
    this.idLease = id
    this.acess = false;
  }

}
