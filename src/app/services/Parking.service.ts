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
   
    getParkings(): Observable<Parking[]> {
        this.path = this._requests.api() + '/parkingLots';
        return this.httpClient.get<Parking[]>(this.path);
    }

    getParking(id: number): Observable<any> {
        this.path = this._requests.api() + '/parkingLotsById';
        let params = new HttpParams().set('id_estabelecimento', id)
        console.log(id);
	    return this.httpClient.get(this.path,{'params' : params})
    }

    getParkingHistoric(): Observable<any> {
        this.path = this._requests.api() + '/historic';
        return this.httpClient.get(this.path);
        //let params = new HttpParams().set('id_user', id)
	    //return this.httpClient.get(this.path,{'params' : params})
    }
/*

   getParkings(): Observable<Parking[]> {
       return of(parkings);
   }

   getParking(id: number){
        let params = new HttpParams().set('id', id)
        this.path = this._requests.api() + '/parkingLotsById';
        return this.httpClient.get<Parking>(this.path,{'params' : params});
   }
*/
<<<<<<< Updated upstream
   getUser(): Observable<User> {
	this.path = this._requests.api() + '/user';
    return this.httpClient.get<User>(this.path);
    //return of(user);
}
=======
    getUser(): Observable<User> {
    this.path = this._requests.api() + '/user';
    return this.httpClient.get<User>(this.path);
    //return of(user);
    }

<<<<<<< Updated upstream
    savePerfilEdits(params: Object){
        this.path = this._requests.api() + '/updateUserData';
        return this.httpClient.post(this.path, params);
    }
>>>>>>> Stashed changes
=======
   getMonthlyLease():Observable<any>{
    this.path = this._requests.api() + '/monthlyLease';
    return this.httpClient.get<User>(this.path);
    }

    addMonthlyLease(params: any):Observable<any>{
        this.path = this._requests.api() + '/addMonthlyLease';  
        return this.httpClient.post(this.path, params);
    }

    cancelMonthlyLease(params: any) {
        this.path = this._requests.api() + '/cancelMonthlyLease';  
        return this.httpClient.post(this.path, params);
    }

    scheduleRents(params: any) {
        this.path = this._requests.api() + '/scheduleRents';  
        return this.httpClient.post(this.path, params);
    }

    getUser(): Observable<User> {
    this.path = this._requests.api() + '/user';
     return this.httpClient.get<User>(this.path);
    }
>>>>>>> Stashed changes

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
