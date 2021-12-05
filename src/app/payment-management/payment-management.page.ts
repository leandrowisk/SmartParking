import { AlertController }   from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { Router }            from '@angular/router';
import { MessageService }    from './../services/message.service';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.page.html',
  styleUrls: ['./payment-management.page.scss'],
})
export class PaymentManagementPage implements OnInit {

  constructor(
    private location: Location,
    private alertController: AlertController,
    private userService : UserService,
    private _messageService: MessageService,
    private router : Router
  ) { }

    public cards : String[];
    public sucessMessage: string = 'Dados atualizados com sucesso!';
    
  ngOnInit() {
     this.getCreditCard();
  }

   getCreditCard(): void{
     this.userService.getCreditCards().subscribe(response => {
       this.cards = response;
     })
   }

   removeCreditCard(id): void{
    this.userService.removeCreditCard(id).subscribe(response => {
      if (response["mensagem"]=="true"){
        this.router.navigate(['/tabs/options']);
        this._messageService.showMessage(this.sucessMessage, 5000)
      }else {
        this._messageService.showMessage(response["mensagem"], 5000);
      }
    })
  }

  goBack() {
    this.location.back();
  }

  async removeCardConfirmation(id) {
    const alert = await this.alertController.create({
      message: 'Tem certeza que deseja remover este cartão?',
      buttons: ['Não', {
        text: 'Sim',
        handler: (data: any) => {
          this.removeCreditCard(id);
        }
      }]
    });
    alert.present();
  }
}
