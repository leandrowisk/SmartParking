import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { RequestsService } from './requests.service';
import { Observable, of }         from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public path: string;

  constructor(private httpClient: HttpClient,
              private _requests: RequestsService) { }

  register(params: User) {
    this.path = this._requests.api() + '/register';  
    return this.httpClient.post(this.path, params);
  }

  getCreditCards(): Observable<any> {
    this.path = this._requests.api() + '/creditCard';  
    return this.httpClient.get(this.path);
    //return null
  }

  addCreditCards(params: Object): Observable<any> {
    this.path = this._requests.api() + '/addCreditCard';  
    return this.httpClient.post(this.path, params);
  }

<<<<<<< Updated upstream
  getMonthlyLease(): Observable<any> {
    this.path = this._requests.api() + '/monthlyLease';  
    return this.httpClient.get(this.path);
  }

}
=======
  getUser(): Observable<any>{
    this.path = this._requests.api() + '/user';
    return this.httpClient.get(this.path);
  }

  updateUser(params: User) {
    this.path = this._requests.api() + '/updateUser';  
    return this.httpClient.post(this.path, params);
  }

   getCreditCards(): Observable<any> {
     this.path = this._requests.api() + '/creditCard';  
     return this.httpClient.get(this.path);
   }

   removeCreditCard(params: any) {
    this.path = this._requests.api() + '/removeCreditCard';  
    return this.httpClient.post(this.path, params);
  }

   addCreditCards(params: Object): Observable<any> {
     this.path = this._requests.api() + '/addCreditCard';  
     return this.httpClient.post(this.path, params);
   }
}
>>>>>>> Stashed changes
