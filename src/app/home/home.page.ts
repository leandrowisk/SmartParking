import { Component }      from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Parking }        from '../interfaces/Parking';
import { ParkingService } from '../services/Parking.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {
  
  public parking: Parking[];
  public park: Parking;
  public ratings;

  constructor(public parkingService: ParkingService,
              public navController: NavController,
              public router: Router) {}

  ngOnInit(){
    this.getParkings();
    this.getParking();
  }

  getParkings(): void{
    this.parkingService.getParkings().subscribe(response => {

      response.forEach(rating => {
        this.ratings = new Array(rating['user_avaliation']);
        console.log(this.ratings)
      })
      this.parking = response;     
    })
  }

  getParking() {
    this.parkingService.getParking(this.parking['id']).subscribe(response =>{
      this.park = response;
    })
  }
}
