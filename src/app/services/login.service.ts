import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  public path: string;
  constructor(private httpClient: HttpClient,
              private _requests: RequestsService) { }
  
  
  login(params: Object) {
    this.path = this._requests.api() + '/login';
    return this.httpClient.post(this.path, params);
  }
}
