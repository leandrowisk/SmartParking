import { Component, OnInit } from '@angular/core';
import { AlertController }   from '@ionic/angular';
import { User }              from '../interfaces/User';
import { ParkingService }    from '../services/Parking.service';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(
	private alertController: AlertController,
    private parkingService: ParkingService,
    private location: Location,
    private router: Router
    ) { }

<<<<<<< Updated upstream
	public user: User =
		{
		"name": '',
		"email": '',
		"address": "",
		"cpf": "",
		"birthday": "",
		"sex": "",
		"car":{
			"color": "",
			"brand": "",
			"model": "" },
		"password": ""};
		
  ngOnInit() {
	  this.getUser();
  }
  
  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
      this.user = response;
    })
  }
=======
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
   

  ngOnInit() {
    this.initializeUser();
	  this.getUser();
  }
  
   getUser(): void{
     this.parkingService.getUser().subscribe(response => {
       this.user = response;
     })
   }
>>>>>>> Stashed changes
  
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
