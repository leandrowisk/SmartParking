import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  public hide: boolean = true;
  public params: Object;
  public email: string;
  public password: string;

  constructor(private loginService: LoginService,
              private router: Router) { }
  

  ngOnInit() {
  }

  login() {
    this.params = JSON.stringify({'email': this.email, 'password': this.password})
    console.log('parametros enviados', this.params)
    this.loginService.login(this.params).subscribe(response => {
        if(response == 'Logado!')
          this.router.navigate(['/tabs/home']);
        else
          alert('Usuário ou senha incorretos!')
    });
  }

}
