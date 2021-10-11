import { AlertController }   from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';


@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.page.html',
  styleUrls: ['./payment-management.page.scss'],
})
export class PaymentManagementPage implements OnInit {

  constructor(
    private location: Location,
    private alertController: AlertController
  ) { }

  ngOnInit() {
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
