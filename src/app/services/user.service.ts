import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
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
}
