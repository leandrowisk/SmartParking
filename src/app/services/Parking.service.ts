import { parkings, Users }       from './../mocks/Parking-mock';
import { Observable, of }        from "rxjs";
import { Injectable }            from '@angular/core';
import { Parking }               from "../interfaces/Parking";
import { User }                  from '../interfaces/User';


@Injectable({
    providedIn: 'root',
})


export class ParkingService {
    
   getParkings(): Observable<Parking[]> {
       return of(parkings);
   }

   getParking(id: number){
       const parking = parkings.find(park => park.id == id)
       console.log('getParking',parking)
       return of(parking)
   }

   register(user: User) {
        Users.push(user);
        console.log('Usuário cadastrado: ',Users);
   }
}
