import { Component, OnInit }     from '@angular/core';
import { Location }              from '@angular/common';
import { Historic, ELEMENT_DATA} from '../interfaces/User';
import { ParkingService }    from '../services/Parking.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {
  
  constructor(
    private parkingService: ParkingService,
    private location: Location,
    private router: Router
    ) { }
  
  public teste : String = "oi"
  public historics : String[];

  ngOnInit() {
    this.getHistoric();
  }

  getHistoric(): void{
    this.parkingService.getParkingHistoric().subscribe(response => {
      this.historics = response;
      console.log(response); 
    })
  }

  goBack() {
    this.location.back();
  }

}
