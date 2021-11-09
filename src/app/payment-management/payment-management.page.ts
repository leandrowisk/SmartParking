import { AlertController }   from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { UserService }       from '../services/user.service';
import { Router }            from '@angular/router';


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
    private router : Router
  ) { }

    public cards : String[];
    
  ngOnInit() {
    this.getCreditCard();
  }

  getCreditCard(): void{
    this.userService.getCreditCards().subscribe(response => {
      this.cards = response;
    })
  }

  goBack() {
    this.location.back();
  }

  async removeCardConfirmation() {
    const alert = await this.alertController.create({
       message: 'Tem certeza que deseja remover este cartão?',
       buttons: ['Não', 'Sim']
     });
     alert.present();
  }
}
