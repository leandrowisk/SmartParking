import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { user } from '../mocks/Parking-mock';
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

  getCarCategories() {
    this.path = this._requests.api() + '/';
    return this.httpClient.get(this.path);
  }

  getCarBrand(carCategory: Object) {
    this.path = this._requests.api() + '/';
    return this.httpClient.post(this.path, carCategory);
  }

  getCarModel(carBrand: Object) {
    this.path = this._requests.api() + '/';
    return this.httpClient.post(this.path, carBrand);
  }

  getUser(): Observable<User> {
    return of(user);
  }

  // getCreditCards(): Observable<any> {
  //   this.path = this._requests.api() + '/creditCard';  
  //   return this.httpClient.get(this.path);
  //   //return null
  // }

  // addCreditCards(params: Object): Observable<any> {
  //   this.path = this._requests.api() + '/addCreditCard';  
  //   return this.httpClient.post(this.path, params);
  // }

  // getMonthlyLease(): Observable<any> {
  //   this.path = this._requests.api() + '/monthlyLease';  
  //   return this.httpClient.get(this.path);
  // }

}
