import { parkings, user }       from './../mocks/Parking-mock';
import { Observable, of }        from "rxjs";
import { Injectable }            from '@angular/core';
import { Filter, Parking }               from "../interfaces/Parking";
import { User }                  from '../interfaces/User';
import { HttpClient }            from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})


export class ParkingService {

   constructor(private httpClient: HttpClient){}

   
   getParkings(): Observable<Parking[]> {
       return of(parkings);
   }

   getParking(id: number){
       const parking = parkings.find(park => park.id == id)
       return of(parking)
   }

   getUser(): Observable<User> {
    return of(user);
}

   public filter(filter: Filter) {
       const results = parkings.find(
           parking => {
            parking.name == filter.name ||
            parking.price == filter.price ||
            parking.zone == filter.zone || 
            parking.user_avaliation == filter.user_avaliation
           }
       )
       return of(results)
   }
}
