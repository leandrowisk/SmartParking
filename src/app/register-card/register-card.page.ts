import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { MessageService }    from '../services/message.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.page.html',
  styleUrls: ['./register-card.page.scss'],
})
export class RegisterCardPage implements OnInit {

  constructor(private location: Location,
              private userService : UserService,
              private _messageService: MessageService) { }

  ownerName: String;
  numberCard: String;
  expirationDate: Date;
  secCode : number
  public params: Object;
  public sucessMessage: string = 'Cartão Adicionado';
  public errorMessage: string = 'Erro ao inserir';

  ngOnInit() {
  }

  save(){
     this.params = JSON.stringify({'ownerName': this.ownerName, 'numberCard': this.numberCard,
                                   'expirationDate':this.expirationDate,'secCode':this.secCode})
     this.userService.addCreditCards(this.params).subscribe(response => {
         if(response['mensagem'] == 'true')
            this._messageService.showMessage(this.sucessMessage, 5000)
         else
           this._messageService.showMessage(this.errorMessage, 5000)
     });
  }

  goBack() {
    this.location.back();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
