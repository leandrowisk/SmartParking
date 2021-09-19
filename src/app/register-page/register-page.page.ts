import { Component, OnInit }        from '@angular/core';
import { User }                     from '../interfaces/User';
import { ParkingService }           from '../services/Parking.service';
import { Users }                    from '../mocks/Parking-mock';
import { Router }                   from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  constructor(public service: ParkingService,
              public router: Router) {}

  public user: User;
  public sex = '';
  hide = true;
  
  ngOnInit() {
    this.user = <User>{};
    this.user.name = '';
    this.user.address = '';
    this.user.sex = '';
    this.user.cpf = ''; 
    this.user.birthday = '';
    this.user.email = '';
  }

  next() {
    this.router.navigate(['/finish-register',  {user: JSON.stringify(this.user)}]);
  }

}
