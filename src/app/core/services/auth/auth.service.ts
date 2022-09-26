import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../http-Client/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApi = environment.urlApi;

  constructor(private http: HttpClient,private _httpClient: HttpClientService ) {}

  profile() {
    return this._httpClient.get(`${this.baseApi}/user-profile`);
  }

  register(user: any) {
    return this.http.post(`${this.baseApi}/user`, user);
  }

  login(user: any) {
    return this.http.post(`${this.baseApi}/login`, user);
  }

  logout() {
    return this.http.get(`${this.baseApi}/logout`);
  }

}
