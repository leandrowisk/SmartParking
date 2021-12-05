import { Component, OnInit }     from '@angular/core';
import { Location }              from '@angular/common';
import { ParkingService }        from '../services/Parking.service';



@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {
  
  constructor(private parkingService: ParkingService,
              private location: Location) { }
  
  public historics : String[];

  ngOnInit() {
    this.getHistoric();
  }

  getHistoric(): void{
    this.parkingService.getParkingHistoric().subscribe(response => {
      this.historics = response;
    })
  }

  goBack() {
    this.location.back();
  }

}
