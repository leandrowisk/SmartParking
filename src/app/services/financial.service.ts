import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  public path: string;

  constructor(private _requests: RequestsService,
              private httpClient: HttpClient) { }

  validateQrCode(qrCode: Object) {
    this.path = this._requests.api() + '/qrCode';
    return this.httpClient.post(this.path, qrCode);
  }

  getLease(userId: number) {
    this.path = this._requests.api() + '/lease';
    let params = new HttpParams().set('user_id', userId)
    return this.httpClient.get(this.path, {'params': params});
  }

}

