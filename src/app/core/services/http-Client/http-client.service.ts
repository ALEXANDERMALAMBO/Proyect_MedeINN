import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppHelpersService } from '../../helpers/app/app-helpers.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient, private appUtil: AppHelpersService) { }

  get<T>(url: string) {
    //console.log(this.appUtil.getToken());
    let _headers = { Authorization: "Bearer "+this.appUtil.getToken() };
    console.log(_headers);

    return this.http.get<T>(url, {
      headers: _headers
    }).pipe(
      catchError(error => {
        AppHelpersService.procesarError(error);
        return throwError(error);
      })
    );
  }

  post<T>(url: string, data: any) {
    //console.log(this.appUtil.getToken());
    let _headers = { Authorization: this.appUtil.getToken() };
    // console.log(data);
    return this.http.post<T>(url, data, {
      headers: _headers
    }).pipe(
      catchError(error => {
        AppHelpersService.procesarError(error);
        return throwError(error);
      })
    );
  }

  put<T>(url: string, data: any) {
    //console.log(this.appUtil.getToken());
    let _headers = { Authorization: this.appUtil.getToken() };
    // console.log(data);
    return this.http.put<T>(url, data, {
      headers: _headers
    }).pipe(
      catchError(error => {
        AppHelpersService.procesarError(error);
        return throwError(error);
      })
    );
  }

  //Método delete de http
  delete<T>(url: string, data: any) {
    let _headers = { Authorization: this.appUtil.getToken() };
    return this.http.delete<T>(url, {
      headers: _headers
    }).pipe(
      catchError(error => {
        AppHelpersService.procesarError(error);
        return throwError(error);
      })
    );
  }
}
