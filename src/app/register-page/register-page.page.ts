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
  }
}
