import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.page.html',
  styleUrls: ['./register-card.page.scss'],
})
export class RegisterCardPage implements OnInit {

  constructor(
    private location: Location,
    private userService : UserService,
    private router : Router
  ) { }

  ownerName: String;
  numberCard: String;
  expirationDate: Date;
  secCode : number
  public params: Object;

  ngOnInit() {
  }

  save(){
<<<<<<< Updated upstream
    this.params = JSON.stringify({'ownerName': this.ownerName, 'numberCard': this.numberCard,'expirationDate':this.expirationDate,'secCode':this.secCode})
    console.log('parametros enviados', this.params)
    this.userService.addCreditCards(this.params).subscribe(response => {
        if(response['mensagem'] == 'true')
        alert('Cartão Adicionado')
        else
          alert('Erro ao inserir')
    });
=======
     this.params = JSON.stringify({'ownerName': this.ownerName, 'numberCard': this.numberCard,'expirationDate':this.expirationDate,'secCode':this.secCode})
     console.log('parametros enviados', this.params)
     this.userService.addCreditCards(this.params).subscribe(response => {
      if (response["mensagem"]=="true"){
        this.router.navigate(['/tabs/options']);
        this._messageService.showMessage(this.sucessMessage, 5000)
      }else{
        console.log(response["mensagem"]);
        this._messageService.showMessage(response["mensagem"], 5000);
      }
     });
>>>>>>> Stashed changes
  }
  goBack() {
    this.location.back();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
