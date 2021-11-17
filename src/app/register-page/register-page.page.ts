import { Component, OnInit }        from '@angular/core';
import { User }                     from '../interfaces/User';
import { ParkingService }           from '../services/Parking.service';
import { Router }                   from '@angular/router';
import { UserService }              from '../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public service: ParkingService,
              public userService: UserService,
              public router: Router) {}

  public user: User;
  public sex = '';
  hide = true;
  public params: any;
  
  ngOnInit() {
    this.user = <User>{};
    this.user.name = '';
    this.user.address = '';
    this.user.sex = '';
    this.user.cpf = ''; 
    this.user.birthday = '';
    this.user.email = '';
  }
  
<<<<<<< Updated upstream
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

  next() {
    this.router.navigate(['/finish-register',  {user: JSON.stringify(this.user)}]);
=======
  // registerUser() {
    // this.params = JSON.stringify(
    //   {'nome': this.user.name,
    //    'email': this.user.email,
    //    'encereco': this.user.address,
    //    'sexo': this.user.sex,
    //    'cpf': this.user.cpf,
    //    'dt_nascimento': this.user.birthday
    //   })
  // }

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
    console.log('form',this.form)
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
>>>>>>> Stashed changes
  }
}
