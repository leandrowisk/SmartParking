import { parkings, user }         from './../mocks/Parking-mock';
import { Observable, of }         from "rxjs";
import { Injectable }             from '@angular/core';
import { Filter, Parking }        from "../interfaces/Parking";
import { User }                   from '../interfaces/User';
import { HttpClient, 
         HttpParams }             from '@angular/common/http';
import { RequestsService }        from './requests.service';


@Injectable({
    providedIn: 'root',
})


export class ParkingService {

   public parkings: Array<Parking>;
   public path: string;

   constructor(private httpClient: HttpClient,
               private _requests: RequestsService
   ){}
   
//    getParkings(): Observable<Parking[]> {
//        this.path = this._requests.api() + '/estacionamentos';
//        return this.httpClient.get<Parking[]>(this.path);
//    }

//    getParking(id: number): Observable<Parking> {
//        this.path = this._requests.api() + '/estacionamento';
//        let params = new HttpParams().set('id_estabelecimento', id)
//        return this.httpClient.get<Parking>(this.path, { params })
//    }

   getParkings(): Observable<Parking[]> {
       return of(parkings);
   }

   getParking(id: number){
       const parking = parkings.find(park => park.id == id)
       return of(parking)
   }

   public filter(filter: Filter) {
       const results = parkings.find(
           parking => {
            parking.name == filter.name ||
            parking.hour_price == filter.price ||
            parking.user_avaliation == filter.user_avaliation
           }
       )
       return of(results)
   }
}
