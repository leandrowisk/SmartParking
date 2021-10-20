import { Component, OnInit }                from '@angular/core';
import { ActivatedRoute, Router }           from '@angular/router';
import { User }                             from '../interfaces/User';
import { UserService } from '../services/user.service';

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
              private router: Router,
              private _userService: UserService
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
    this._userService.register(this.user).subscribe(response => {
    if (response == 'Cadastro criado com sucesso!') {
       this.router.navigate(['/tabs/home']);
    }
    else
       alert('erro ao cadastrar');
    })
  }
}