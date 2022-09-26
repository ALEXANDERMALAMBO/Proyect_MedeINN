import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private myAppUrl="https://localhost:7208/"
  private myApiUrl= 'api/Sensor/'
    constructor(private http: HttpClient) { }
    getListTarjetas(): Observable<any>{
      return this.http.get(this.myAppUrl + this.myApiUrl);
    }
  }