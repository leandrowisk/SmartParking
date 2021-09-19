import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, Router }           from '@angular/router';
import { User }                             from '../interfaces/User';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.page.html',
  styleUrls: ['./finish-register.page.scss'],
})
export class FinishRegisterPage implements OnInit {
  
  public user: User;
  public hide: boolean = true;
  public checked: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    this.user = JSON.parse(this.route.snapshot.params['user']);
    this.user.password = '';
    this.user.car = {
      model: '',
      color: '',
      brand:  ''
    }
  }

  finishRegister() {
    this.router.navigate(['/tabs/home'])
  }

}