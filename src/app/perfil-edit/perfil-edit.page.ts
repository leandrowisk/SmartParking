import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { User }              from '../interfaces/User';
import { Location }          from '@angular/common';
import { ParkingService }    from '../services/Parking.service';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private location: Location,
              private parkingService: ParkingService,) { }
<<<<<<< Updated upstream

=======
              
  public params: Object;
>>>>>>> Stashed changes
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

  ngOnInit() {
    if (JSON.parse(this.route.snapshot.params['user']))
      this.user = JSON.parse(this.route.snapshot.params['user']);
    this.getUser();
  }

  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
      this.user = response;
    })
<<<<<<< Updated upstream
=======
  }

  savePerfilEdits(): void{
    this.params = JSON.stringify(this.user);
    this.parkingService.savePerfilEdits(this.params).subscribe(response => {
      console.log(response);
    })
>>>>>>> Stashed changes
  }

  goBack() {
    this.location.back();
  }

}
