import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import { User }              from '../interfaces/User';
import { ParkingService }    from '../services/Parking.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  public user: User;

  constructor(private alertController: AlertController,
              private parkingService: ParkingService,
              private router: Router
    ) { }

    ngOnInit() {
      this.initializeUser();
      this.getUser();
    }

    initializeUser() {
      this.user =  {
        "id": 0,
        "name": '',
        "email": '',
        "address": "",
        "cpf": "",
        "birthday": "",
        "phone": '',
        "sex": "",
        "car":{
          "color": "",
          "category": '',
          "brand": '',
          "model": '',
          'renavam': 0,
          'plaque': '',
          'chassi': ''
      },
        "password": ""
    }
    }
  
   getUser(): void{
     this.parkingService.getUser().subscribe(response => {
       this.user = response;
     })
   }
  
  async logoutConfirmationMessage() {
   const alert = await this.alertController.create({
      message: 'Tem certeza que deseja sair',
      buttons: ['Cancelar', {
        text: 'Sim',
        handler: (data: any) => {
          this.router.navigate(['/login-page']);
        }
      }]
    });
    alert.present();
  }
}
