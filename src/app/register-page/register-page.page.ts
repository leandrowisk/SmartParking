import { MatSnackBarHorizontalPosition, 
         MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Component, OnInit }           from '@angular/core';
import { User }                        from '../interfaces/User';
import { ParkingService }              from '../services/Parking.service';
import { Router }                      from '@angular/router';
import { UserService }                 from '../services/user.service';
import { FormBuilder, 
         FormGroup, 
         Validators }                from '@angular/forms';
import { Location }                  from '@angular/common';
import { MessageService }            from '../services/message.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public service: ParkingService,
              public userService: UserService,
              public location: Location,
              public router: Router,
              private formBuilder: FormBuilder,
              private _messageService: MessageService) {}

  public user: User;
  public sex = '';
  public invalidParamsMessage: string = 'Dados inválidos, verifique suas informações e tente novamente';
  hide = true;
  public params: any;
  form: FormGroup;
  public emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  public phoneValidator = /^(\(11\) (9\d{4})-\d{4})|((\(1[2-9]{1}\)|\([2-9]{1}\d{1}\)) [5-9]\d{3}-\d{4})$/;
  public birthdayValidator = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  
  ngOnInit() {
    this.user = <User>{};
    this.user.name = '';
    this.user.address = '';
    this.user.sex = '';
    this.user.cpf = ''; 
    this.user.birthday = '';
    this.user.email = '';
    this.validateFormFields();
  }
  
   registerUser() {
     this.params = JSON.stringify(
       {'nome': this.user.name,
        'email': this.user.email,
        'encereco': this.user.address,
        'sexo': this.user.sex,
        'cpf': this.user.cpf,
        'dt_nascimento': this.user.birthday
       })
   }

  validateFormFields() {
    this.form = this.formBuilder.group({
      name: [this.user.name,[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cpf: [this.user.cpf, [ Validators.required, Validators.minLength(11)]],
      email: [this.user.email, Validators.pattern(this.emailValidator)],
      address: [this.user.address, Validators.required],
      phone: [this.user.phone, this.user.phone],
      birthday: [this.user.birthday, Validators.required],
      sex: [this.user.sex, Validators.required]
    });
  }

  next() {
    if (this.form.status == 'INVALID')
      this.invalidParams();
    else {
      this.user = this.form.value;
      this.router.navigate(['/finish-register',  {user: JSON.stringify(this.user), skipLocationChange: true}]);
    }
  }  
   
  invalidParams() {
    this._messageService.showMessage(this.invalidParamsMessage, 5000)
  }

  goBack() {
    this.location.back();
  }
}
