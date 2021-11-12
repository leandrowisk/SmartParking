import { UserService }       from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User }              from '../interfaces/User';
import { Location }          from '@angular/common';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-register-informations',
  templateUrl: './register-informations.page.html',
  styleUrls: ['./register-informations.page.scss'],
})
export class RegisterInformationsPage implements OnInit {
  public user: User;
  public car: User;
  public perfilImage: any = "";
  public imageUrl: string = '../../assets/images/slack perfil.jpeg';
  public selectedImage;

  constructor(
    private userService: UserService,
    private location: Location,
    private router: Router
    ) { }

    
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
    this.getUser();
  }

  getUser(): void{
    this.userService.getUser().subscribe(response => {
      this.user = response;
    })
  }

  goBack() {
    this.location.back();
  }

  editPage() {
    this.router.navigate(['/perfil-edit', { user: JSON.stringify(this.user) }])
  }


}
