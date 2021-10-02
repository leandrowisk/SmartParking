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

  constructor(
    private parkingService: ParkingService,
    private location: Location,
    private router: Router
    ) { }

  public user: User;

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    this.parkingService.getUser().subscribe(response => {
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
