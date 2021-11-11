import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/User';
import { user } from '../mocks/Parking-mock';
import { RequestsService } from './requests.service';

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
}
