import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
<<<<<<< Updated upstream
=======
import { MessageService } from '../services/message.service';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
              private router: Router) { }
  
=======
    private router: Router,
    private _messageService: MessageService) { }

>>>>>>> Stashed changes

  ngOnInit() {
  }

  login() {
<<<<<<< Updated upstream
    //this.router.navigate(['/tabs/home']);
 
    this.params = JSON.stringify({'email': this.email, 'password': this.password})
    console.log('parametros enviados', this.params)
    this.loginService.login(this.params).subscribe(response => {
        if(response['mensagem'] == 'true')
          this.router.navigate(['/tabs/home']);
        else
          alert('Usuário ou senha incorretos!')
    });
=======

       this.params = JSON.stringify({'email': this.email, 'password': this.password})
       console.log('parametros enviados', this.params)
       this.loginService.login(this.params).subscribe(response => {
           if(response['mensagem'] == 'true')
            this.router.navigate(['/tabs/home']);
          else
             this._messageService.showMessage(this.errorMessage, 5000);
       });
>>>>>>> Stashed changes
  }
 
}
