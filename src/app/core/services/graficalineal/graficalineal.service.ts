import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-Client/http-client.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Bsensor } from '../../Models/interfaces'
@Injectable({
  providedIn: 'root'
})

export class GraficalinealService {
 private myAppUrl = "https://localhost:7208/"
  private myApiUrl = 'api/sensor'
  constructor(private http: HttpClient) { }

  

  getListTarjetas() {
    const url = `${this.myAppUrl}${this.myApiUrl}`;

    return this.http
      .get(url)
      .toPromise()
      .then((data) => {
        return data;
      });
    }
}
