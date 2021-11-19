import { Component }      from '@angular/core';
import { Router }         from '@angular/router';
import { NavController }  from '@ionic/angular';
import { Parking }        from '../interfaces/Parking';
import { ParkingService } from '../services/Parking.service';


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
    this.getParkings();
  }

  getParkings(): void{
     this.parkingService.getParkings().subscribe(response => {
     this.parkings = response;
     })
   }

  getParking(parkingId : number) {
    this.parkingService.getParking(parkingId).subscribe(response =>{
      this.park = response;
	  this.router.navigate(["/details",{parking:JSON.stringify(this.park)}])
    })
  }

  rating(rating: number){
    return new Array(rating);
  }
}
