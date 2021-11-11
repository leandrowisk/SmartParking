import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  public apiUrl: string = 'http://127.0.0.1:5000';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
	this.api();
  }

  api(): string {
	  this.apiUrl = 'http://127.0.0.1:5000'
	  return this.apiUrl;
  }

  get(url: string = this.apiUrl, params?: HttpParams): Observable<any> {
       return this.httpClient.get(this.apiUrl, {params})
  }

  post(params: any): Observable<any> {		
		return this.httpClient.post(this.apiUrl, params);
  }
}
