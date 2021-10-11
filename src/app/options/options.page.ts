import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async logoutConfirmationMessage() {
   const alert = await this.alertController.create({
      message: 'Tem certeza que deseja sair',
      buttons: ['Cancelar', 'Sair']
    });
    alert.present();
  }
}
