import { Component, OnInit } from '@angular/core';
import { User }              from '../interfaces/User';
import { ParkingService }    from '../services/Parking.service';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-register-informations',
  templateUrl: './register-informations.page.html',
  styleUrls: ['./register-informations.page.scss'],
})
export class RegisterInformationsPage implements OnInit {
<<<<<<< Updated upstream
=======
  public user: any;
  public car: User;
  public perfilImage: any = "";
  public imageUrl: string = '../../assets/images/slack perfil.jpeg';
  public selectedImage;
>>>>>>> Stashed changes

  constructor(
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
	
  public car: User;
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
          'plate': '',
          'chassi': ''
      },
        "password": ""
    }
  }
>>>>>>> Stashed changes

  ngOnInit() {
    this.initializeUser();
    this.getUser();
  }

<<<<<<< Updated upstream
  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
=======
  getUser() {
    this.userService.getUser().subscribe(response => {
>>>>>>> Stashed changes
      this.user = response;
    })
  }

  goBack() {
    this.location.back();
  }

  editPage() {
    this.router.navigate(['/perfil-edit', { user: JSON.stringify(this.user)}])
  }


}
