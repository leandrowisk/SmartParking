import { Component }      from '@angular/core';
import { Router }         from '@angular/router';
import { NavController }  from '@ionic/angular';
import { Parking }        from '../interfaces/Parking';
import { ParkingService } from '../services/Parking.service';
import { parkings }       from '../mocks/Parking-mock'; 
import { Observable, of } from 'rxjs'      

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})


export class HomePage {
  
  public parkings: Parking[];
  public park: Parking;
  public ratings;

  constructor(
    public parkingService: ParkingService,
    public navController: NavController,
    public router: Router,
  ) {}

  ngOnInit(){
    this.getParkings().subscribe(parkings=> {
      this.parkings = parkings
    });
  }

  getParkings() {
    return of(parkings)
  }

  // getParkings(): void{
  //   this.parkingService.getParkings().subscribe(response => {
  //   this.parkings = response;
	// console.log("Liga só: ", this.parkings);
  //   })
  // }

  getParking() {
    this.parkingService.getParking(this.parkings['id']).subscribe(parking => {
       this.park = parking
    })
  }

  // getParking(parkingId : number) {
  //   console.log("Id do home, está triste: ", parkingId)
  //   this.parkingService.getParking(parkingId).subscribe(response =>{
  //     this.park = response;
	//   this.router.navigate(["/details",{parking:JSON.stringify(this.park)}])
  //   })
  // }

  rating(rating: number){
    return new Array(rating);
  }
}
